const { models } = require("../models/index");

class ShipmentTypeService {
    static async read () {
        try {
            return await models.ShipmentType.find().exec();
        } catch (err) {
            process.env.NODE_ENV === "development" && console.log(err);
            throw new Error("Вследствие возникшей ошибки невозможно выполнение операции. Повторите попытку");
        }
    }

    static async readById (id) {
        try {
            return await models.ShipmentType.findById(id).exec();
        } catch (err) {
            process.env.NODE_ENV === "development" && console.log(err);
            throw new Error("Вследствие возникшей ошибки невозможно выполнение операции. Повторите попытку");
        }
    }
}

module.exports = {
    ShipmentTypeService
};
