const { Schema, model } = require("mongoose");

const schema = new Schema({
    content: {
        type: String,
        required: true
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: "Product"
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
});

const Feedback = model("Feedback", schema);

module.exports = {
    Feedback
};
