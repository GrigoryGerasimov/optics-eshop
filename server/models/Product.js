const { Schema, model } = require("mongoose");

const schema = new Schema({
    img: {
        type: String,
        required: true
    },
    imgAddit: [{
        type: String,
        required: true
    }],
    title: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    params: [{
        type: Schema.Types.ObjectId,
        ref: "Collection",
        required: true
    }, {
        type: Schema.Types.ObjectId,
        ref: "GlassType",
        required: true
    }, {
        type: Schema.Types.ObjectId,
        ref: "FrameType",
        required: true
    }, {
        type: Schema.Types.ObjectId,
        ref: "LenseType",
        required: true
    }],
    collectionTitle: {
        type: String,
        required: true
    },
    productGroup: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    colours: [{
        type: Schema.Types.ObjectId,
        ref: "Colour",
        required: true
    }],
    shipmentType: [{
        type: Schema.Types.ObjectId,
        ref: "ShipmentType",
        required: true
    }],
    license: {
        type: String,
        required: true
    },
    additionalInfo: {
        type: String,
        required: true
    },
    warrantyPeriod: {
        type: String,
        required: true
    },
    countryOfOrigin: {
        type: Schema.Types.ObjectId,
        ref: "Country",
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    currencyCode: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Product = model("Product", schema);

module.exports = {
    Product
};
