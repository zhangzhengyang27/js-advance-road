const print = console.log;

function toNumber(val) {
    const result = +val;
    print(result);
    return result
}

// 传统数据类型
toNumber(null) // 0
toNumber(undefined) // NaN
toNumber(1) // 1
toNumber("123aa") // NaN
toNumber({}) // NaN
toNumber(true) // 1

// ES6的 bigInt和Symbol

toNumber(10n)  // Cannot convert a BigInt value to a number
toNumber(Symbol.for("a"))  // Cannot convert a Symbol value to a number
