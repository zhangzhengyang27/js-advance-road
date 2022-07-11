const getType = val => Object.prototype.toString.call(val);

function getPrototypeChains(instance) {
    const chains = [];
    let proto = instance.__proto__;
    chains.push(getType(proto));
    while (proto) {
        proto = proto.__proto__
        chains.push(getType(proto));
    }
    return chains;
}

const print = console.log;
print(getPrototypeChains(Function));  // [ '[object Function]', '[object Object]', '[object Null]' ]
print(getPrototypeChains(Object));    // [ '[object Function]', '[object Object]', '[object Null]' ]

// Function 、Object本质上都是函数 所以原型都是相等的
