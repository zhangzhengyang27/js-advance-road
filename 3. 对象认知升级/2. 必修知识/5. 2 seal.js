//2. Object.seal 阻止添加新属性+属性标记为不可配置(不可以删除)
const object1 = {
    property1: 42
};

Object.seal(object1);

// 不可以 添加属性
object1.property2 = 22;
console.log(object1.property2);

// 不可以 删除属性
delete object1.property1;
console.log(object1.property1);

