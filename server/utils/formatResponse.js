const formatResponse = (response, code, error) => {
    return response.format({
        "text/plain": () => response.status(code).send(error),
        "text/html": () => response.status(code).send(`<h1>${error}</h1>`),
        "multipart/form-data": () => response.status(code).send(`<h1>${error}</h1>`),
        "application/x-www-form-urlencoded": () => response.status(code).send(`<h1>${error}</h1>`),
        "application/json": () => response.status(code).json({
            code,
            message: error
        })
    });
};

module.exports = {
    formatResponse
};
