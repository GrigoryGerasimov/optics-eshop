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

const ShipmentType = model("ShipmentType", schema);

module.exports = {
    ShipmentType
};
