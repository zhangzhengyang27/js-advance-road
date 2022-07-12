// body.childNodes 浏览器
// [...document.body.childNodes]  // [div, script, script]

// arguments   数组转换为数组
function argumentsTest() {
    console.log([...arguments], arguments)
}

argumentsTest(1, 2, 3)
