// 随机数生成器  10控制长度
const createValues = (creator, length = 10) => Array.from({length}, creator)


const createRandomValues = (len) => createValues(Math.random, len)


const values = createRandomValues();

console.log("values:", values.length, values)
