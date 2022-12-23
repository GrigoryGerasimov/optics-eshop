const { models } = require("../models/index");

class UserService {
    static async read () {
        try {
            return await models.User.find().exec();
        } catch (err) {
            process.env.NODE_ENV === "development" && console.log(err);
            throw new Error("Вследствие возникшей ошибки невозможно выполнение операции. Повторите попытку");
        }
    }

    static async readById (id) {
        try {
            return await models.User.findById(id).exec();
        } catch (err) {
            process.env.NODE_ENV === "development" && console.log(err);
            throw new Error("Вследствие возникшей ошибки невозможно выполнение операции. Повторите попытку");
        }
    }
    static async create (payload) {
        if (!payload) throw new Error("Отсутствуют данные для создания нового пользователя");

        try {
            return await models.User.create(payload);
        } catch (err) {
            process.env.NODE_ENV === "development" && console.log(err);
            throw new Error("Вследствие возникшей ошибки запись нового пользователя не могла быть создана");
        }
    }

    static async update (id, payload) {
        if (!payload) throw new Error("Отсутствуют данные для обновления");

        try {
            const updatedEntity = await models.User.findByIdAndUpdate(id, payload, { new: true }).exec();
            await updatedEntity.save();
            return updatedEntity;
        } catch (err) {
            process.env.NODE_ENV === "development" && console.log(err);
            throw new Error("Вследствие возникшей ошибки данные пользователя не смогли быть изменены");
        }
    }

    static async delete (id) {
        try {
            await models.User.findByIdAndDelete(id);
        } catch (err) {
            process.env.NODE_ENV === "development" && console.log(err);
            throw new Error("Вследствие возникшей ошибки пользователь не мог быть удалён");
        }
    }
}

module.exports = {
    UserService
};
