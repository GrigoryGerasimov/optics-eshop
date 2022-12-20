const { ShipmentTypeService } = require("../services/ShipmentTypeService");
const { formatResponse } = require("../utils/formatResponse");

class ShipmentTypeController {
    static async read(req, res) {
        try {
            const shipmentTypes = await ShipmentTypeService.read();
            res.status(200).json({
                code: 200,
                message: "Полный список типов доставки успешно получен",
                data: shipmentTypes
            });
        } catch (err) {
            formatResponse(res, 400, err);
        }
    }

    static async readById(req, res) {
        try {
            const { shipmentTypeId } = req.params;
            const shipmentType = await ShipmentTypeService.readById(shipmentTypeId);
            res.status(200).json({
                code: 200,
                message: `Тип доставки ${shipmentTypeId} успешно найден`,
                data: shipmentType
            })
        } catch (err) {
            formatResponse(res, 400, err);
        }
    }
}

module.exports = {
    ShipmentTypeController
};
