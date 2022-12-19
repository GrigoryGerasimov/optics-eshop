const { CurrencyService } = require("../services/CurrencyService");
const { formatResponse } = require("../utils/formatResponse");

class CurrencyController {
    static async read(req, res) {
        try {
            const currencies = await CurrencyService.read();
            res.status(200).json({
                code: 200,
                message: "Полный список валют успешно получен",
                data: currencies
            });
        } catch (err) {
            formatResponse(res, 400, err);
        }
    }

    static async readById(req, res) {
        try {
            const { currencyId } = req.params;
            const currency = await CurrencyService.readById(currencyId);
            res.status(200).json({
                code: 200,
                message: `Валюта ${currencyId} успешно найдена`,
                data: currency
            })
        } catch (err) {
            formatResponse(res, 400, err);
        }
    }
}

module.exports = {
    CurrencyController
};
