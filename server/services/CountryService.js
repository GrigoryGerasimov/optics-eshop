const { models } = require("../models/index");

class CountryService {
    static async read () {
        try {
            return await models.Country.find().exec();
        } catch (err) {
            process.env.NODE_ENV === "development" && console.log(err);
            throw new Error("Вследствие возникшей ошибки невозможно выполнение операции. Повторите попытку");
        }
    }

    static async readById (id) {
        try {
            return await models.Country.findById(id).exec();
        } catch (err) {
            process.env.NODE_ENV === "development" && console.log(err);
            throw new Error("Вследствие возникшей ошибки невозможно выполнение операции. Повторите попытку");
        }
    }
}

module.exports = {
    CountryService
};
