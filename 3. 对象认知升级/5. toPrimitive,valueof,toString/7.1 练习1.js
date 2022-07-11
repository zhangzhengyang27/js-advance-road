const arr = [4, 10];
arr[Symbol.toPrimitive] = function (hint) {
    return hint;
}
arr.valueOf = function () {
    return this;
}

const obj = {};

// NaN[object Object]default[object Object]
console.log(+arr + obj + arr + obj)
// [object Object]default
console.log({} + arr)
