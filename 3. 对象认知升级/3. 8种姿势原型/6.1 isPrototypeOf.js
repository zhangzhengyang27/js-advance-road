// 检测一个对象是否存在于另一个对象的原型链上，重点是原型
const print = console.log;

print(Object.isPrototypeOf({}))  // false
print(Object.prototype.isPrototypeOf({}))  // true
print(Reflect.isPrototypeOf({}))  // false
print(Function.isPrototypeOf({}))  // false
