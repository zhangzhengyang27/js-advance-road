// 删除数组元素后，后面的元素不会补齐，delete删除引用

const array = [1, 2, 3, 4, 5];
delete array[2];
//delete array: [ 1, 2, <1 empty item>, 4, 5 ]
console.log("delete array:", array);
