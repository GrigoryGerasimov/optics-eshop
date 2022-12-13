const { Router } = require("express");
const feedbackRoutes = Router();
const { FeedbackController } = require("../controllers/FeedbackController");
const { mw } = require("../middleware");

const { onTokenAccessCheck } = mw;

feedbackRoutes
    .route("/")
    .get(onTokenAccessCheck, FeedbackController.read)
    .post(onTokenAccessCheck, FeedbackController.create);

feedbackRoutes
    .route("/:feedbackId")
    .get(FeedbackController.readById)
    .put(FeedbackController.update)
    .patch(FeedbackController.update)
    .delete(FeedbackController.delete);

module.exports = feedbackRoutes;
