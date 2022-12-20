const { Router } = require("express");
const frameTypeRoutes = Router();
const { FrameTypeController } = require("../controllers/FrameTypeController");

frameTypeRoutes
    .route("/")
    .get(FrameTypeController.read)

module.exports = frameTypeRoutes;
