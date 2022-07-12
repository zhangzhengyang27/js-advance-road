// 改变数组自身的方法 pop、shift、splice
let array = [1, 2, 3, 4, 5, 6, 7];

array.pop();
// [ 1, 2, 3, 4, 5, 6 ]
console.log("array pop:", array);

array.shift();
// [ 2, 3, 4, 5, 6 ]
console.log("array shift:", array);


array.unshift("unshift");
//  [ 'unshift', 2, 3, 4, 5, 6 ]
console.log("array unshift:", array);


array.push("push")
// [ 'unshift', 2, 3, 4, 5, 6, 'push' ]
console.log("array push:", array);


array.reverse()
// [ 'push', 6, 5, 4, 3, 2, 'unshift' ]
console.log("array reverse:", array);

array.sort()
// sort注意事项：默认按照ASII嘛先后排序的(10 会排在2前面)
// [ 2, 3, 4, 5, 6, 'push', 'unshift' ]
console.log("array sort:", array);

array.splice(2, 1)
// [ 2, 3, 5, 6, 'push', 'unshift' ]
console.log("array splice:", array);

array.copyWithin(2, 0)
// [ 2, 3, 2, 3, 5, 6 ]
console.log("array copyWithin:", array);

array.fill("fill", 3)
// [ 2, 3, 2, 'fill', 'fill', 'fill' ]
console.log("array fill:", array);
