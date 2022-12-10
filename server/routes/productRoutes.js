const { Router } = require("express");
const productRoutes = Router();
const { ProductController } = require("../controllers/ProductController");
const { mw } = require("../middleware");

const { onTokenAccessCheck, onRoleAccessCheck } = mw;

productRoutes
    .route("/")
    .get(onTokenAccessCheck, ProductController.read)
    .post(onTokenAccessCheck, onRoleAccessCheck(["admin", "retailer"]), ProductController.create);

productRoutes
    .route("/:productId")
    .get(ProductController.readById)
    .put(ProductController.update)
    .patch(ProductController.update)
    .delete(ProductController.delete);

module.exports = productRoutes;
