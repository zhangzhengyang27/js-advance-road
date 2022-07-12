// Proxy 是函数，但本身没有prototype
// Proxy不改变被代理对象的外在表现
// Proxy里面有一个target属性

const arr = ["1"];
const proxy = new Proxy(arr, {});
const log = console.log;


log("__proto__:", proxy.__proto__ === Array.prototype)   // true
log("instanceof:", proxy instanceof Array)   // true

console.log("-------------------")
log("toString", Object.prototype.toString.call(Proxy))   // [object Function]

log("Proxy.prototype:", Proxy.prototype)  //  undefined

log("proxy instanceof Proxy:", proxy instanceof Proxy)  // 直接报错
