const arr = ["apple", "banana", 1, 1, 3, 3, undefined, undefined, , , NaN, NaN, null, null, "true", true, {a: 1}];


const arr1 = Array.from(new Set(arr));

// set: ['apple', 'banana',1,3,undefined, NaN,null, 'true',true, { a: 1 }]
console.log("set:", arr1);
