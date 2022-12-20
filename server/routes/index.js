const { Router } = require("express");
const router = Router({ mergeParams: true });
const { mw } = require("../middleware");

router.use(mw.onAccept);
router.use("/users", require("./userRoutes"));
router.use("/auth", require("./authRoutes"));
router.use("/products", require("./productRoutes"));
router.use("/feedbacks", require("./feedbackRoutes"));
router.use("/shipmenttypes", require("./shipmentTypeRoutes"));
router.use("/colors", require("./colorRoutes"));
router.use("/countries", require("./countryRoutes"));
router.use("/currencies", require("./currencyRoutes"));
router.use("/lensetypes", require("./lenseTypeRoutes"));
router.use("/frametypes", require("./frameTypeRoutes"))

module.exports = {
    router
};
