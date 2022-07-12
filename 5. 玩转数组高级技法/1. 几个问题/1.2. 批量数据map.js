function createData() {
    return new Array(1000)
        .map((v, i) => ({name: `name${i + 1}`}))
}

const data = createData();
// 产生空数据 [ <1000 empty items> ]
console.log(data);



