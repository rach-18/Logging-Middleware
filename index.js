import express, { urlencoded } from "express";
import { requestLogger } from "./requestLogger.js";

const app = express();
const port = 4000;
const hostname = "localhost";

app.use(express.json());

app.use(requestLogger);

app.get("/", (req, res) => {
    console.log("Request.received!");
    res.status(200).json({message: "Request successful"});
});

app.listen(port, hostname, () => {
    console.log("Server started!");
});
