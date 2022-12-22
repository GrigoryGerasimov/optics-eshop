const { Schema, model } = require("mongoose");

const schema = new Schema({
    code: {
        type: String,
        required: true
    },
    title: {
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
