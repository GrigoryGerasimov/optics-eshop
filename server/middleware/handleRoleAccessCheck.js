const { UserService } = require("../services/UserService");
const { models } = require("../models");
const handleRoleAccessCheck = roleValue => async (req, res, next) => {
    const currentUser = await UserService.readById(req.currentUser);
    if (!currentUser) {
        return res.format({
            "text/plain": () => res.status(400).send("Текущий пользователь не найден"),
            "text/html": () => res.status(400).send(`<h1>Текущий пользователь не найден</h1>`),
            "application/json": () => res.status(400).json({
                code: 400,
                message: "Текущий пользователь не найден"
            })
        });
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

    return res.format({
        "text/plain": () => res.status(403).send("Доступ к данному разделу приложения ограничен"),
        "text/html": () => res.status(403).send(`<h1>Доступ к данному разделу приложения ограничен</h1>`),
        "application/json": () => res.status(403).json({
            code: 403,
            message: "Доступ к данному разделу приложения ограничен"
        })
    });
};

module.exports = {
    handleRoleAccessCheck
};
