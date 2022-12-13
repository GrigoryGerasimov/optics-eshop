const { models } = require("../models/index");

class FeedbackService {
    static async read () {
        try {
            return await models.Feedback.find().exec();
        } catch (err) {
            process.env.NODE_ENV === "development" && console.log(err);
            throw new Error("Вследствие возникшей ошибки невозможно выполнение операции. Повторите попытку");
        }
    }

    static async readFiltered (filterKey, filterValue) {
        try {
            return await models.Feedback.find({ [filterKey]: filterValue }).exec();
        } catch (err) {
            process.env.NODE_ENV === "development" && console.log(err);
            throw new Error("Вследствие возникшей ошибки невозможно выполнение операции. Повторите попытку");
        }
    }

    static async readById (id) {
        try {
            return await models.Feedback.findById(id).exec();
        } catch (err) {
            process.env.NODE_ENV === "development" && console.log(err);
            throw new Error("Вследствие возникшей ошибки невозможно выполнение операции. Повторите попытку");
        }
    }
    static async create (payload) {
        if (!payload) throw new Error("Отсутствуют данные для обновления");

        try {
            return await models.Feedback.create(payload);
        } catch (err) {
            process.env.NODE_ENV === "development" && console.log(err);
            throw new Error("Вследствие возникшей ошибки новый отзыв о товаре не мог быть создан");
        }
    }

    static async update (id, payload) {
        if (!payload) throw new Error("Отсутствуют данные для обновления");

        try {
            const updatedEntity = await models.Feedback.findByIdAndUpdate(id, payload, { new: true }).exec();
            await updatedEntity.save();
            return updatedEntity;
        } catch (err) {
            process.env.NODE_ENV === "development" && console.log(err);
            throw new Error("Вследствие возникшей ошибки отзыв о товаре не мог быть изменён");
        }
    }

    static async delete (id) {
        try {
            await models.Feedback.findByIdAndDelete(id);
        } catch (err) {
            process.env.NODE_ENV === "development" && console.log(err);
            throw new Error("Вследствие возникшей ошибки отзыв о товаре не мог быть удалён");
        }
    }
}

module.exports = {
    FeedbackService
};
