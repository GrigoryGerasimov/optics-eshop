const { Schema, model } = require("mongoose");

const schema = new Schema({
    cold: [{
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
    }],
    warm: [{
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
    }]
});

const Colour = model("Colour", schema);

module.exports = {
    Colour
};
