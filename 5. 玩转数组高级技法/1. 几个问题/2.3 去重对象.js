const arr1 = [{id: 1}, {id: 2}, {id: 3}];
const arr2 = [{id: 3}, {id: 4}, {id: 5}];

console.log(new Set([...arr1, ...arr2]));

/*
不可以去重
Set(6) {
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 3 },
  { id: 4 },
  { id: 5 }
}
*/
