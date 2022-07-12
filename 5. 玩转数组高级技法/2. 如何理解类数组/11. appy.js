var arrayLike = {
    length: 2,
    0: 1
}
// [ 1, undefined ]
console.log(Array.apply(null, arrayLike));
