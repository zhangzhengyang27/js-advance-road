// length属性代表数组中元素的个数，数组额外的附加属性不计算在内
// length可写，可以通过修改length改变数组的长度

const array = [1, 2, 3, 4, 5, 6];
array[10] = 10;
console.log("array.length:", array.length);  // 11

array["test"] = 11;
console.log("array.length:", array.length);  // 11


array.length = 3;
console.log("array.length:", array.length);   // 3


console.log("array.length:", array.length);  // 3

// 不存在越界的错误
console.log("array value:", array[Number.MAX_VALUE + 1000])   // undefined
