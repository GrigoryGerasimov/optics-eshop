const { Router } = require("express");
const collectionRoutes = Router();
const { CollectionController } = require("../controllers/CollectionController");

collectionRoutes
    .route("/")
    .get(CollectionController.read)

module.exports = collectionRoutes;
