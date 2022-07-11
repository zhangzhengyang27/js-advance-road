// name存在
let obj = {};
obj.name = "join"

// 应该是使用 object.hasOwnProperty 属性
if (obj.name) {
    let result = {};
    result.name = obj.name;
}

