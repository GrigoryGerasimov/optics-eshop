const { validationResult } = require("express-validator");
const { models } = require("../models");
const bcrypt = require("bcryptjs");
const controllerConfig = require("../controllers/controllerConfig");
const config = require("config");
const { formatResponse } = require("../utils/formatResponse");

const handleAuth = async (req, res, next) => {
    if (req.method === "OPTIONS") return next();

    if (!validationResult(req).isEmpty()) {
        return formatResponse(res, 401, "Проверка на валидацию обязательных данных завершилась ошибкой");
    }

    const { email, password } = req.body;

    const existingUser = await models.User.findOne({ email }).exec();
    if (!existingUser) {
        return formatResponse(res, 401, "Проверка на валидацию обязательных данных завершилась ошибкой");
    }

    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    const saltRoundsConfirmed = await bcrypt.getRounds(existingUser.password);
    if (!isPasswordValid || saltRoundsConfirmed !== controllerConfig["SALT"]) {
        return formatResponse(res, 400, "Введённые данные некорректны");
    }

    return next();
};

module.exports = {
    handleAuth
};
