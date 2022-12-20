const { GlassTypeService } = require("../services/GlassTypeService");
const { formatResponse } = require("../utils/formatResponse");

class GlassTypeController {
    static async read(req, res) {
        try {
            const glassTypes = await GlassTypeService.read();
            res.status(200).json({
                code: 200,
                message: "Полный список типов очков успешно получен",
                data: glassTypes
            });
        } catch (err) {
            formatResponse(res, 400, err);
        }
    }
}

module.exports = {
    GlassTypeController
};
