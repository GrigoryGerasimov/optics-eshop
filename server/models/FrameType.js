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

const FrameType = model("FrameType", schema);

module.exports = {
    FrameType
};
