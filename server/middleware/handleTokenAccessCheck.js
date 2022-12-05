const { TokenService } = require("../services/TokenService");
const config = require("config");
const handleTokenAccessCheck = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    const verifiedToken = TokenService.validate(token, config.get("jwt")["SECRET_ACCESS_KEY"]);

    if (!verifiedToken) {
        return res.format({
            "text/plain": () => res.status(401).send("Отсутствует авторизация"),
            "text/html": () => res.status(401).send(`<h1>Отсутствует авторизация</h1>`),
            "application/json": () => res.status(401).json({
                code: 401,
                message: "Отсутствует авторизация"
            })
        });
    }

    req.currentUser = verifiedToken;

    return next();
};

module.exports = {
    handleTokenAccessCheck
};
