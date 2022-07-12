function outer() {
    var outerName = "outerName";
    console.log(outerName);
    inner();
}

function inner() {
    var innerName = "innerName";
    console.log(innerName);
}

outer()
// outerName
// innerName

// 全局上下文-->  outer上下文-->  inner上下文  -->outer上下文  -->全局上下文
