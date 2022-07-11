// 严格意义上JSON对象是不合理的，JSON是文本协议
// 全局作用域下JSON，名为JSON，是Object对象

/*
* 对象字面量
* 是创建对象的快捷方法，性能优于new构建的对象
* */
var obj = {
    name: "tom",
    [Symbol.for("sex")]: 1
}
