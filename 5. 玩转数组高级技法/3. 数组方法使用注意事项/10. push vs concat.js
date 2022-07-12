// concat 会产生新的数组

const count = 10000;
const array1 = [1, 2, 4, 5, 6];

let newArray = [];

console.time("push");
for (let i = 0; i < count; i++) {
    newArray.push(array1[0], array1[1], array1[2], array1[3], array1[4])
}
// 37.847ms
console.timeEnd("push");


console.time("concat");
for (let i = 0; i < count; i++) {
    newArray = newArray.concat(array1[0], array1[1], array1[2], array1[3], array1[4])
}
// 10.298s
console.timeEnd("concat");
