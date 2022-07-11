// Array
let arr = [1, 2, 5]
// Object
let user = {
    name: "Jason",
    age: 24
}

//Date
let now = new Date()

// Function
function fun() {
    return 10;
}

console.log("Array:", arr.toString())  //  1,2,5
console.log("Object:", user.toString())  // [object Object]
console.log("Date:", now.toString())  // Mon Jul 11 2022 18:36:03 GMT+0800 (China Standard Time)
console.log("Function:", fun.toString())
/*
Function: function fun() {
    return 10;
}
*/

// hint 是  default， valueOf => toString
// Mon Jul 11 2022 18:36:03 GMT+0800 (China Standard Time)  增加了一秒
console.log(1 + now)
