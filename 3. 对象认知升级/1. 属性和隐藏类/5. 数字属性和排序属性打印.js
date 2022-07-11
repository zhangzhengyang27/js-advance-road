var obj = {};

obj.p1 = "p1";
obj[1] = 'p1';

obj.p6 = "p6";
obj[6] = 'p6';

obj.p2 = "p2";
obj[2] = 'p2';

// 先打印排序属性，然后是常规属性
for (var p in obj) {
    console.log("property:", p)
}

// property: 1
// property: 2
// property: 6
// property: p1
// property: p6
// property: p2
