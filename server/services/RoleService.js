const { models } = require("../models");

class RoleService {
    static async read () {
        try {
            return await models.Role.find().exec();
        } catch (err) {
            process.env.NODE_ENV === "development" && console.log(err);
            throw new Error("Вследствие возникшей ошибки невозможно выполнение операции. Повторите попытку");
        }
    }

    static async readById (id) {
        try {
            return await models.Role.findById(id).exec();
        } catch (err) {
            process.env.NODE_ENV === "development" && console.log(err);
            throw new Error("Вследствие возникшей ошибки невозможно выполнение операции. Повторите попытку");
        }
    }

    static async readSelected () {
        try {
            const vendorRole = await models.Role.findOne({ code: "vendor" }).exec();
            const buyerRole = await models.Role.findOne({ code: "buyer" }).exec();
            return { vendorRole, buyerRole };
        } catch (err) {
            process.env.NODE_ENV === "development" && console.log(err);
            throw new Error("Вследствие возникшей ошибки невозможно выполнение операции. Повторите попытку");
        }
    }
}

module.exports = {
    RoleService
};
