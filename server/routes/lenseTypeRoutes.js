const { Router } = require("express");
const lenseTypeRoutes = Router();
const { LenseTypeController } = require("../controllers/LenseTypeController");

lenseTypeRoutes
    .route("/")
    .get(LenseTypeController.read)

module.exports = lenseTypeRoutes;
