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
// alert, 浏览器
// window.alert(obj);
// ${}

// hello
console.log(`${obj}`);
// 属性键,期望是string类型
obj[obj] = 123;
// [ 'hello' ]
console.log(Object.keys(obj));
