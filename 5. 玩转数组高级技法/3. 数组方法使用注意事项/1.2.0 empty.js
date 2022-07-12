// 数组空元素empty
// empty数组的空位，指数组的某一位置没有任何值。简单来说，就是数组上没有对应的属性
// 一般的遍历。自动跳过空位

// 基于值进行运算，空位的值作为undefined
// find,findIndex,inclides等，indexOf除外
// 被作为迭代的时候，参与Object.entries，扩展运算符，for of等

// Join和toString，空位被视为空字符串


// 有空位的数组就是稀疏数组。访问慢但是节省空间。如何避免创建稀疏数组

const arr2 = [1, ,];

// [ 1, <1 empty item> ]
console.log("arr2", arr2);
