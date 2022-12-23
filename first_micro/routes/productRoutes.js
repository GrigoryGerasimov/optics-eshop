const { Router } = require("express");
const productRoutes = Router();
const { ProductController } = require("../controllers/ProductController");
const { mw } = require("../middleware");

const { onTokenAccessCheck, onRoleAccessCheck } = mw;

productRoutes
    .route("/")
    .get(ProductController.read)
    .post(onTokenAccessCheck, onRoleAccessCheck("vendor"), ProductController.create);

productRoutes
    .route("/:productId")
    .get(ProductController.readById)
    .put(onTokenAccessCheck, onRoleAccessCheck("vendor"), ProductController.update)
    .patch(onTokenAccessCheck, onRoleAccessCheck("vendor"), ProductController.update)
    .delete(onTokenAccessCheck, onRoleAccessCheck("vendor"), ProductController.delete);

module.exports = productRoutes;
