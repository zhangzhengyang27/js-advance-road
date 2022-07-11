const print = console.log;
// 先行断言
// exp1(?=exp2)  查找exp2前面的exp1


print(/hello (?=[a-z]+)/.test("hello a"));  // true
print(/hello (?=[a-z]+)/.test("hello 1"));  // 1

