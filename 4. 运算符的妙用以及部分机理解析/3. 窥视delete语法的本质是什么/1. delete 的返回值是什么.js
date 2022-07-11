/*
* delete的返回值是Boolean类型
* true 不一定代表成功，代表删除没有发生异常
*
* 任何var声明的属性，不能从全局作用域或者函数的作用域删除
* 任何 let、const声明的属性，不能从它的声明的作用域删除
* 不可配置的属性
* */


var a = {
    p1: 1,
    p3: 5
}

// 对象的属性
console.log("delete a.p1:", delete a.p1);  // true
// 对象上不存在的属性
console.log("delete a.p2:", delete a.p2);  // true
// 全局对象a
console.log("delete var a:", delete a);  // false

console.log("");
console.log("var a:", a);  // var a: { p3: 5 }
