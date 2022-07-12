/*
十进制和二进制是如何相互转换的
浮点数是以什么格式存储的
计算机是怎么进行加法的
* */


// 十进制和二进制是如何相互转换的
//  十进制--->二进制
//  整数:除2取余，逆序排列
//  小数:乘2取整，顺序排列

//  二进制--->十进制
// 小数点前：从右到左用二进制的每个数乘以2的相应次方递增  0 1 2 3
// 小数点后：从左到右用二进制的每个数乘以2的相应负次方递增 -1 -2 -3


console.log((9.375).toString(2))  // 1001.011
console.log(Number.prototype.toString.call(9.375, 2))  // 1001.011
console.log(Number.prototype.toString.call(Number(9.375), 2))  // 1001.011

