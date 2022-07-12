// arrayLike:类数组对象 或者 可遍历的对象(Map.Set)等
// mapFn:可选参数，在最后生成数组后执行一次map方法后返回


console.log("Array.from:", Array.from({}));  // []
console.log("Array.from:", Array.from(""));   // []
/*
Array.from: [
  undefined, undefined,
  undefined, undefined,
  undefined, undefined,
  undefined, undefined,
  undefined, undefined
]
*/
console.log("Array.from:", Array.from({a: 1, length: "10"}));
console.log("Array.from:", Array.from({a: 1, length: "ss"}));   // []
console.log("Array.from:", Array.from([NaN, null, undefined, 0]));  //  [ NaN, null, undefined, 0 ]


