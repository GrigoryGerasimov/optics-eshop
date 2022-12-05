const config = require("config");
const jwt = require("jsonwebtoken");
const { models } = require("../models");

class TokenService {
    static generate (payload) {
        try {
            const newAccessToken = jwt.sign({ _id: payload }, config.get("jwt")["SECRET_ACCESS_KEY"], { expiresIn: "1h" });
            const newRefreshToken = jwt.sign(payload, config.get("jwt")["SECRET_REFRESH_KEY"]);
            return { accessToken: newAccessToken, refreshToken: newRefreshToken, expiresIn: 3600 };
        } catch (err) {
            process.env.NODE_ENV === "development" && console.log(err);
            throw new Error("Вследствие возникшей ошибки новые токены не могли быть созданы");
        }
    }

    static async save (userId, refreshToken) {
        if (!refreshToken) throw new Error("Отсутствуют данные для создания нового токена");

        try {
            const existingRefresh = await models.Token.findOne({ userId }).exec();
            if (!existingRefresh) {
                await models.Token.create({ userId, refreshToken });
            } else {
                existingRefresh.refreshToken = refreshToken;
                return existingRefresh.save();
            }
        } catch (err) {
            process.env.NODE_ENV === "development" && console.log(err);
            throw new Error("Вследствие возникшей ошибки токен не мог быть обновлён");
        }
    }

    static validate (token, secret) {
        try {
            return jwt.verify(token, secret);
        } catch (err) {
            process.env.NODE_ENV === "development" && console.log(err);
            throw new Error("Вследствие возникшей ошибки токен не мог быть верифицирован");
        }
    }

    static async readToken (refreshToken) {
        try {
             return await models.Token.findOne({ refreshToken }).exec();
        } catch (err) {
            process.env.NODE_ENV === "development" && console.log(err);
            throw new Error("Токен не обнаружен");
        }
    }
}

module.exports = {
    TokenService
};
