import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import UserRoute from "./router/user.router.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(UserRoute);

app.listen(7000, () => console.log("Server up and running..."));
