const createValues = (creator, length = 10) => Array.from({length}, creator)

// v 当前数据 index索引
// >> 0 取整
function createUser(v, index) {
    return {
        name: `user-${index}`,
        age: Math.random() * 100 >> 0
    }
}

const users = createValues(createUser, 1000);
console.log("users:", users);
