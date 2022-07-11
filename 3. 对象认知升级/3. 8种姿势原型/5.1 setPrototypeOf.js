var obj = {a: 1};
console.log(obj.toString());  // [object Object]
// 指定原型
Object.setPrototypeOf(obj, null)

// obj.toString is not a function
console.log(obj.toString());
