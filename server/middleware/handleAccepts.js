const handleAccepts = (req, res, next) => {
    if (!req.accepts(["text/html", "text/plain", "application/json", "application/octet-stream", "application/x-www-form-urlencoded", "multipart/form-data", "image/png", "image/jpeg"])) {
        res.format({
            "text/plain": () => res.status(406).send("Not acceptable"),
            "text/html": () => res.status(406).send("<h1>Not acceptable</h1>"),
            "application/json": () => res.status(406).json({
                code: 406,
                message: "Not acceptable"
            })
        });
    } else next();
};

module.exports = {
    handleAccepts
};
