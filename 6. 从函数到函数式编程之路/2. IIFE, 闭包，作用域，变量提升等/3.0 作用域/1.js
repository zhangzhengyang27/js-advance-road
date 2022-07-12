// 作用域：一个独立的区域。主要的用途就是隔离变量。
// 作用域是函数创建时就已经确定了
var name = "globalName";

function outer() {
    var outerName = "outerName";
    console.log(outerName);

    function inner() {
        var innerName = "innerName";
        console.log(innerName);
    }

    inner();
}


