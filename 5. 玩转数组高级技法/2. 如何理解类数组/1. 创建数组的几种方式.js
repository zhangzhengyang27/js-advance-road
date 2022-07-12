// 字面量
const arr = [1, 2, 3, ...[4, 5, 6]];    // 1,2,3,4,5,6
const arr1 = [, , , , ,];   // [ <5 empty items> ]


// new Array
const arr2 = new Array(1, 2, 3);    // [ 1, 2, 3 ]
const arr3 = new Array("a");        //["a"]
const arr4 = new Array(5)      // [empty × 5]


// Array.of
const arr5 = Array.of(5)  // [5]

// Array.from
const arr6 = Array.from([1, 2, 3]); // [1,2,3]
const arr7 = Array.from({length: 3}, function (value, index) {
    return index + 1
}); // [1,2,3]
const arr8 = Array.from({0: "a", 1: "b", 2: "c", length: 3});   // [ 'a', 'b', 'c' ]

// Array.prototype.slice
const arr9 = Array.prototype.slice.call(document.querySelectorAll("div")) // [div, div, div....]
console.log("arr9 Array.prototype.slice ==", arr9);
// Array.prototype.concat
const arr10 = Array.prototype.concat.call([], [1, 2, 3]) // [1,2,3]
console.log("arr9 Array.prototype.concat ==", arr10);

