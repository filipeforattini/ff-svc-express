import chalk from "chalk";

export const colors = [
  "red",
  "blue",
  "cyan",
  "gray",
  // "black",
  "green",
  // "white",
  "yellow",
  "magenta",
  // "redBright",
  "blueBright",
  "cyanBright",
  "greenBright",
  // "whiteBright",
  "yellowBright",
  "magentaBright",
];

export function randomColor() {
  return colors[parseInt(Math.random() * 100) % colors.length];
}

export function randomColorLog(str) {
  return console.log(chalk[randomColor()](str));
}

export function coloredLog(color, str) {
  return console.log(chalk[color](str));
}
