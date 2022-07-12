function person(name, age, sex) {
    console.log("person arguments:", arguments);
    console.log("person type::", Object.prototype.toString.call(arguments));
}

// { '0': 'name', '1': 'age', '2': 'sex' }
// person type:: [object Arguments]
person('name', 'age', 'sex');


//Dom 方法的返回结果
// var domList = document.querySelectorAll(".s-center-box");
// console.log("querySelectorAll type::", Object.prototype.toString.call(domList));


// 字符串：具备类数组的所有特性。但是类数组一般都是指对象
var str = "abc";
// [ 'a', 'b', 'c' ]
console.log(Array.from(str))
