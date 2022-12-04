const bcrypt = require("bcrypt");

module.exports = {
    "SALT": bcrypt.genSalt(12)
};
