const { models } = require("../models/index");

class ProductService {
    static async read () {
        try {
            return await models.Product.find().exec();
        } catch (err) {
            process.env.NODE_ENV === "development" && console.log(err);
            throw new Error("Вследствие возникшей ошибки невозможно выполнение операции. Повторите попытку");
        }
    }

    static async readById (id) {
        try {
            return await models.Product.findById(id).exec();
        } catch (err) {
            process.env.NODE_ENV === "development" && console.log(err);
            throw new Error("Вследствие возникшей ошибки невозможно выполнение операции. Повторите попытку");
        }
    }
    static async create (payload) {
        if (!payload) throw new Error("Отсутствуют данные для обновления");

        try {
            return await models.Product.create(payload);
        } catch (err) {
            process.env.NODE_ENV === "development" && console.log(err);
            throw new Error("Вследствие возникшей ошибки запись нового артикула не могла быть создана");
        }
    }

    static async update (id, payload) {
        if (!payload) throw new Error("Отсутствуют данные для обновления");

        try {
            const updatedEntity = await models.Product.findByIdAndUpdate(id, payload, { new: true }).exec();
            await updatedEntity.save();
            return updatedEntity;
        } catch (err) {
            process.env.NODE_ENV === "development" && console.log(err);
            throw new Error("Вследствие возникшей ошибки данные артикула не смогли быть изменены");
        }
    }

    static async delete (id) {
        try {
            await models.Product.findByIdAndDelete(id);
        } catch (err) {
            process.env.NODE_ENV === "development" && console.log(err);
            throw new Error("Вследствие возникшей ошибки артикул не мог быть удалён");
        }
    }
}

module.exports = {
    ProductService
};
