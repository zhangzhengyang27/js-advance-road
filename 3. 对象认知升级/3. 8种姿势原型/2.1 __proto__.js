// __proto__
// 构造函数的原型，null以外的对象均有__proto__属性
// __proto__是原型上的属性
// Function class 的实例有prototype 以及__proto__属性
// 普通函数，祖上第三代必为null
// 普通对象，祖上第二代必为null
const print = console.log

function Person() {
}

var person = new Person()
print(person.__proto__ === person.constructor.prototype)  // true
