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

const randomColorLog = (str) => {
  return console.log(
    chalk[colors[parseInt(Math.random() * 100) % colors.length]](str)
  );
}

module.exports = {
  colors,
  randomColorLog,
}