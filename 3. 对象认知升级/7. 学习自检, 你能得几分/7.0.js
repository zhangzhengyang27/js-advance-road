const proto = {
    name: "p_parent",
    type: "p_object",
    [Symbol.for("p_address")]: "地球"
}

const ins = Object.create(proto);
// 定义枚举属性为false
Object.defineProperty(ins, "age", {
    value: 18
});
ins.sex = 1;
ins[Symbol.for("say")] = function () {
    console.log("say");
}

const inKeys = []
for (let p in ins) {
    inKeys.push(p);
}

// for in 不可以遍历不可枚举的属性  [ 'sex', 'name', 'type' ]
console.log(inKeys);

// Reflect 不可遍历原始的属性   [ 'age', 'sex', Symbol(say) ]
console.log(Reflect.ownKeys(ins));
