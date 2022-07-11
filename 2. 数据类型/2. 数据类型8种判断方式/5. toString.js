const pf = console.log;

pf(typeof Boolean.prototype)
pf(Object.prototype.toString.call(Boolean.prototype))


// 原理：通过函数的动态this特性，返回其数据类型， '[object Date]'

// 思考题：自定义对象如何获得[object MyArray]类型
// 思考题：Object.prototype.toString.call(Boolean.prototype)
