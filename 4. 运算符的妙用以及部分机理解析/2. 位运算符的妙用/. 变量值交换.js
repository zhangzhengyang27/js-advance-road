/*
* 位运算
* 操作数是32位
* 自动转为整数
* 速度T0
*
& 两个为1则为1.否则为0
| 一个为1就为1；可以用来取整数、自身|自身=自身，用来比较是否相等

* */

let a = 10;
let b = 20;

a ^= b;   // a= a ^ b;
b ^= a;   // b= b ^ a =b ^ a ^ b = a;
a ^= b;   // a= a ^ b=a ^ b ^ a = b;

console.log("a==", a)
console.log("b==", b)



