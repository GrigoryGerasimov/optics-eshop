const { UserService } = require("../services/UserService");
const { validationResult } = require("express-validator");

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

    static async create(req, res) {
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
        };

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
            const newUser = await UserService.create(req.files.file, req.body);
            res.status(201).json({
                code: 201,
                message: "Пользователь успешно занесён в коллекцию",
                data: newUser
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

    static async update(req, res) {
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
            const { userId } = req.params;
            const updatedUser = await UserService.update(userId, req.files.file, req.body);
            res.status(200).json({
                code: 200,
                message: `Данные пользователя по искомому ID ${userId} успешно изменены`,
                data: updatedUser
            })
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
    UserController
};
