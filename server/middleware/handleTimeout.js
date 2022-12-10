const { formatResponse } = require("../utils/formatResponse");
const handleTimeout = (req, res, next) => {
    if (req.timedout) {
        return formatResponse(res, 503, "Request timeout. Please try again later");
    } else next();
};

module.exports = {
    handleTimeout
};
