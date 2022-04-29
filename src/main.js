import path from "path";
import cors from "cors";
import helmet from "helmet";
import express from "express";
import favicon from "serve-favicon";
import bodyParser from "body-parser";
import compression from "compression";
const morgan = require("morgan");

const { name, version } = require("../package.json");
import { randomColor, coloredLog } from "./colors";

const { PORT = "8080" } = process.env;

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

const middlewares = [
  morgan("dev"),
  helmet(),
  cors(),
  compression(),
  favicon(path.join(__dirname, "static", "favicon.ico")),
  bodyParser.json(),
  express.static("src/static", {}),
];

middlewares.filter((m) => app.use(m));

let count = 0;
let color = randomColor();

setInterval(() => {
  color = randomColor()
  coloredLog(color, "Current color: " + color);
}, 2 * 1000);

app.get("/", (req, res) => {
  res.render("home", {
    name,
    color,
    version,
    count: count++,
    link: "https://github.com/filipeforattini/ff-svc-pipetest",
  });
});

app.listen(parseInt(PORT), () => console.log(`Listening on port ${PORT}`));
