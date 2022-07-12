// 执行上下文
// JavaScript代码被解析和执行时的环境
// 这个是以程序的角度出发的

// this
// 变量环境 var
// 词法环境 let const
// 外部环境


// 上下文
// 全局执行上下文
// 函数执行上下文
// eval函数执行上下文

var gName = "global的name";

function getName() {
    var name = "name";
    let bName = "bName"
    {
        let name = "let的name"
        const bName = "const的bName"
        // name: let的name , otherName: const的bName
        console.log("name:", name, ",", "otherName:", bName);
    }
    // name: name , otherName: bName
    console.log("name:", name, ",", "otherName:", bName);
    // gName: global的name
    console.log("gName:", gName);
}

getName()
