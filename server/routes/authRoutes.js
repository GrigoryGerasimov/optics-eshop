const { Router } = require("express");
const router = Router();
const { AuthController } = require("../controllers/AuthController");

router.get("/login", AuthController.signIn)

router.get("/register", AuthController.signUp)

router.get("/token", AuthController.refresh)

module.exports = router;
