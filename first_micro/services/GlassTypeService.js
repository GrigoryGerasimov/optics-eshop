const { models } = require("../models/index");

class GlassTypeService {
    static async read () {
        try {
            return await models.GlassType.find().exec();
        } catch (err) {
            process.env.NODE_ENV === "development" && console.log(err);
            throw new Error("Вследствие возникшей ошибки невозможно выполнение операции. Повторите попытку");
        }
    }
}

module.exports = {
    GlassTypeService
};
