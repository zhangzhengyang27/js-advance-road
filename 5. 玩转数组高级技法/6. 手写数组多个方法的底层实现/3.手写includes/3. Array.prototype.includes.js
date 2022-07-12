const arr = [1, 2, 3, {a: 1}, null, undefined, NaN, ""]

console.log("includes null:", arr.includes(null));  // true
console.log("indexOf null:", arr.indexOf(null));  // 4

console.log("includes NaN:", arr.includes(NaN)); // true
console.log("indexOf NaN:", arr.indexOf(NaN));  // -1
