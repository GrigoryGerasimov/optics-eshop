const { models } = require("../models/index");

class CollectionService {
    static async read () {
        try {
            return await models.Collection.find().exec();
        } catch (err) {
            process.env.NODE_ENV === "development" && console.log(err);
            throw new Error("Вследствие возникшей ошибки невозможно выполнение операции. Повторите попытку");
        }
    }
}

module.exports = {
    CollectionService
};
