// 安全性不如typeof
aaaa instanceof Object
// Uncaught SyntaxError: Unexpected identifier
typeof aaaa // 'undefined'


// 右边必须是函数或者class
// var aaaa = "";
// aaaa instanceof {}


// 原理：就是原型链上查找，查到即时其实例
// 注意事项：又操作数必须是函数或者是class
// 注意事项：多全局对象，例如多window之间（跨多窗口的时候是不准确的）

