const { RoleService } = require("../services/RoleService");
const { formatResponse } = require("../utils/formatResponse");

class RoleController {
    static async read(req, res) {
        try {
            const roles = await RoleService.read();
            res.status(200).json({
                code: 200,
                message: "Полный список ролей успешно получен",
                data: roles
            });
        } catch (err) {
            formatResponse(res, 400, err);
        }
    }

    static async readById(req, res) {
        try {
            const { roleId } = req.params;
            const role = await RoleService.readById(roleId);
            res.status(200).json({
                code: 200,
                message: `Роль ${roleId} успешно найдена`,
                data: role
            })
        } catch (err) {
            formatResponse(res, 400, err);
        }
    }
}

module.exports = {
    RoleController
};
