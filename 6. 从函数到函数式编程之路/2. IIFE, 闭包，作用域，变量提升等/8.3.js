for (var i = 0; i < 5; ++i) {
    setTimeout(function () {
        console.log(i + ' ');
    }, 100);
}
// 5 5 5 5 5

for (var i = 0; i < 5; ++i) {
    // setTimeout 的参数会传递
    setTimeout(function (i) {
        console.log(i + ' ');
    }, 100, i);
}
// 0 1 2 3 4
