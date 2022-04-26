const dayjs = require('dayjs');

setInterval(() => {
  console.log(`   T1M3 :: ${dayjs().format('HH:mm:ss')}`)
}, 2 * 1000)