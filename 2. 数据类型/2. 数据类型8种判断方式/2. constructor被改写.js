// 改写constructor
String.prototype.constructor = function a() {
    return {}
}
console.log("a".constructor)


// 原理：constructor 指向创建实例对象的构造函数
// 注意事项：null、undefined 并没有constructor
// 注意事项：constructor是可以被改写的  辅助判断的手段
