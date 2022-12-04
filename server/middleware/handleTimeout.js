const handleTimeout = (req, res, next) => {
    if (req.timedout) {
        res.format({
            "text/plain": () => res.status(503).send("Request timeout. Please try again later"),
            "text/html": () => res.status(503).send("<h1>Request timeout. Please try again later</h1>"),
            "application/json": () => res.status(503).json({
                code: 503,
                message: "Request timeout. Please try again later"
            })
        });
    } else next();
};

module.exports = {
    handleTimeout
};
