// instanceOf 性能 只是稍稍比typeof 少
var count = 10000000;
var func = function () {
};

// typeof的测试使用时间
var startTime = new Date();
console.log(typeof func === "function");
for (var j = 0; j < count; j++) {
    typeof func === "function";
}
console.log('[typeof func === "function"] ' + (new Date().getTime() - startTime.getTime()));

// instanceof的测试使用时间
startTime = new Date();
console.log(func instanceof Function);
for (var k = 0; k < count; k++) {
    func instanceof Function;
}
console.log('[func instanceof Function] ' + (new Date().getTime() - startTime.getTime()));


// 判断Number
function isNumber(obj) {
    if (typeof obj === 'number') {
        return true;
    }
    return false;
}


// null(关键字)和undefined(只是一个变量)
var print = console.log;
print(Object.getOwnPropertyDescriptor(global, 'null'))  // undefined
print(Object.getOwnPropertyDescriptor(global, 'undefined'))
/*
{
  value: undefined,
  writable: false,
  enumerable: false,
  configurable: false
}
*/
