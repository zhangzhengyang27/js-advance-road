// includes可以查找NaN

const array1 = [NaN];
console.log("array.includes NaN:", array1.includes(NaN));  // true
console.log("array.indexOf NaN:", array1.indexOf(NaN) > -1);  // false

const array2 = [1, ,];
console.log("array.includes ,,:", array2.includes(undefined));   // true
console.log("array.indexOf ,,:", array2.indexOf(undefined) > -1);  // false

const array3 = [undefined];
console.log("array.includes undefined:", array3.includes(undefined));   // true
console.log("array.indexOf undefined:", array3.indexOf(undefined) > -1);  // true
