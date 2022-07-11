const user = {
    name: "John",
    age: 10,
    toString() {
        return this.name;
    },
    valueOf() {
        return this.age;
    }
};

console.log("user:",  + user);  // 10
console.log("user:",  `${user}`);  // user: John
