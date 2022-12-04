const { Router } = require("express");
const router = Router({ mergeParams: true });
const { mw } = require("../middleware");

router.use(mw.onAccept);
router.use("/users", require("./userRoutes"));
router.use("/auth", require("./authRoutes"));

module.exports = {
    router
};
