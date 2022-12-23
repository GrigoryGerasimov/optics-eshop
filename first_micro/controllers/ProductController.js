const { ProductService } = require("../services/ProductService");
const { formatResponse } = require("../utils/formatResponse");

class ProductController {
    static async read(req, res) {
        try {
            const products = await ProductService.read();
            res.status(200).json({
                code: 200,
                message: "Коллекция единиц продукции успешно получена",
                data: products
            });
        } catch (err) {
            formatResponse(res, 400, err);
        }
    }

    static async readById(req, res) {
        try {
            const { productId } = req.params;
            const product = await ProductService.readById(productId);
            res.status(200).json({
                code: 200,
                message: `Артикул ${productId} успешно найден`,
                data: product
            })
        } catch (err) {
            formatResponse(res, 400, err);
        }
    }

    static async create(req, res) {
        try {
            const newProductUnit = await ProductService.create(req.body);
            res.status(201).json({
                code: 201,
                message: "Новый артикул успешно занесён в коллекцию",
                data: newProductUnit
            });
            return newProductUnit;
        } catch (err) {
            formatResponse(res, 400, err);
        }
    }

    static async update(req, res) {
        try {
            const { productId } = req.params;
            const updatedProductUnit = await ProductService.update(productId, req.body);
            res.status(200).json({
                code: 200,
                message: `Данные артикула по искомому ID ${productId} успешно изменены`,
                data: updatedProductUnit
            })
        } catch (err) {
            formatResponse(res, 400, err);
        }
    }

    static async delete(req, res) {
        try {
            const { productId } = req.params;
            await ProductService.delete(productId);
            res.status(200).json({
                code: 200,
                message: `Артикул ${productId} успешно удалён из коллекции`,
                data: null
            });
        } catch (err) {
            formatResponse(res, 400, err);
        }
    }
}

module.exports = {
    ProductController
};
