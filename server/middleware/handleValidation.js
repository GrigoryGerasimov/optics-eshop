const { check } = require("express-validator");

const handleValidation = [
    check("email", "Введённый адрес электронной почты некорректен").exists().normalizeEmail().isEmail(),
    check("password", "Пароль должен состоять как минимум из 8 символов").exists().isLength({ min: 8 }),
    check("confirmPassword", "Повторно введённый пароль не совпадает с оригинальным").exists().custom((value, { req }) => value === req.body.password)
];

module.exports = {
    handleValidation
};
