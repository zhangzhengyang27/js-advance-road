// TypeError: Cannot mix BigInt and other types, use explicit conversions
// 10n + 10

// TypeError: Cannot convert a Symbol value to a number
Symbol.for("a") + 10


// 本质：二元操作符+ 规则
// 如果操作数是对象，则对象会转换为原始值
// 如果其中一个操作数是字符串的话，另一个操作数也会转换成字符串，进行字符串连接
// 否则，两个操作数都将转换成数字或NaN，进行加法操作
