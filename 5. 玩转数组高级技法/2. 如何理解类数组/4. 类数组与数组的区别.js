function person(name, age, sex) {
    console.log("类数组 type::", Object.prototype.toString.call(arguments));  // [object Arguments]
    console.log("类数组 instanceof object::", arguments instanceof Object);   // true
    console.log("类数组 constructor::", arguments.constructor);   // [Function: Object]
    console.log("类数组 isArray::", Array.isArray(arguments));    // false
}

person('name', 'age', 'sex');


const array = ['name', 'age', 'sex'];

console.log("数组 type::", Object.prototype.toString.call(array));   // [object Array]
console.log("数组 instanceof array::", array instanceof Array);      // true
console.log("数组 constructor::", array.constructor);     // [Function: Array]
console.log("数组 isArray::", Array.isArray(array));      // true

