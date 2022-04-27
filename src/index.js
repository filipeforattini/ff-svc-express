const dayjs = require("dayjs");
const { randomColorLog } = require('./colors')

setInterval(() => {
  randomColorLog(`    T1M3 :: ${dayjs().format("HH:mm:ss")}`)
}, 2 * 1000);
