const array = [1, 3, 4, [4, 5], [6, [7, 8]], [, ,], [undefined, null, NaN]];

// flat 1: [ 1, 3, 4, 4, 5, 6, [ 7, 8 ], undefined, null, NaN ]
console.log("flat 1:", array.flat(1));

// flat 2: [ 1, 3, 4, 4, 5, 6, 7, 8, undefined, null, NaN ]
console.log("flat 2:", array.flat(2));
