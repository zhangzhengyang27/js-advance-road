// for + indexOf
const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];

function mergeArray(arr1, arr2) {
    // 数组克隆
    var arr = arr1.slice(0);
    var v;
    for (let i = 0; i < arr2.length; i++) {
        v = arr2[i];
        // 这个操作，
        // 详情参见4.2位运算符的妙用：奇偶数，色值换算，换值， 编码等
        if (~arr.indexOf(v)) {
            continue;
        }
        arr.push(v)
    }
    return arr
}

// [ 1, 2, 3, 4, 5 ]
console.log(mergeArray(arr1, arr2))
