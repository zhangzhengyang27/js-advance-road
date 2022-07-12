// 暂时性死区：let 和 const变量显式赋值之前不能对变量进行读写，否则就会报错

var num = 1;
{
    num = 2;
    var num;
}


var num1 = 1;
{
    // ReferenceError: Cannot access 'num1' before initialization
    num1 = 2;
    let num1;
}
