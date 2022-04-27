import dayjs from "dayjs";
import { randomColorLog } from "./colors";

const { PRINT_INTERVAL = 2 * 1000 } = process.env;

setInterval(() => {
  randomColorLog(`    T1M3 :: ${dayjs().format("HH:mm:ss")}`);
}, parseInt(PRINT_INTERVAL));
