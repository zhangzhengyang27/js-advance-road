const arr = [1, ,];
console.log("arr:", arr);

console.log("arr.length:", arr.length);  // 2
console.log("keys", Object.keys(arr));  // keys [ '0' ]

// empty 空位的值为undefined
// 0: 1 ,1: undefined
console.log("0:", arr[0], ",1:", arr[1]);

// 怎么判断空位
console.log("hasOwn:0", Object.prototype.hasOwnProperty.call(arr, "0"))   // true
console.log("hasOwn:1", Object.prototype.hasOwnProperty.call(arr, "1"))   // false

