const http = require("http");
const path = require("path");
const express = require("express");
const chalk = require("chalk");
const config = require("config");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const fileUpload = require("express-fileupload");
const timeout = require("connect-timeout");
const { connectToDB } = require("./dal/connectToDB");
const { mw } = require("./middleware");
const { router } = require("./routes")
const controllerConfig = require("./controllers/controllerConfig");

const app = express();

const { S_PROTOCOL, S_HOST, S_PORT } = config.get("server");
const { C_PROTOCOL, C_HOST, C_PORT } = config.get("client");

if (app.enabled("x-powered-by")) app.disable("x-powered-by");
app.use(cors({
    origin: [`${S_PROTOCOL}://${S_HOST}:${S_PORT}`, `${C_PROTOCOL}://${C_HOST}:${C_PORT}`],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    optionsSuccessStatus: 202
}))
app.use(timeout("15s"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(mw.onTimeout);
app.use(compression({ filter: (req, res) => !req.headers["x-no-compression"] && compression.filter(req, res) }));
app.use(fileUpload({
    createParentPath: true,
    safeFileNames: true,
    preserveExtension: true,
    limits: { fileSize: controllerConfig["FILE_SIZE_LIMIT"] },
    abortOnLimit: true,
    parseNested: true,
    debug: true
}));
app.use(mw.onTimeout);

app.use("/api", router);

app.use("/static", express.static(path.resolve(__dirname, "static")));

const normalizePort = port => {
    const portNum = typeof port !== "number" ? Number(port) : port;
    return !isNaN(portNum) && portNum > 0 ? portNum : false;
};
const PORT = normalizePort(S_PORT);
const startServer = async () => {
    try {
        await connectToDB();

        const server = http.createServer(app);

        server.listen(PORT, () => {
            console.log(chalk.greenBright(`Server has been CORS-enabled and started listening on port ${PORT}`));
        });
        server.on("listening", () => {
            console.log(chalk.blueBright(`Server is currently listening at the address with following params: ${JSON.stringify(server.address())}`));
        });
        server.on("error", err => {
            if (err.syscall !== "listen") throw err;

            switch (err.code) {
                case "EACCESS": {
                    console.log(chalk.redBright(`No adequate access rights to port ${PORT}`));
                    process.exit(1);
                    break;
                }
                case "EADDRINUSE": {
                    console.log(chalk.redBright(`The same port ${PORT} is already in use`));
                    process.exit(1);
                    break;
                }
                default: {
                    console.log(chalk.redBright("Uncaught error code: "), err);
                    process.exit(1);
                    break;
                }
            }
        })
    } catch (err) {
        process.env.NODE_ENV && console.log(chalk.red(err))
        process.exit(1);
    }
};

startServer();
