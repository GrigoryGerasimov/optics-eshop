const { Schema, model } = require("mongoose");

const schema = new Schema({
    type: [{
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

const LenseType = model("LenseType", schema);

module.exports = {
    LenseType
};
