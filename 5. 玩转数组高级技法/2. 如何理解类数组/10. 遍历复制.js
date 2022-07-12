// 类数组转换为数组
var arr = [];
var arrayLikeObj = {
    length: 2,
    0: 1,
    1: 2
};

for (let i = 0; i < arrayLikeObj.length; i++) {
    arr[i] = arrayLikeObj[i];
}

console.log(arr); // [1, 2]
