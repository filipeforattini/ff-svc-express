const dayjs = require("dayjs");
const chalk = require("chalk");

const colors = [
  "red",
  "blue",
  "cyan",
  "gray",
  "black",
  "green",
  "white",
  "yellow",
  "magenta",
  "redBright",
  "blueBright",
  "cyanBright",
  "greenBright",
  "whiteBright",
  "yellowBright",
  "magentaBright",
];

setInterval(() => {
  console.log(
    chalk[colors[parseInt(Math.random() * 100) % colors.length]](
      `    T1M3 :: ${dayjs().format("HH:mm:ss")}`
    )
  );
}, 2 * 1000);
