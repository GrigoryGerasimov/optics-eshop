const { User } = require("./User");
const { Feedback } = require("./Feedback");
const { Token } = require("./Token");
const { Role } = require("./Role");

const models = {};

models.User = User;
models.Feedback = Feedback;
models.Token = Token;
models.Role = Role;

module.exports = {
    models
};
