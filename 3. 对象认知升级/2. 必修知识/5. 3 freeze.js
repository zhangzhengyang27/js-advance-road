//3. Object.freeze 不可添加新属性+不可以配置+不能修改值
const obj = {
    prop: 42
};

Object.freeze(obj);

// 添加
obj.prop2 = 'prop2';

// 修改值
obj.prop = 33;

// 删除
delete obj.prop;

// 会报错
// Object.defineProperty(obj, 'prop', {
//     value: 10
// })

console.log(obj.prop);  // 42
console.log(obj.prop2); // undefined
console.log(Object.isFrozen(obj))  // true
