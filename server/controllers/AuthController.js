const { TokenService } = require("../services/TokenService");
const config = require("config");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const controllerConfig = require("./controllerConfig");
const { UserService } = require("../services/UserService");
const { formatResponse } = require("../utils/formatResponse");

class AuthController {
    static async signIn (req, res) {
        try {
            const newTokens = TokenService.generate(req.currentUser);
            await TokenService.save(req.currentUser, newTokens.refreshToken);
            res.status(200).json({
                code: 200,
                message: "Пользователь успешно залогинен",
                data: newTokens
            });
            return newTokens;
        } catch (err) {
            formatResponse(res, 400, err);
        }
    }

    static async signUp (req, res) {
        if (!validationResult(req).isEmpty()) {
            return formatResponse(res, 401, "Проверка на валидацию обязательных данных завершилась ошибкой");
        }

        if (req.files.file.size > controllerConfig["FILE_SIZE_LIMIT"]) {
            return formatResponse(res, 413, "Объём загружаемого файла превысил установленный лимит в 50Mb. Попробуйте загрузить файл меньшего размера");
        }

        try {
            const hashedPassword = await bcrypt.hash(req.body.password, controllerConfig["SALT"]);
            const newUser = await UserService.create(req.files.file, { ...req.body, password: hashedPassword });

            const newUserTokens = TokenService.generate(newUser._id.toString());
            await TokenService.save(newUser._id.toString(), newUserTokens.refreshToken);
            res.status(201).json({
                code: 201,
                message: "Пользователь успешно занесён в коллекцию",
                data: newUserTokens
            });
        } catch (err) {
            formatResponse(res, 400, err);
        }
    }

    static async refresh (req, res) {
        const isTokenInvalid = (dbToken, token) => !dbToken || !token || token !== dbToken?.userId.toString();

        const dbToken = await TokenService.readToken(req.body.refreshToken);
        const verifiedToken = TokenService.validate(dbToken.refreshToken, config.get("jwt")["SECRET_REFRESH_KEY"]);
        if (isTokenInvalid(dbToken, verifiedToken)) {
            return formatResponse(res, 401, "Отсутствует авторизация");
        }

        try {
            const refreshedTokens = TokenService.generate(verifiedToken);
            await TokenService.save(verifiedToken, refreshedTokens.refreshToken);
            res.status(200).json({
                code: 200,
                message: "Токен успешно обновлён",
                data: refreshedTokens
            });
            return refreshedTokens;
        } catch (err) {
            formatResponse(res, 400, err);
        }
    }
}

module.exports = {
    AuthController
};
