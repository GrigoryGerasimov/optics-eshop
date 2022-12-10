const { User } = require("./User");
const { Feedback } = require("./Feedback");
const { Token } = require("./Token");
const { Role } = require("./Role");
const { Collection } = require("./Collection");
const { GlassType } = require("./GlassType");
const { FrameType } = require("./FrameType");
const { LenseType } = require("./LenseType");
const { Product } = require("./Product");
const { Country } = require("./Country");
const { Colour } = require("./Colour");
const { ShipmentType } = require("./ShipmentType");

const models = {};

models.User = User;
models.Feedback = Feedback;
models.Token = Token;
models.Role = Role;
models.Collection = Collection;
models.GlassType = GlassType;
models.FrameType = FrameType;
models.LenseType = LenseType;
models.Product = Product;
models.Country = Country;
models.Colour = Colour;
models.ShipmentType = ShipmentType;

module.exports = {
    models
};
