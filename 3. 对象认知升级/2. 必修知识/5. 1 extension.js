//1. Object.preventExtensions  对象变得不可扩展，也就是永远不能添加新的属性
// isExtensible 判断是否可以扩展
var obj = {name: "张三"};
var obj1 = {name: "李四"}

Object.preventExtensions(obj);

// 不可以，添加新属性
obj.age = 2;

// obj== { name: '张三' }
console.log("obj==", obj);

// 可以删除
// delete obj.name;
// console.log("obj==",obj);

console.log(Object.isExtensible(obj));  // false
console.log(Object.isExtensible(obj1)); // true

