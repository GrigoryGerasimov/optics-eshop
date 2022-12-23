const { FrameTypeService } = require("../services/FrameTypeService");
const { formatResponse } = require("../utils/formatResponse");

class FrameTypeController {
    static async read(req, res) {
        try {
            const frameTypes = await FrameTypeService.read();
            res.status(200).json({
                code: 200,
                message: "Полный список типов оправ успешно получен",
                data: frameTypes
            });
        } catch (err) {
            formatResponse(res, 400, err);
        }
    }
}

module.exports = {
    FrameTypeController
};
