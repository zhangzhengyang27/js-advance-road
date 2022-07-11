const proto = {
    name: "原型",
    arr: [1, 2]
}
const person = Object.create(proto);
person.name = "实例";
person.arr.push(3);

console.log(person.name);  // 实例
console.log(proto.name);   // 原型

console.log(person.arr);   // [ 1, 2, 3 ]
console.log(proto.arr);    // [ 1, 2, 3 ]
