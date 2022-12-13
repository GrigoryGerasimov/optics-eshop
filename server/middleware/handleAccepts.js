const { formatResponse } = require("../utils/formatResponse");
const handleAccepts = (req, res, next) => {
    if (!req.accepts(["text/html", "text/plain", "application/json", "application/octet-stream", "application/x-www-form-urlencoded", "multipart/form-data", "image/png", "image/jpeg"])) {
        formatResponse(res, 406, "Not acceptable");
    } else next();
};

module.exports = {
    handleAccepts
};
