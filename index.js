const dayjs = require("dayjs");
const chalk = require("chalk");

const colors = [
  "black",
  "red",
  "green",
  "yellow",
  "blue",
  "magenta",
  "cyan",
  "white",
  "gray",
  "redBright",
  "greenBright",
  "yellowBright",
  "blueBright",
  "magentaBright",
  "cyanBright",
  "whiteBright",
];

setInterval(() => {
  console.log(
    chalk[colors[parseInt(Math.random() * 100) % colors.length]](
      `    T1M3 :: ${dayjs().format("HH:mm:ss")}`
    )
  );
}, 2 * 1000);
