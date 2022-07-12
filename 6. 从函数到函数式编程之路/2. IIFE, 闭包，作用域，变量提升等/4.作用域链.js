var a = 1;

function test() {
    console.log(a);
}

function test1() {
    var a = 2;
    test();
}

test1()

// 作用域是函数创建时就已经确定的
// 执行上下文是运行时确定
