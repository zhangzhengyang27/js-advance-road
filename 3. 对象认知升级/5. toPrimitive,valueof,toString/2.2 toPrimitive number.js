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

// 一元+
console.log("一元+:", +obj);  // 10

// 位移运算符
console.log("位移运算符", obj >> 0)

//除减算法, 没有 + 法，之前已经单独说过转换规则
console.log("减法:", 5 - obj); // -5
console.log("乘法:", 5 * obj); // 50
console.log("除法:", 5 / obj); // 0.5

//逻辑 大于，小于，大于等于, 没有等于， 有自己的一套规则
console.log("小于:", 5 < obj);  // true
console.log("大于:", 5 > obj);  // false
console.log("大于等于:", 5 >= obj);  // false

// 其他期望是整数的方法
console.log("Math.pow:", Math.pow(2, obj))   // 1024

