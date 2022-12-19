const { Router } = require("express");
const countryRoutes = Router();
const { CountryController } = require("../controllers/CountryController");

countryRoutes
    .route("/")
    .get(CountryController.read)

countryRoutes
    .route("/:countryId")
    .get(CountryController.readById)

module.exports = countryRoutes;
