const { FeedbackService } = require("../services/FeedbackService");
const { formatResponse } = require("../utils/formatResponse");

class FeedbackController {
    static async read(req, res) {
        try {
            const feedbacks = await FeedbackService.read();
            res.status(200).json({
                code: 200,
                message: "Полный список отзывов успешно получен",
                data: feedbacks
            });
        } catch (err) {
            formatResponse(res, 400, err);
        }
    }

    static async readFiltered(req, res) {
        try {
            const { orderBy, equalTo } = req.query;
            const filteredFeedbacks = await FeedbackService.readFiltered(orderBy, equalTo);
            res.status(200).json({
                code: 200,
                message: `Отфильрованный список отзывов по параметру ${equalTo} успешно получен`,
                data: filteredFeedbacks
            })
        } catch (err) {
            formatResponse(res, 400, err);
        }
    }

    static async readById(req, res) {
        try {
            const { feedbackId } = req.params;
            const feedback = await FeedbackService.readById(feedbackId);
            res.status(200).json({
                code: 200,
                message: `Отзыв ${feedbackId} успешно найден`,
                data: feedback
            })
        } catch (err) {
            formatResponse(res, 400, err);
        }
    }

    static async create(req, res) {
        try {
            const newFeedback = await FeedbackService.create(req.body);
            res.status(201).json({
                code: 201,
                message: "Новый отзыв успешно занесён в базу данных",
                data: newFeedback
            });
            return newFeedback;
        } catch (err) {
            formatResponse(res, 400, err);
        }
    }

    static async update(req, res) {
        try {
            const { feedbackId } = req.params;
            const updatedFeedback = await FeedbackService.update(feedbackId, req.body);
            res.status(200).json({
                code: 200,
                message: `Данные отзыва по искомому ID ${feedbackId} успешно изменены`,
                data: updatedFeedback
            })
        } catch (err) {
            formatResponse(res, 400, err);
        }
    }

    static async delete(req, res) {
        try {
            const { feedbackId } = req.params;
            await FeedbackService.delete(feedbackId);
            res.status(200).json({
                code: 200,
                message: `Отзыв ${feedbackId} успешно удалён из базы данных`,
                data: null
            });
        } catch (err) {
            formatResponse(res, 400, err);
        }
    }
}

module.exports = {
    FeedbackController
};
