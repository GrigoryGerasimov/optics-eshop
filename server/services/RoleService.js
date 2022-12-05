const { models } = require("../models");

class RoleService {
    static async read () {
        const adminRole = await models.Role.findOne({ value: "admin" }).exec();
        const buyerRole = await models.Role.findOne({ value: "buyer" }).exec();
        const retailerRole = await models.Role.findOne({ value: "retailer" }).exec();
        return { adminRole, buyerRole, retailerRole };
    }
}

module.exports = {
    RoleService
};
