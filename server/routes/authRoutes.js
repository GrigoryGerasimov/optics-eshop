const { Router } = require("express");
const router = Router();
const { AuthController } = require("../controllers/AuthController");
const { mw } = require("../middleware");

const { onValidationSignUp, onValidationSignIn, onUserExistence, onAuth, onTokenAccessCheck } = mw;

router.post("/login", onValidationSignIn, onAuth, onTokenAccessCheck, AuthController.signIn);
router.post("/register", onValidationSignUp, onUserExistence, AuthController.signUp);
router.post("/token", AuthController.refresh);

module.exports = router;
