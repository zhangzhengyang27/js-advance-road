console.log("delete null     :", delete null);  // true
console.log("delete 11       :", delete 11);  // true
console.log("delete undefined:", delete undefined);  // false   undefined 是window上的一个属性，不可配置，所以false

a = {c: 12};
console.log("delete a        :", delete a);  // true

var b = 12;
console.log("delete b        :", delete b);  // false

console.log("delete xxxxxxxxx:", delete xxxxxxxxx);  // true  不可达，直接返回true

var obj = ({})
console.log("delete .toString:", delete obj.toString);  // true  不会遍历原型链
console.log("obj.toString:", obj.toString);  // [Function: toString]
