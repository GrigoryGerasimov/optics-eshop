const { Schema, model } = require("mongoose");

const schema = new Schema({
    code: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

const Currency = model("Currency", schema);

module.exports = {
    Currency
};
