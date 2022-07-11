const user = {
    name: "John",
    age: 10,
    // toString() {
    //     // return this.name;
    //     return this;
    // },
    valueOf() {
        return this.age;
    }
};


// Object.prototype.toString = undefined;
// user: 10
console.log("user:", `${user}`);

// 如果自身对象没有tostring方法，调用原型上的 user: [object Object]
// Object.prototype.toString = undefined; 设置为undefined,则调用自身的方法

