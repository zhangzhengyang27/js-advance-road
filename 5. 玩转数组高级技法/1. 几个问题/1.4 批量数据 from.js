// Array.from第二个初始化函数返回数据
function createData() {
    return Array.from({ length: 1000 }, (v, i) => (
        { name: `name${i + 1}` }
    ));
}

const data = createData();
console.log(data)
