// 显示转换：主要通过JS定义的方法进行转换
// 隐式：编译器自动完成的
const obj = {
    value: 10,
    toString: function () {
        return this.value + 10;
    },
    valueOf: function () {
        return this.value;
    }
};

obj[obj] = obj.value;

console.log("keys:", Object.keys(obj))  // keys: [ '20', 'value', 'toString', 'valueOf' ]
console.log("${obj}:", `${obj}`);   // ${obj}: 20

// 默认的转换，先valueOf、后toString
console.log("obj + 1:", (obj + 1)); // obj + 1: 11
console.log("obj + \"\":", (obj + ""));  // obj + "": 10

