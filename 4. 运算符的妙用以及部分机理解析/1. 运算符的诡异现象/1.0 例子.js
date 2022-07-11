/*
函数的基础知识
普通函数调用时，this指向的是调用函数的对象
* */

let name = "let的name";
const person = {
    name: "person的Name",
    getName() {
        return this.name
    }
};

const getName = person.getName;

const print = function (prefix, ...args) {
    console.log(prefix.padEnd(20, " ") + ":", ...args)
}

// let const 申明的对象不会放到全局对象上的
print("getName", getName());  //  undefined

print("person.getName", person.getName());  // person的Name
console.log(person.getName)  // [Function: getName]
print("(person.getName)", (person.getName)());   // person的Name

// 逗号操作符，对它的每个操作数求值(从左到右）并返回最后一个操作数的值
// 产生了赋值操作 等同于 (const getName=person.getName)  this全局对象
print("(0, person.getName)", (0, person.getName)());  // undefined

// typeof 访问不可达的时候，返回undefined
