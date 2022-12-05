const usersMock = require("../mockData/users.json");
const feedbacksMock = require("../mockData/feedbacks.json");
const rolesMock = require("../mockData/roles.json");
const { models } = require("../models");
const chalk = require("chalk");

const initializeDB = async () => {
    const initModel = async (Model, data) => {
        await Model.collection.drop();
        try {
            await Promise.all(
                data.map(async item => {
                    await Model.create(item);
                    console.log(chalk.greenBright("Объект успешно проинициализирован"));
                })
            );
        } catch (err) {
            console.log(`При инициализации базы данных произошла ошибка: ${err.stack}`);
        }
    }

    const users = await models.User.find().exec();
    const feedbacks = await models.Feedback.find().exec();
    const roles = await models.Role.find().exec();

    if (users.length < usersMock.length) {
        await initModel(models.User, usersMock);
    }
    if (feedbacks.length < feedbacksMock.length) {
        await initModel(models.Feedback, feedbacksMock);
    }
    if (roles.length < rolesMock.length) {
        await initModel(models.Role, rolesMock);
    }
};

module.exports = {
    initializeDB
};
