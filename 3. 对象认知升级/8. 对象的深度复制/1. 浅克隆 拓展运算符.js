// 保证原数据的完整性和独立性
// 常见场景：复制数据，函数传参，class构造函数

/*
* 浅克隆
* 只克隆对象的第一级
* 如果属性是原始数据类型，拷贝其值，也就是我们常说的值拷贝
* 如果属性值是引用类型，拷贝器地址，也就是引用拷贝
* */

const person = {
    name: "帅哥",
    age: 18,
    getName: function () {
        return this.name;
    },
    address: {
        province: "北京"
    }
}
// 扩展运算符
const person2 = {...person};

person2.name = "帅哥2";
person2.getName = function () {
    return `person2` + this.name;
}
person2.address.province = "上海"

console.log("person.name:", person.name);  // 帅哥

// person2.getName =  只是重新赋值了新的引用，不改变原始的值
/*
person.getName: function () {
        return this.name;
    }
*/
console.log("person.getName:", person.getName.toString());

console.log("person.address.province:", person.address.province); // 上海
