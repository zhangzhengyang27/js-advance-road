var results = ["1", "2", "3"].map(parseInt);
console.log(results);  // [ 1, NaN, NaN ]


["1", "2", "3"].map((val, index) => parseInt(val, index))
// parseInt("1",0)
// parseInt("2",1)  没有1进制
// parseInt("3",2)  2进制不能出现3

// 2-36 进制
