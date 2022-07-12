const max = Math.pow(2, 32);  // 最大 max-1

// FATAL ERROR: invalid table size Allocation failed - JavaScript heap out of memory
console.log("Array.from:", Array.from({0: 1, 1: 2, length: max - 1}));
console.log("Array.from:", Array.from({0: 1, 1: 2, length: max-2}));
