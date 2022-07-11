const person = {
    name: '二哈'
}
const person2 = Object.create(person);
// delete并不能删除原型上的
delete person2.name

// 二哈
console.log(person2.name);
