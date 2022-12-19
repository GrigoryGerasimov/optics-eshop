const { ColorService } = require("../services/ColorService");
const { formatResponse } = require("../utils/formatResponse");

class ColorController {
    static async read(req, res) {
        try {
            const colors = await ColorService.read();
            res.status(200).json({
                code: 200,
                message: "Полный список расцветок успешно получен",
                data: colors
            });
        } catch (err) {
            formatResponse(res, 400, err);
        }
    }

    static async readById(req, res) {
        try {
            const { colorId } = req.params;
            const color = await ColorService.readById(colorId);
            res.status(200).json({
                code: 200,
                message: `Расцветка ${colorId} успешно найдена`,
                data: color
            })
        } catch (err) {
            formatResponse(res, 400, err);
        }
    }
}

module.exports = {
    ColorController
};
