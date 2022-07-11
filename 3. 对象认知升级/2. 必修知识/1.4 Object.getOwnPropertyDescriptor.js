const obj = {};
Object.defineProperty(obj, "name", {
    value: "哈士奇"
});

const des = Object.getOwnPropertyDescriptor(obj, "name");

console.log("name:", des)
/*
name: {
  value: '哈士奇',
  writable: false,
  enumerable: false,
  configurable: false
}
*/
