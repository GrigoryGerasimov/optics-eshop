const { TokenService } = require("../services/TokenService");
const config = require("config");
const { formatResponse } = require("../utils/formatResponse");
const handleTokenAccessCheck = (req, res, next) => {
    if (req.method === "OPTIONS") next();

    const token = req.headers.authorization?.split(" ")[1];

    const verifiedToken = TokenService.validate(token, config.get("jwt")["SECRET_ACCESS_KEY"]);

    if (!verifiedToken) {
        return formatResponse(res, 401, "Отсутствует авторизация");
    }

    req.currentUser = verifiedToken._id;

    return next();
};

module.exports = {
    handleTokenAccessCheck
};
