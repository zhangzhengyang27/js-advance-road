// getPrototypeOf 返回对象的原型
// 内部先是toObject转换，null 和 undefined异常

const print = console.log;

// null 和 undefined异常
// Object.getPrototypeOf(null)
// Object.getPrototypeOf(undefined)

// Uncaught TypeError: Cannot convert undefined or null to object

print(Object.getPrototypeOf(10))  // {}
print(Object.getPrototypeOf(10n))  // Object [BigInt] {}
print(Object.getPrototypeOf(Symbol.for("a")))  // Object [Symbol] {}
