const obj = {},
    objA = {propertyA: 'A'},
    objB = {propertyB: 'B'};

obj[objA] = 'objectA'
obj[objB] = 'ObjectB';

// p: [object Object] , v: ObjectB
for (let [p, v] of Object.entries(obj)) {
    console.log('p:', p, ', v:', v);
}
