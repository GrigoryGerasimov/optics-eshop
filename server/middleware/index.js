const { handleTimeout } = require("./handleTimeout");
const { handleAccepts } = require("./handleAccepts");
const { handleValidation } = require('./handleValidation');
const { handleUserExistenceCheck } = require("./handleUserExistenceCheck");

const mw = {};

mw.onTimeout = handleTimeout;
mw.onAccept = handleAccepts;
mw.onValidation = handleValidation;
mw.onUserExistence = handleUserExistenceCheck;

module.exports = {
    mw
};
