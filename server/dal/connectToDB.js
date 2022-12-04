const { mongoose } = require("mongoose");
const config = require("config");
const chalk = require("chalk");
const { initializeDB } = require("./initializeDB");

const mongodb = mongoose;
const { mongodb: { isSRV, M_SRV_URI, M_PROTOCOL, M_HOST, M_PORT, M_DBPATH } } = config.get("db");
const connectToDB = async () => {
    const path = isSRV ? M_SRV_URI : `${M_PROTOCOL}://${M_HOST}:${M_PORT}/${M_DBPATH}`;

    mongodb.connection.on("error", err => {
        console.log(chalk.red("Connection failed due to the following error:"), err);
    });
    mongodb.connection.once("open", () => {
        console.log(chalk.greenBright("Connection successfully established"));
        initializeDB();
    })

    await mongodb.connect(path);
};

module.exports = {
    connectToDB
};
