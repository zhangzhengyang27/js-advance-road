// prototype
// prototype是一个对象
// 原型会形成原型链，原型链上查找属性会比较耗时，访问不存在的属性会访问整个原型链

class Person {
    // 私有属性
    #canTalk = true
    // 静态属性
    static isAnimal = true;

    constructor(name, age) {
        // 实例属性
        this.name = name;
        // 实例属性
        this.age = age
    }

    // 原型属性
    sayName() {
        console.log(this.name);
    }
}


"use strict";
// babel
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {value: value, enumerable: true, configurable: true, writable: true});
    } else {
        obj[key] = value;
    }
    return obj;
}

function _classPrivateFieldInitSpec(obj, privateMap, value) {
    _checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
}

function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}

var _canTalk = /*#__PURE__*/new WeakMap();

class Person {
    // 私有属性
    // 静态属性
    constructor(name, age) {
        _classPrivateFieldInitSpec(this, _canTalk, {
            writable: true,
            value: true
        });

        // 实例属性
        this.name = name; // 实例属性

        this.age = age;
    }


    // 原型属性
    sayName() {
        console.log(this.name);
    }

}

_defineProperty(Person, "isAnimal", true);
