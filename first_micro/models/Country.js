const { Schema, model } = require("mongoose");

const schema = new Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

const Country = model("Country", schema);

module.exports = {
    Country
};
