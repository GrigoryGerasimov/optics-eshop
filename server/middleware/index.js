const { handleAccepts } = require("./handleAccepts");
const { handleValidationOnSignUp } = require('./handleValidationOnSignUp');
const { handleValidationOnSignIn } = require('./handleValidationOnSignIn');
const { handleUserExistenceCheck } = require("./handleUserExistenceCheck");
const { handleAuth } = require("./handleAuth");
const { handleRoleAccessCheck } = require("./handleRoleAccessCheck");
const { handleTokenAccessCheck } = require("./handleTokenAccessCheck");

const mw = {};

mw.onAccept = handleAccepts;
mw.onValidationSignUp = handleValidationOnSignUp;
mw.onValidationSignIn = handleValidationOnSignIn;
mw.onUserExistence = handleUserExistenceCheck;
mw.onAuth = handleAuth;
mw.onRoleAccessCheck = handleRoleAccessCheck;
mw.onTokenAccessCheck = handleTokenAccessCheck;

module.exports = {
    mw
};
