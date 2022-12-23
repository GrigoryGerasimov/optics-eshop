const { TokenService } = require("../services/TokenService");
const config = require("config");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const { UserService } = require("../services/UserService");
const { formatResponse } = require("../utils/formatResponse");

class AuthController {
    static async signIn (req, res) {
        try {
            const newTokens = TokenService.generate({ _id: req.currentUser._id });
            await TokenService.save(req.currentUser._id, newTokens.refreshToken);
            res.status(200).json({
                code: 200,
                message: "Пользователь успешно залогинен",
                data: { ...newTokens, userId: req.currentUser._id }
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

        try {
            const hashedPassword = await bcrypt.hash(req.body.password, 12);
            const newUser = await UserService.create({ ...req.body, password: hashedPassword });

            const newUserTokens = TokenService.generate({ _id: newUser._id });
            await TokenService.save(newUser._id, newUserTokens.refreshToken);
            res.status(201).json({
                code: 201,
                message: "Пользователь успешно занесён в коллекцию",
                data: { ...newUserTokens, userId: newUser._id }
            });
        } catch (err) {
            formatResponse(res, 400, err);
        }
    }

    static async refresh (req, res) {
        const isTokenInvalid = (dbToken, token) => !dbToken || !token || token._id !== dbToken?.userId.toString();

        const dbToken = await TokenService.readToken(req.body.refreshToken);
        const verifiedToken = TokenService.validate(dbToken.refreshToken, config.get("jwt")["SECRET_REFRESH_KEY"]);

        if (isTokenInvalid(dbToken, verifiedToken)) {
            return formatResponse(res, 401, "Отсутствует авторизация");
        }

        try {
            const refreshedTokens = TokenService.generate({ _id: verifiedToken._id });
            await TokenService.save(verifiedToken._id, refreshedTokens.refreshToken);
            res.status(200).json({
                code: 200,
                message: "Токен успешно обновлён",
                data: { ...refreshedTokens, userId: verifiedToken._id }
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
