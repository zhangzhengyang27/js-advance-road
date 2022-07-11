// 如果未定义[Symbol.toPrimitive](hint)，期望的是'string'，toString、valueOf都没有返回期望值


const obj = {
    value: 10,
    valueOf() {
        return this;
    },
    toString() {
        return this;
    }
};

console.log(10 + obj);


