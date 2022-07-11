// 不能解决循环引用的问题
const deepClone = function (obj) {
    return JSON.parse(JSON.stringify(obj))
}

