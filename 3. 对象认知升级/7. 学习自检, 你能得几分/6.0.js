let a = {n: 1};
a.x = a = {n: 2};

// js总是从左到右的执行表达式
// 求a.x undefined
console.log(a.x)
// { n: 2 }
console.log(a)
