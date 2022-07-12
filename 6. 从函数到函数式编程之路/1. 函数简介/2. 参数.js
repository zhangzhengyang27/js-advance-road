function sum1(num1, num2) {
    console.log("arguments", arguments);
    console.log("argument==", arguments.callee)
    return num1 + num2;
}

/*
arguments [Arguments] { '0': 1, '1': 2, '2': 3 }
argument== [Function: sum1]
3
*/
console.log(sum1(1, 2, 3));

/*
arguments [Arguments] { '0': 1 }
argument== [Function: sum1]
NaN
*/
console.log(sum1(1));

/*
arguments [Arguments] { '0': 'a' }
argument== [Function: sum1]
undefined
*/
console.log(sum1("a"));


