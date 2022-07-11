const {hasOwnProperty} = Object.prototype;

function isObject(obj) {
    return obj !== null && typeof obj == "object";
}

function isArray(obj) {
    return Array.isArray(obj)
}

function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key)
}

function deepClone(obj) {
    if (!isObject(obj)) return obj;
    let data;

    if (isArray(obj)) {
        data = [];
        // 非数字属性，不能被length识别 需要for in
        for (let i = 0; i < obj.length; i++) {
            data[i] = deepClone(obj[i]);
        }
    } else if (isObject(obj)) {
        data = {};
        for (let key in obj) {
            if (hasOwn(obj, key)) {
                data[key] = deepClone(obj[key]);
            }
        }
    }
    return data;
}

const arr = [1, 2];
// 添加非数字属性，但是不能被拷贝
arr.ccc = "ccc"

var obj1 = {
    name: "obj1",
    age: 18,
    date: new Date(),
    arr
};
const a = deepClone(obj1)
// { name: 'obj1', age: 18, date: {}, arr: [ 1, 2 ] }
console.log(a);


