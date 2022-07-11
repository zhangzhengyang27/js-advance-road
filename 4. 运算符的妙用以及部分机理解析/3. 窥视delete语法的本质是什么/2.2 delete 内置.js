// 各种内置原型
console.log("delete Object.prototype", delete Object.prototype);  // false
Object.getOwnPropertyDescriptor(Object, "prototype")

// 内置Math的函数
console.log("delete Math.PI", delete Math.PI);  // false
Object.getOwnPropertyDescriptor(Math, "PI")
