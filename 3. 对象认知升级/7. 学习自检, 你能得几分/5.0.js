const toString = Object.prototype.toString

function getObjectType(obj) {
    return toString.call(obj).slice(8, -1)
}

const obj = String.prototype
console.log(typeof obj);  // object
console.log(getObjectType(obj));  // String

