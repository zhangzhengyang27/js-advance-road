// 原理：检查自身，属性的类型或者执行结果的类型

// 例子：kindOf与p-is-promise
// 候选方案

export default function isPromise(value) {
    return value instanceof Promise || (isObject(value) && typeof value.then === 'function' && typeof value.catch === 'function')
}
