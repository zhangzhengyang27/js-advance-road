(function (num1, num2) {
    console.log(num1 + num2);  // 16
})(7, 9);

(function (num1, num2) {
    console.log(num1 + num2);  // 16
}(7, 9));

// 任何的一元运算符都可以 强迫执行
-function (num1, num2) {
    console.log(num1 + num2);  // 16
}(7, 9)
