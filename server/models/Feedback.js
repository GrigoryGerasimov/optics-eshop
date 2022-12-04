const { Schema, model } = require("mongoose");

const schema = new Schema({
    content: {
        type: String,
        required: true
    },
    productCardId: {
        // type: Schema.Types.ObjectId,
        type: String,
        required: true
    },
    userId: {
        // type: Schema.Types.ObjectId,
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Feedback = model("Feedback", schema);

module.exports = {
    Feedback
};
