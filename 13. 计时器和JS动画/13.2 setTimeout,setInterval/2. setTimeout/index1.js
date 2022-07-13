//设置最大值
// 2147483648 does not fit into a 32-bit signed integer.Timeout duration was set to 1.
setTimeout(() => {
    console.log("a");
}, 2 ** 31);

//设置最小值
setTimeout(() => {
    console.log("b");
}, 1);

setTimeout(() => {
    console.log("c");
}, 0.5);

//设置0 
setTimeout(() => {
    console.log("d");
}, 0);

// 输出 a b c d