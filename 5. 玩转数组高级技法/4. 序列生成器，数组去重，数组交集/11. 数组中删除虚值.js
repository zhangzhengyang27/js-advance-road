// 删除转为布尔
const array = [false, 0, undefined, , "", NaN, 9, true, undefined, null, "test"];
const newArray = array.filter(Boolean);
// [ 9, true, 'test' ]
console.log(newArray);
