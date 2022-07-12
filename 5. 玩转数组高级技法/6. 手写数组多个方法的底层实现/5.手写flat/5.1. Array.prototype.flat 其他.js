// 存在问题 ，flat的深度 ；性能问题;丢数据
const array = [1, [1, , ,]];

const flat = arr => {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flat(cur) : cur);
    }, []);
};

// [ 1, 1 ]
console.log(flat(array))
