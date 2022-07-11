const obj = {};
Object.defineProperty(obj, "name", {
    value: "哈士奇"
});

// name: 哈士奇
console.log("name:", obj.name)

// Object.defineProperty的缺点
// 无法监听 数组变化
// 只能劫持对象的属性，因此我们需要对每个对象的每个属性进行遍历。如果属性也是对象，还得进行递归调用。
