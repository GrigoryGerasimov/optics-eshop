const { TokenService } = require("../services/TokenService");
const config = require("config");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const controllerConfig = require("./controllerConfig");
const { UserService } = require("../services/UserService");

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
            res.format({
                "text/plain": () => res.status(400).send(`${err}`),
                "text/html": () => res.status(400).send(`<h1>${err}</h1>`),
                "application/json": () => res.status(400).json({
                    code: 400,
                    message: err
                })
            });
        }
    }

    static async signUp (req, res) {
        if (!validationResult(req).isEmpty()) {
            return res.format({
                "text/plain": () => res.status(401).send("Проверка на валидацию обязательных данных завершилась ошибкой"),
                "text/html": () => res.status(401).send("<h1>Проверка на валидацию обязательных данных завершилась ошибкой</h1>"),
                "application/json": () => res.status(401).json({
                    error: {
                        code: 401,
                        message: "Проверка на валидацию обязательных данных завершилась ошибкой",
                        errors: validationResult(req).array()
                    }
                })
            });
        }

        if (!req.files || !Object.keys(req.files).length) {
            return res.format({
                "text/plain": () => res.status(400).send("Отсутствует прикреплённый файл"),
                "text/html": () => res.status(400).send("<h1>Отсутствует прикреплённый файл</h1>"),
                "multipart/form-data": () => res.status(400).send("<h1>Отсутствует прикреплённый файл</h1>"),
                "application/x-www-form-urlencoded": () => res.status(400).send("<h1>Отсутствует прикреплённый файл</h1>"),
                "application/json": () => res.status(400).json({
                    code: 400,
                    message: "Отсутствует прикреплённый файл"
                })
            })
        } else if (req.files.file.size > 52_428_800) {
            return res.format({
                "multipart/form-data": () => res.status(413).send("<h1>Объём загружаемого файла превысил установленный лимит в 50Mb. Попробуйте загрузить файл меньшего размера</h1>"),
                "application/x-www-form-urlencoded": () => res.status(413).send("<h1>Объём загружаемого файла превысил установленный лимит в 50Mb. Попробуйте загрузить файл меньшего размера</h1>"),
                "application/json": () => res.status(413).json({
                    code: 413,
                    message: "Объём загружаемого файла превысил установленный лимит в 50Mb. Попробуйте загрузить файл меньшего размера"
                })
            })
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
            res.format({
                "text/plain": () => res.status(400).send(`${err}`),
                "text/html": () => res.status(400).send(`<h1>${err}</h1>`),
                "application/json": () => res.status(400).json({
                    code: 400,
                    message: err
                })
            });
        }
    }

    static async refresh (req, res) {
        const isTokenInvalid = (dbToken, token) => !dbToken || !token || token !== dbToken?.userId.toString();

        const dbToken = await TokenService.readToken(req.body.refreshToken);
        const verifiedToken = TokenService.validate(dbToken.refreshToken, config.get("jwt")["SECRET_REFRESH_KEY"]);
        if (isTokenInvalid(dbToken, verifiedToken)) {
            return res.format({
                "text/plain": () => res.status(401).send("Отсутствует авторизация"),
                "text/html": () => res.status(401).send(`<h1>Отсутствует авторизация</h1>`),
                "application/json": () => res.status(401).json({
                    code: 401,
                    message: "Отсутствует авторизация"
                })
            });
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
            res.format({
                "text/plain": () => res.status(400).send(`${err}`),
                "text/html": () => res.status(400).send(`<h1>${err}</h1>`),
                "application/json": () => res.status(400).json({
                    code: 400,
                    message: err
                })
            });
        }
    }
}

module.exports = {
    AuthController
};
