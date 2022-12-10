const { Schema, model } = require("mongoose");

const schema = new Schema({
    diopters: [{
        id: {
            type: String,
            required: true,
            unique: true
        },
        code: {
            type: String,
            required: true,
            unique: true
        },
        title: {
            type: String,
            required: true
        }
    }],
    dioptersFree: [{
        id: {
            type: String,
            required: true,
            unique: true
        },
        code: {
            type: String,
            required: true,
            unique: true
        },
        title: {
            type: String,
            required: true
        }
    }]
});

const GlassType = model("GlassType", schema);

module.exports = {
    GlassType
};
