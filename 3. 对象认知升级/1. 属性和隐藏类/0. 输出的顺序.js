// 两种属性：字符串作为键和数字作为建的属性
// 键被遍历输出的顺序

// 常规属性：键为字符串的属性
// 特点：根据创建时的顺序排序

// 排序属性：键为数字的属性
// 特点：按照索引值的大小升序排序

var obj = {};

obj.p1 = "str1";
obj.p6 = "str6";
obj.p2 = "str2";

obj[1] = 'num1';
obj[6] = 'num6';
obj[2] = 'num2';

for (var p in obj) {
    console.log("property:", obj[p])
}

// property: num1
// property: num2
// property: num6
// property: str1
// property: str6
// property: str2
