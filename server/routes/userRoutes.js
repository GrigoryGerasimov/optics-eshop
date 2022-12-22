const { Router } = require("express");
const userRoutes = Router();
const { UserController } = require("../controllers/UserController");
// const { mw } = require("../middleware");
//
// const { onTokenAccessCheck, onRoleAccessCheck } = mw;

userRoutes
    .route("/")
    .get(UserController.read)

userRoutes
    .route("/:userId")
    .get(UserController.readById)

module.exports = userRoutes;
