// instanceOf 检测构造功函数prototype 属性是否出现在某个实例对象的原型链上
function instanceOf(instance, cclass) {
    let proto = instance.__proto__
    let prototype = cclass.prototype

    while (proto) {
        if (proto === prototype) return true
        proto = proto.__proto__
    }
    return false;
}

class Parent {
}

class Child extends Parent {
}

class CChild extends Child {
}

class Luren {
}

var cchild = new CChild();

console.log(instanceOf(cchild, Parent));  // true
console.log(instanceOf(cchild, Child));   // true
console.log(instanceOf(cchild, CChild)); // true
console.log(instanceOf(cchild, Object)); // true
console.log(instanceOf(cchild, Date));  // false
console.log(instanceOf(cchild, Luren)); // false
