// 原理：是否出现在实例对象的原型链上
// 注意事项：能正常返回值的情况，基本等同于instanceof
// isPrototypeOf用于判断 一个对象是否是另一个对象的原型
// 只要调用者在传入对象的原型链上都会返回true
class Person {
    name = "cyg";
}

let p = new Person();
console.log(Person.prototype.isPrototypeOf(p));  // true
//判断p对象的原型链中是否存在person。就会返回true。否则false。
