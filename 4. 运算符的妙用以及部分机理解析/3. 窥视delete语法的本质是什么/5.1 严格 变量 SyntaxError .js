"use strict"

// 变量
var name = 'name';
// SyntaxError: Delete of an unqualified identifier in strict mode. 在严格模式下删除不合格的标识符。
delete name;

// 函数
function fn(){}
delete fn;

function fnArg(name){
    delete name;
}
fnArg();
