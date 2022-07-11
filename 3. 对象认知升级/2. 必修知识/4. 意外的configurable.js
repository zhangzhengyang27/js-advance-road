/**
 *
 * case 1: writable true修改为false
 * 成功
 */
const obj = {};

Object.defineProperty(obj, "name", {
    writable: true,
    configurable: false,
});

// 尝试修改描述符信息
Object.defineProperty(obj, "name", {
    writable: false
});

// 读取信息
console.log(Object.getOwnPropertyDescriptor(obj, "name"));
/*
{
  value: undefined,
  writable: false,
  enumerable: false,
  configurable: false
}
*/


/**
 * case 2: writable false修改为true失败,会报错
 */
const obj1 = {};

Object.defineProperty(obj1, "name", {
    configurable: false,
    writable: false
});

// 尝试修改描述符信息
Object.defineProperty(obj1, "name", {
    writable: true
});

// 读取信息
console.log(Object.getOwnPropertyDescriptor(obj1, "name"));


