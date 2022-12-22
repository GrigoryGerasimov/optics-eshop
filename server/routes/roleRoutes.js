const { Router } = require("express");
const roleRoutes = Router();
const { RoleController } = require("../controllers/RoleController");
const { ColorController } = require("../controllers/ColorController");

roleRoutes
    .route("/")
    .get(RoleController.read)

roleRoutes
    .route("/:roleId")
    .get(RoleController.readById)

module.exports = roleRoutes;
