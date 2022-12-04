const { Schema, model } = require("mongoose");

const schema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: false,
        enum: ["male", "female", "other"]
    },
    fileName: {
        type: String
    },
    adv: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
});

const User = model("User", schema);

module.exports = {
    User
};
