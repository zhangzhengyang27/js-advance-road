const arr = [1, , 3,];

// 基于键遍历
arr.forEach(function (v, index) {
    // forEach: 1
    // forEach: 3
    console.log("forEach:", v)
})

// 基于值运算
const index = arr.findIndex(v => v === undefined)
console.log("findIndex:", index)  // 1

console.log("join:", arr.toString());   // join: 1,,3

