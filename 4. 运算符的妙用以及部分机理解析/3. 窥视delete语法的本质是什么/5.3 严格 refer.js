"use strict"

class Parent {
    constructor(name) {
        this.name = name;
    }

    getName() {

    }
}

class Child extends Parent {
    constructor(name, age) {
        super(name);
        this.age = age
    }

    deleteAny() {
        console.log("super", super.getName);
        // ReferenceError: Unsupported reference to 'super'
        delete super.getName
    }
}

var child = new Child("child", 18);
delete child.deleteAny();
