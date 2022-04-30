import path from "path";
import cors from "cors";
import helmet from "helmet";
import express from "express";
import favicon from "serve-favicon";
import bodyParser from "body-parser";
import compression from "compression";
const morgan = require("morgan");

export default () => {
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
  
  return app
}
