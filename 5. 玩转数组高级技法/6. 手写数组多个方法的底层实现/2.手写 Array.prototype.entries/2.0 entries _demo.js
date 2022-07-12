// Array.prototype.entries
// 作用:返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对

const arr = [1, undefined, null, {}];
// Object [Array Iterator] {}
console.log(arr.entries());

// next访问
const iter = arr.entries();
// next: { value: [ 0, 1 ], done: false }
console.log("next:", iter.next());

// for of迭代
for (let [k, v] of arr.entries()) {
    console.log(k, v)
}
/*
0 1
1 undefined
2 null
3 {}
*/
