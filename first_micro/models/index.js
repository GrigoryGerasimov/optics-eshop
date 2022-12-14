const { User } = require("./User");
const { Token } = require("./Token");
const { Role } = require("./Role");
const { Collection } = require("./Collection");
const { GlassType } = require("./GlassType");
const { FrameType } = require("./FrameType");
const { LenseType } = require("./LenseType");
const { Product } = require("./Product");
const { Country } = require("./Country");
const { Color } = require("./Color");
const { ShipmentType } = require("./ShipmentType");
const { Currency } = require("./Currency");

const models = {};

models.User = User;
models.Token = Token;
models.Role = Role;
models.Collection = Collection;
models.GlassType = GlassType;
models.FrameType = FrameType;
models.LenseType = LenseType;
models.Product = Product;
models.Country = Country;
models.Color = Color;
models.ShipmentType = ShipmentType;
models.Currency = Currency;

module.exports = {
    models
};
