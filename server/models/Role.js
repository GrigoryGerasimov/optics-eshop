const { Schema, model } = require("mongoose");

const schema = new Schema({
    value: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Role = model("Role", schema);

module.exports = {
    Role
};
