const { Router } = require("express");
const colorRoutes = Router();
const { ColorController } = require("../controllers/ColorController");

colorRoutes
    .route("/")
    .get(ColorController.read)

colorRoutes
    .route("/:colorId")
    .get(ColorController.readById)

module.exports = colorRoutes;
