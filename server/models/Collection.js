const { Schema, model } = require("mongoose");

const schema = new Schema({
    season: {
        ss22: [{
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
        fw22: [{
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
        ss23: [{
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
        fw23: [{
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
    }
}, {
    timestamps: true
});

const Collection = model("Collection", schema);

module.exports = {
    Collection
};
