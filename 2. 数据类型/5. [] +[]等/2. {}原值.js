const print = console.log;

const obj = {};

// undefined
print('Symbol.ToPrimitive:', typeof obj[Symbol.ToPrimitive])

// {}
print('valueOf:', obj.valueOf())

const str = obj.toString();
// toString:  type: string  value: [object Object]
print('toString:', ' type:', typeof str, ' value:', str)
