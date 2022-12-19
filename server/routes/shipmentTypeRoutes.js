const { Router } = require("express");
const shipmentTypeRoutes = Router();
const { ShipmentTypeController } = require("../controllers/ShipmentTypeController");

shipmentTypeRoutes
    .route("/")
    .get(ShipmentTypeController.read)

shipmentTypeRoutes
    .route("/:shipmentTypeId")
    .get(ShipmentTypeController.readById)

module.exports = shipmentTypeRoutes;
