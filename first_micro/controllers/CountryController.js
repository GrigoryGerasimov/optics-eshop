const { CountryService } = require("../services/CountryService");
const { formatResponse } = require("../utils/formatResponse");

class CountryController {
    static async read(req, res) {
        try {
            const countries = await CountryService.read();
            res.status(200).json({
                code: 200,
                message: "Полный список стран успешно получен",
                data: countries
            });
        } catch (err) {
            formatResponse(res, 400, err);
        }
    }

    static async readById(req, res) {
        try {
            const { countryId } = req.params;
            const country = await CountryService.readById(countryId);
            res.status(200).json({
                code: 200,
                message: `Расцветка ${countryId} успешно найдена`,
                data: country
            })
        } catch (err) {
            formatResponse(res, 400, err);
        }
    }
}

module.exports = {
    CountryController
};
