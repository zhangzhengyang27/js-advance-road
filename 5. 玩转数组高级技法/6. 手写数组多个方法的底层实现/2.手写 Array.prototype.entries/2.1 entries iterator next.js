Array.prototype.entries = function () {
    const O = Object(this);
    let index = 0;
    const length = O.length;
    return {
        next() {
            if (index < length) {
                return {value: [index, O[index++]], done: false}
            }
            return {value: undefined, done: true};
        }
    }
}

const arr = [1, 2, 3];

const iter = arr.entries();
/*
iter.next().value: [ 0, 1 ]
iter.next().value: [ 1, 2 ]
iter.next().value: [ 2, 3 ]
*/
console.log("iter.next().value:", iter.next().value);
console.log("iter.next().value:", iter.next().value);
console.log("iter.next().value:", iter.next().value);

// 报错异常
// TypeError: arr.entries is not a function or its return value is not iterable
for (let [k, v] of arr.entries()) {
    console.log(`k:${k}`, `v:${v}`)
}
