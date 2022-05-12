import expressFactory from "./express";
import { randomColor, coloredLog } from "./colors";

const { name, version } = require("../package.json");

const { 
  NODE_ENV, 
  PORT = "8080" 
} = process.env;

const app = expressFactory();

let count = 0;
let color = randomColor();

setInterval(() => {
  color = randomColor();
  coloredLog(color, "Current color: " + color);
}, 2 * 1000);

app.get("/", (req, res) => {
  return res.render("home", {
    name,
    color,
    version,
    count: count++,
    link: "https://github.com/filipeforattini/ff-svc-pipetest",
  });
});

app.listen(parseInt(PORT), () =>
  console.log(`${NODE_ENV || '' }   Listening on port ${PORT}`)
);
