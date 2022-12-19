const usersMock = require("../mockData/users.json");
const feedbacksMock = require("../mockData/feedbacks.json");
const rolesMock = require("../mockData/roles.json");
const collectionsMock = require("../mockData/collections.json");
const glassTypesMock = require("../mockData/glassTypes.json");
const frameTypesMock = require("../mockData/frameTypes.json");
const lenseTypesMock = require("../mockData/lenseTypes.json");
const productsMock = require("../mockData/products.json");
const countriesMock = require("../mockData/countries.json");
const colorsMock = require("../mockData/colors.json");
const shipmentTypesMock = require("../mockData/shipmentTypes.json");
const currenciesMock = require("../mockData/currencies.json");

const { models } = require("../models");
const chalk = require("chalk");

const initializeDB = async () => {
    const initModel = async (Model, data) => {
        await Model.collection.drop();
        try {
            await Promise.all(
                data.map(async item => {
                    await Model.create(item);
                    console.log(chalk.greenBright("Объект успешно проинициализирован"));
                })
            );
        } catch (err) {
            console.log(`При инициализации базы данных произошла ошибка: ${err.stack}`);
        }
    }

    const users = await models.User.find().exec();
    const feedbacks = await models.Feedback.find().exec();
    const roles = await models.Role.find().exec();
    const collections = await models.Collection.find().exec();
    const glassTypes = await models.GlassType.find().exec();
    const frameTypes = await models.FrameType.find().exec();
    const lenseTypes = await models.LenseType.find().exec();
    const products = await models.Product.find().exec();
    const countries = await models.Country.find().exec();
    const colors = await models.Color.find().exec();
    const shipmentTypes = await models.ShipmentType.find().exec();
    const currencies = await models.Currency.find().exec();

    if (users.length < usersMock.length) {
        await initModel(models.User, usersMock);
    }
    if (feedbacks.length < feedbacksMock.length) {
        await initModel(models.Feedback, feedbacksMock);
    }
    if (roles.length < rolesMock.length) {
        await initModel(models.Role, rolesMock);
    }
    if (collections.length < collectionsMock.length) {
        await initModel(models.Collection, collectionsMock);
    }
    if (glassTypes.length < glassTypesMock.length) {
        await initModel(models.GlassType, glassTypesMock);
    }
    if (frameTypes.length < frameTypesMock.length) {
        await initModel(models.FrameType, frameTypesMock);
    }
    if (lenseTypes.length < lenseTypesMock.length) {
        await initModel(models.LenseType, lenseTypesMock);
    }
    if (products.length < productsMock.length) {
        await initModel(models.Product, productsMock);
    }
    if (countries.length < countriesMock.length) {
        await initModel(models.Country, countriesMock);
    }
    if (colors.length < colorsMock.length) {
        await initModel(models.Color, colorsMock);
    }
    if (shipmentTypes.length < shipmentTypesMock.length) {
        await initModel(models.ShipmentType, shipmentTypesMock);
    }
    if (currencies.length < currenciesMock.length) {
        await initModel(models.Currency, currenciesMock);
    }
};

module.exports = {
    initializeDB
};
