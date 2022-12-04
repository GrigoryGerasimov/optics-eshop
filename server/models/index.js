const { User } = require("./User");
const { Feedback } = require("./Feedback");

const models = {};

models.User = User;
models.Feedback = Feedback;

module.exports = {
    models
};
