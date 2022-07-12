var name = "global的name";

function getName() {
    let name = "getName的name";
    // getName的name
    console.log("getName:", name);
}

{
    // global的name
    console.log("块级作用域name", name);
}

// global的name
console.log("全局作用域:", name);

getName();

// 块级作用域 --> 函数作用域--> 全局


/*
* 执行上下文 vs 作用域
* 创建时间:执行上下文是运行是创建;作用域是函数创建是确定。
* 运行机制:执行上下文是动态;作用域是静态。
* */

