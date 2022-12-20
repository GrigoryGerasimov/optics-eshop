const { LenseTypeService } = require("../services/LenseTypeService");
const { formatResponse } = require("../utils/formatResponse");

class LenseTypeController {
    static async read(req, res) {
        try {
            const lenseTypes = await LenseTypeService.read();
            res.status(200).json({
                code: 200,
                message: "Полный список типов линз успешно получен",
                data: lenseTypes
            });
        } catch (err) {
            formatResponse(res, 400, err);
        }
    }
}

module.exports = {
    LenseTypeController
};
