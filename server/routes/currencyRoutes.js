const { Router } = require("express");
const currencyRoutes = Router();
const { CurrencyController } = require("../controllers/CurrencyController");

currencyRoutes
    .route("/")
    .get(CurrencyController.read)

currencyRoutes
    .route("/:currencyId")
    .get(CurrencyController.readById)

module.exports = currencyRoutes;
