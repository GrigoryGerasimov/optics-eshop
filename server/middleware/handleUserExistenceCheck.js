const { models } = require("../models");

const handleUserExistenceCheck = async (req, res, next) => {
    const { username, email } = req.body;

    const existingUser = await models.User.findOne({ username }).exec() || await models.User.findOne({ email }).exec();
    if (existingUser) {
        return res.format({
            "text/plain": () => res.status(400).send("Данный пользователь уже зарегистрирован"),
            "text/html": () => res.status(400).send("<h1>Данный пользователь уже зарегистрирован</h1>"),
            "application/json": () => res.status(400).json({
                error: {
                    code: 400,
                    message: "Данный пользователь уже зарегистрирован"
                }
            })
        });
    } else next();
};

module.exports = {
    handleUserExistenceCheck
}