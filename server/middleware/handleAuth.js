const { validationResult } = require("express-validator");
const { models } = require("../models");
const bcrypt = require("bcryptjs");
const controllerConfig = require("../controllers/controllerConfig");
const config = require("config");

const handleAuth = async (req, res, next) => {
    if (req.method === "OPTIONS") return next();

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

    const { email, password } = req.body;

    const existingUser = await models.User.findOne({ email }).exec();
    if (!existingUser) {
        return res.format({
            "text/plain": () => res.status(400).send("Пользователя с введёнными данными не существует"),
            "text/html": () => res.status(400).send(`<h1>Пользователя с введёнными данными не существует</h1>`),
            "application/json": () => res.status(400).json({
                code: 400,
                message: "Пользователя с введёнными данными не существует"
            })
        });
    }

    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    const saltRoundsConfirmed = await bcrypt.getRounds(existingUser.password);
    if (!isPasswordValid || saltRoundsConfirmed !== controllerConfig["SALT"]) {
        return res.format({
            "text/plain": () => res.status(400).send("Введённые данные некорректны"),
            "text/html": () => res.status(400).send(`<h1>Введённые данные некорректны</h1>`),
            "application/json": () => res.status(400).json({
                code: 400,
                message: "Введённые данные некорректны"
            })
        });
    }

    return next();
};

module.exports = {
    handleAuth
};
