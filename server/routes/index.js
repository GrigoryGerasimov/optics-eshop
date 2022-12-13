const { Router } = require("express");
const router = Router({ mergeParams: true });
const { mw } = require("../middleware");

router.use(mw.onAccept);
router.use("/users", require("./userRoutes"));
router.use("/auth", require("./authRoutes"));
router.use("/products", require("./productRoutes"));
router.use("/feedbacks", require("./feedbackRoutes"));

module.exports = {
    router
};
