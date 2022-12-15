const { UserService } = require("../services/UserService");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const controllerConfig = require("./controllerConfig");
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

        if (!req.files || !Object.keys(req.files).length) {
            return formatResponse(res, 400, "Отсутствует прикреплённый файл");
        } else if (req.files.file.size > controllerConfig["FILE_SIZE_LIMIT"]) {
            return formatResponse(res, 413, "Объём загружаемого файла превысил установленный лимит в 50Mb. Попробуйте загрузить файл меньшего размера");
        }

        try {
            const hashedPassword = await bcrypt.hash(req.body.password, controllerConfig["SALT"]);
            const newUser = await UserService.create(req.files.file, { ...req.body, password: hashedPassword });
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
        if (!req.files || !Object.keys(req.files).length) {
            return formatResponse(res, 400, "Отсутствует прикреплённый файл");
        } else if (req.files.file.size > controllerConfig["FILE_SIZE_LIMIT"]) {
            return formatResponse(res, 400, "Объём загружаемого файла превысил установленный лимит в 50Mb. Попробуйте загрузить файл меньшего размера");
        }

        try {
            const { userId } = req.params;
            const updatedUser = await UserService.update(userId, req.files.file, req.body);
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
