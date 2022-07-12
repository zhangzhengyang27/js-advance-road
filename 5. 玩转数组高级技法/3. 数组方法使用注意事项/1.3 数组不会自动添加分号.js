// 数组前面要添加;不然会认为是取下标
const objA = {a: 1};
['a']


var a = [[1, 2], 2, 3];
// [ [ 1, 2 ], 2, 3 ]
console.log(a);
// 0 4 9
[0, 2, 3].map(v => console.log(v * v))
// [ [ 1, 2 ], 2, 3 ]
console.log(a);


