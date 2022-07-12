// 求差集  你有我没有的数据
// 引用类型
function difference(arr1, arr2, key) {
    const map = new Map();
    arr1.forEach(val => map.set(val[key]))

    return arr2.filter(val => {
        return !map.has(val[key]);
    });
}


// 原始数据类型
function differenceBase(arr1, arr2) {
    const map = new Map();
    arr1.forEach(val => map.set(val))

    return arr2.filter(val => {
        return !map.has(val);
    });
}


var arr1 = [{p: 0}, {p: 1}, {p: 2}]
var arr2 = [{p: 3}, {p: 2}, {p: 1}]
const result = difference(arr1, arr2, "p");
// result: [ { p: 3 } ]
console.log("result:", result);

const arr3 = [0, 1, 2]
const arr4 = [3, 2, 0]
const result1 = differenceBase(arr3, arr4);
// result1: [ 3 ]
console.log("result1:", result1);
