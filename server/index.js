const path = require("path");
const express = require("express");
const chalk = require("chalk");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const { connectToDB } = require("./dal/connectToDB");
const { router } = require("./routes")

const app = express();

if (app.enabled("x-powered-by")) app.disable("x-powered-by");
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compression({ filter: (req, res) => !req.headers["x-no-compression"] && compression.filter(req, res) }));
app.use("/api", router);

const staticPath = path.resolve(__dirname, "client");

app.use("/", express.static(staticPath));

const indexPath = path.resolve(staticPath, "index.html");

app.get("*", (req, res) => {
    res.sendFile(indexPath);
});

const startServer = async () => {
    try {
        await connectToDB();
    } catch (err) {
        console.log(chalk.red(err))
        process.exit(1);
    }
};

startServer();

module.exports = app;
