class MyArray {
    get [Symbol.toStringTag]() {
        return "MyArray"
    }
}

var pf = console.log;
var a = new MyArray();
pf(Object.prototype.toString.call(a))


// Object.prototype.toString会读取该值
// 需要自定义类型
