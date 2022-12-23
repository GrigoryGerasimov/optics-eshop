const { UserService } = require("../services/UserService");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const { formatResponse } = require("../utils/formatResponse");

class UserController {
    static async read(req, res) {
        try {
            const users = await UserService.read();
            res.status(200).json({
                code: 200,
                message: "Коллекция пользователей успешно получена",
                data: users
            });
        } catch (err) {
            formatResponse(res, 400, err);
        }
    }

    static async readById(req, res) {
        try {
            const { userId } = req.params;
            const user = await UserService.readById(userId);
            res.status(200).json({
                code: 200,
                message: `Пользователь ${userId} успешно найден`,
                data: user
            })
        } catch (err) {
            formatResponse(res, 400, err);
        }
    }

    static async create(req, res) {
        if (!validationResult(req).isEmpty()) {
            return formatResponse(res, 401, "Проверка на валидацию обязательных данных завершилась ошибкой");
        }

        try {
            const hashedPassword = await bcrypt.hash(req.body.password, 12);
            const newUser = await UserService.create({ ...req.body, password: hashedPassword });
            res.status(201).json({
                code: 201,
                message: "Пользователь успешно занесён в коллекцию",
                data: newUser
            });
            return newUser;
        } catch (err) {
            formatResponse(res, 400, err);
        }
    }

    static async update(req, res) {
        try {
            const { userId } = req.params;
            const updatedUser = await UserService.update(userId, req.body);
            res.status(200).json({
                code: 200,
                message: `Данные пользователя по искомому ID ${userId} успешно изменены`,
                data: updatedUser
            })
        } catch (err) {
            formatResponse(res, 400, err);
        }
    }

    static async delete(req, res) {
        try {
            const { userId } = req.params;
            await UserService.delete(userId);
            res.status(200).json({
                code: 200,
                message: `Пользователь ${userId} успешно удалён`,
                data: null
            });
        } catch (err) {
            formatResponse(res, 400, err);
        }
    }
}

module.exports = {
    UserController
};
