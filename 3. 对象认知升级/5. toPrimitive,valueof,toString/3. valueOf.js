// Array
let arr = [1, 2, 5]
// Object
let user = {
    name: "Jason",
    age: 24
}
// Date 返回时间撮
let now = new Date()

// Function
function fun() {
    return 10;
}

console.log("Array:", arr.valueOf())   // [ 1, 2, 5 ]
console.log("Object:", user.valueOf())  // { name: 'Jason', age: 24 }
console.log("Date:", now.valueOf())  //  1657535689267
console.log("Function:", fun.valueOf())  // Function: [Function: fun]
