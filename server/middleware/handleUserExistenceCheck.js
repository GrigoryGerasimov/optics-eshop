const { models } = require("../models");
const { formatResponse } = require("../utils/formatResponse");

const handleUserExistenceCheck = async (req, res, next) => {
    const { username, email } = req.body;

    const existingUser = await models.User.findOne({ username }).exec() || await models.User.findOne({ email }).exec();
    if (existingUser) {
        return formatResponse(res, 400, "Данный пользователь уже зарегистрирован");
    } else next();
};

module.exports = {
    handleUserExistenceCheck
}