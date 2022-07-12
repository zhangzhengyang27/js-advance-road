const numArray = [1, 3, 8, 666, 22, 9982, 11, 0];
const max = Math.max.apply(Math, numArray); // 9982
const min = Math.min.apply(Math, numArray); // 0
console.log("max:", max + ",min:" + min)
