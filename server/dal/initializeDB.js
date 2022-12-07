const usersMock = require("../mockData/users.json");
const feedbacksMock = require("../mockData/feedbacks.json");
const { models } = require("../models");
const chalk = require("chalk");

const initializeDB = async () => {
    const initModel = async (Model, data) => {
        await Model.collection.drop();
        try {
            await Promise.all(
                data.map(async item => {
                    const newItem = await Model.create(item);
                    await newItem.save();
                    console.log(chalk.greenBright("Объект успешно проинициализирован"));
                })
            );
        } catch (err) {
            console.log(`При инициализации базы данных произошла ошибка: ${err.stack}`);
        }
    }

    const users = await models.User.find().exec();
    const feedbacks = await models.Feedback.find().exec();

    if (users.length < usersMock.length) {
        await initModel(models.User, usersMock);
    }

    if (feedbacks.length < feedbacksMock.length) {
        await initModel(models.Feedback, feedbacksMock);
    }
};

module.exports = {
    initializeDB
};
