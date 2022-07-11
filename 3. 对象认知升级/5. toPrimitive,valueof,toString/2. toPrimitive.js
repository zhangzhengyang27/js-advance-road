// 对象的隐式类型转换
// 如果[Symbol.toPrimitive](hint)方法存在，优先调用
// 否则，如果期望的是'string'---优先调用obj.toString()方法。如果返回的不是原始值，继续调用obj.valueOf()
// 否则，如果期望的是'number'或者"default"---优先调用obj.valueOf()方法。如果返回的不是原始值，继续调用obj.toString()


// hint 不是手动传入的，是根据上下文自己判断的
const obj = {
    [Symbol.toPrimitive](hint) {
        if (hint == "number") {
            return 10;
        }
        if (hint == "string") {
            return "hello";
        }
        return true;
    }
};

console.log(+obj);     // 10      -- hint 参数值是 "number"
console.log(`${obj}`); // "hello" -- hint 参数值是 "string"
console.log(obj + ""); // "true"  -- hint 参数值是 "default"
