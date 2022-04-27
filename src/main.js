import dayjs from "dayjs"
import { randomColorLog } from './colors'

setInterval(() => {
  randomColorLog(`    T1M3 :: ${dayjs().format("HH:mm:ss")}`)
}, 2 * 1000);
