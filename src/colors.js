import chalk from "chalk";

export const colors = [
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

export function randomColorLog(str) {
  return console.log(
    chalk[colors[parseInt(Math.random() * 100) % colors.length]](str)
  );
}
