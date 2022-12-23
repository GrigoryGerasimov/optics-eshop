const { Router } = require("express");
const glassTypeRoutes = Router();
const { GlassTypeController } = require("../controllers/GlassTypeController");

glassTypeRoutes
    .route("/")
    .get(GlassTypeController.read)

module.exports = glassTypeRoutes;
