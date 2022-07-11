// 规则-undefined、任意的函数、symbol
// 作为对象的属性值，自动忽略
// 作为数组，系列化返回null
// 单独序列化：undefined


// 自动忽略
const data = {
    a: "test1",
    b: undefined,
    c: Symbol("test2"),
    fn: function () {
        return true;
    }
};
// {"a":"test1"}
console.log(JSON.stringify(data));

//数组返回null
const data1 = ["test1", undefined, function aa() {
    return true
}, Symbol('test2')];
// ["test1",null,null,null]
console.log(JSON.stringify(data1));

//返回undefined
const a1 = JSON.stringify(function a() {
    console.log('test1')
})
// a1== undefined
console.log("a1==", a1);

const a2 = JSON.stringify(undefined);
// a2== undefined
console.log("a2==", a2);

const a3 = JSON.stringify(Symbol('test2'))
// a3== undefined
console.log("a3==", a3)

// Date
// {"now":"2022-07-11T13:00:14.628Z"}
console.log(JSON.stringify({now: new Date()}));

// NaN 和 Infinity 以及null
console.log(JSON.stringify(NaN));  // null
console.log(JSON.stringify(Infinity));   // null
console.log(JSON.stringify(null));   // null

// 转换为对应的原始值。
// [2,"test",false]
console.log(JSON.stringify([new Number(2), new String("test"), new Boolean(false)]));

//仅序列化可枚举属性 {"test2":"testb"}
const a = JSON.stringify(
    Object.create(
        null,
        {
            test1: {value: 'testa', enumerable: false},
            test2: {value: 'testb', enumerable: true}
        }
    )
);
console.log(a);


//循环引用报错
const obj = {
    name: "loopObj"
};
const loopObj = {
    obj
};
// 对象之间形成循环引用，形成闭环
obj.loopObj = loopObj;

// 封装一个深拷贝的函数
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// 执行深拷贝，抛出错误
// deepClone(obj)

// BigInt 报错
var c = {
    test: 1n
}
// TypeError: Do not know how to serialize a BigInt
console.log(JSON.stringify(c));
