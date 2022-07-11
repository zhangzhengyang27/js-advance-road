var obj = {};

// 数字字符串排序属性
obj['1'] = 'p1';
obj['6'] = 'p6';
obj['2'] = 'p2';

for (var p in obj) {
    console.log("property:", p)
}

// property: 1
// property: 2
// property: 6
