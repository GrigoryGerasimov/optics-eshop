const { CollectionService } = require("../services/CollectionService");
const { formatResponse } = require("../utils/formatResponse");

class CollectionController {
    static async read(req, res) {
        try {
            const collections = await CollectionService.read();
            res.status(200).json({
                code: 200,
                message: "Полный список коллекций успешно получен",
                data: collections
            });
        } catch (err) {
            formatResponse(res, 400, err);
        }
    }
}

module.exports = {
    CollectionController
};
