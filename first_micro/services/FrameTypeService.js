const { models } = require("../models/index");

class FrameTypeService {
    static async read () {
        try {
            return await models.FrameType.find().exec();
        } catch (err) {
            process.env.NODE_ENV === "development" && console.log(err);
            throw new Error("Вследствие возникшей ошибки невозможно выполнение операции. Повторите попытку");
        }
    }
}

module.exports = {
    FrameTypeService
};
