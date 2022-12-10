const { Schema, model } = require("mongoose");

const schema = new Schema({
    img: {
        type: String,
        required: true
    },
    imgBig: {
        type: String,
        required: true
    },
    imgSmall: {
        type: Array,
        required: true
    },
    name: {
        type: String,
        required: true
    },
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
    colors: [{
        type: Schema.Types.ObjectId,
        required: true
    }],
    shipmentType: [{
        type: Schema.Types.ObjectId,
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
        required: true
    },
});

const Product = model("Product", schema);

module.exports = {
    Product
};
