const { models } = require("../models/index");

class LenseTypeService {
    static async read () {
        try {
            return await models.LenseType.find().exec();
        } catch (err) {
            process.env.NODE_ENV === "development" && console.log(err);
            throw new Error("Вследствие возникшей ошибки невозможно выполнение операции. Повторите попытку");
        }
    }
}

module.exports = {
    LenseTypeService
};
