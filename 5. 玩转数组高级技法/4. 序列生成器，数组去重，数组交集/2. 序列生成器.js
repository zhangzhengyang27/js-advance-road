const createValues = (creator, length = 10) => Array.from({length}, creator)

const createRange = (start, stop, step) =>
    createValues((_, i) => start + (i * step), (stop - start) / step + 1)


const values = createRange(1, 100, 3);

/*
[
   1,  4,  7, 10, 13, 16,  19, 22, 25,
  28, 31, 34, 37, 40, 43,  46, 49, 52,
  55, 58, 61, 64, 67, 70,  73, 76, 79,
  82, 85, 88, 91, 94, 97, 100
]*/
console.log(values);
