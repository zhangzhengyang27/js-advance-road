// 特殊的Date
// 如果hint是default，是优先调用toString,然后调用valueOf方法
const date = new Date();

// date toString: Mon Jul 11 2022 18:44:35 GMT+0800 (China Standard Time)
console.log("date toString:", date.toString())
// date valueOf: 1657536275452
console.log("date valueOf:", date.valueOf())

// date valueOf: 1657536275452
console.log(`date number:`, +date)
// date str: Mon Jul 11 2022 18:44:35 GMT+0800 (China Standard Time)
console.log(`date str:`, `${date}`)

// date +: Mon Jul 11 2022 18:44:35 GMT+0800 (China Standard Time)1
// 都可以期望 string 、number
console.log(`date +:`, date + 1)
