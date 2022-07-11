const user = {
    name: "John",
    age: 10,
    toString() {
        return this.name;
    },
    valueOf() {
        // return this.age;
        return this;
    }
};

// user: NaN
// 它是期望获取数字，则调用valueOf方法，但是他没有返回数字，那么则继续调用toString，返回了一个string
console.log("user:", +user);
