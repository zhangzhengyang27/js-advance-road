/*
* delete 语法的本质是什么？
* 操作表达式的结果
* 值，字面量  不操作直接返回true
* 引用类型，删除引用
* */

delete 10; //true

var trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3];
console.log("trees:", trees);
// trees: [ 'redwood', 'bay', 'cedar', <1 empty item>, 'maple' ]


delete {}


var x = 1;
delete x


// 浏览器中运行
var x = 1;
delete window.x;
