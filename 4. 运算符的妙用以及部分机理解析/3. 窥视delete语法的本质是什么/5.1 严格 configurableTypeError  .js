"use strict"

var person = {
    name: "帅哥"
};

Object.defineProperty(person, "name", {
    configurable: false
});

// TypeError: Cannot delete property 'name' of #<Object>
delete person.name;
