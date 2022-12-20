const { Schema, model } = require("mongoose");

const schema = new Schema({
    type: [{
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
}, {
    timestamps: true
});

const FrameType = model("FrameType", schema);

module.exports = {
    FrameType
};
