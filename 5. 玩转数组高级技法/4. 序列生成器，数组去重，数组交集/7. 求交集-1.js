//别人的代码
// 存在问题:引用类型相同的判断 性能问题
const arr1 = [0, 1, 2];
const arr2 = [3, 2, 0];


function intersectSet(arr1, arr2) {
    return [...new Set(arr1)].filter(item => arr2.includes(item))
}

const values = intersectSet(arr1, arr2)
// [0,2]
console.log(values);
