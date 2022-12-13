const { UserService } = require("../services/UserService");
const { models } = require("../models");
const { formatResponse } = require("../utils/formatResponse");
const handleRoleAccessCheck = roleValue => async (req, res, next) => {
    const currentUser = await UserService.readById(req.currentUser);
    if (!currentUser) {
        return formatResponse(res, 400, "Текущий пользователь не найден");
    } else if (!currentUser.role) {
        return formatResponse(res, 400, "Роль текущего пользователя не определена");
    }

    if (typeof roleValue === "string") {
        const role = await models.Role.findOne({ value: roleValue }).exec();
        if (currentUser.role.toString() === role?._id?.toString()) {
            return next();
        }
    }

    if (Array.isArray(roleValue)) {
        for (const val of roleValue) {
            const role = await models.Role.findOne({ value: val }).exec();
            if (currentUser.role.toString() === role?._id?.toString()) {
                return next();
            }
        }
    }

    return formatResponse(res, 403, "Доступ к данному разделу приложения ограничен");
};

module.exports = {
    handleRoleAccessCheck
};
