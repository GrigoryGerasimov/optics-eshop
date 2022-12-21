const { Router } = require("express");
const userRoutes = Router();
const { UserController } = require("../controllers/UserController");
// const { mw } = require("../middleware");
//
// const { onTokenAccessCheck, onRoleAccessCheck } = mw;

userRoutes
    .route("/")
    .get(UserController.read)
    .post(UserController.create);

userRoutes
    .route("/:userId")
    .get(UserController.readById)
    .put(UserController.update)
    .patch(UserController.update)
    .delete(UserController.delete);

module.exports = userRoutes;
