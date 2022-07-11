//JSON.stringify() 第二个参数replacer，可以是函数或者是数组

// 第三个参数为sapce，如果参数是一个数字，代表有多少空格；上限为10.若是小于1，则代表没有空格
// 如果该参数是字符串,(当字符串长度超过10个，取其前10个字母),该字符串本当做是空格

//replacer 方法
var person = {
    name: "帅哥",
    age: 45,
    birth: '1990-01-01'
};

var jsonString = JSON.stringify(person, function (key, value) {
    if (typeof value === "string") {
        return undefined;
    }
    return value;
});
// {"age":45}
console.log(jsonString);


var person = {
    name: "帅哥",
    age: 45,
    birth: '1990-01-01'
};

//replacer 数组
// {"name":"帅哥","age":45}
console.log(JSON.stringify(person, ['name', 'age']));


//space 美化格式
var person = {
    name: "帅哥",
    age: 45,
    birth: '1990-01-01'
};
// {"name":"帅哥","age":45,"birth":"1990-01-01"}
const a = JSON.stringify(person);
console.log(a);


var person = {
    name: "帅哥",
    age: 45,
    birth: '1990-01-01'
};
const c = JSON.stringify(person, null, '\t');
/*
{
        "name": "帅哥",
        "age": 45,
        "birth": "1990-01-01"
}
*/
console.log(c);
