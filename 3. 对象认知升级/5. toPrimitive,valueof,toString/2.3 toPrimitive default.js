const obj = {
    [Symbol.toPrimitive](hint) {
        if (hint == "number") {
            return 10;
        }
        if (hint == "string") {
            return "hello";
        }
        // 被隐式转换转为1
        return true;
    }
};

console.log("相加:", 5 + obj);  // 6   + 期望string 、number 都可以
console.log("等等与:", 5 == obj);  // false  ==  期望string 、number 都可以
console.log("不等于:", 5 != obj);  // true ==  期望string 、number 都可以
