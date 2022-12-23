const { Router } = require("express");
const authRoutes = Router();
const { AuthController } = require("../controllers/AuthController");
const { mw } = require("../middleware");

const { onValidationSignUp, onValidationSignIn, onUserExistence, onAuth } = mw;

authRoutes.post("/login", onValidationSignIn, onAuth, AuthController.signIn);
authRoutes.post("/register", onValidationSignUp, onUserExistence, AuthController.signUp);
authRoutes.post("/token", AuthController.refresh);

module.exports = authRoutes;
