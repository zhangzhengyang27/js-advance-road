// 判断NaN的各种实现
function isNaNVal(val) {
    return Object.is(val, NaN);
}

function isNaNVal(val) {
    return val !== val;
}

function isNaNVal(val) {
    return typeof val === 'number' && isNaN(val)
}

// 综合垫片
if (!("isNaN" in Number)) {
    Number.isNaN = function (val) {
        return typeof val === 'number' && isNaN(val)
    }
}

/*
* typeof 是数字
* 我不能等于我自己
* 不能被删除
* */

// isNaN:检查toNumber返回值，如果是NAN返回true

var arr = [NaN];
console.log(arr.indexOf(NaN))   // -1
console.log(arr.includes(NaN))  // true

// includes:调用内部的Number::sameValueZero
// indexOf:调用内部的Number::equal

