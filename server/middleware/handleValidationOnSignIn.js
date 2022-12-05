const { check } = require("express-validator");

const handleValidationOnSignIn = [
    check("email", "Введённый адрес электронной почты некорректен").exists().normalizeEmail().isEmail(),
    check("password", "Пароль должен состоять как минимум из 8 символов").exists().isLength({ min: 8 })
];

module.exports = {
    handleValidationOnSignIn
};
