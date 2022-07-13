let t1 = performance.now();
//打印时间
function printTime(count) {
    const now = performance.now();
    console.log(count, "==时间差：", now - t1);
    t1 = now;
}

setTimeout(() => {
    printTime(1);
    setTimeout(() => {
        printTime(2);
        setTimeout(() => {
            printTime(3);
            setTimeout(() => {
                printTime(4);
                setTimeout(() => {
                    printTime(5);
                    setTimeout(() => {
                        printTime(6);
                    }, 0);
                }, 0);
            }, 0);
        }, 0);
    }, 0);
}, 0);

// 1 ==时间差： 1.9274049997329712
// 2 ==时间差： 3.520686000585556
// 3 ==时间差： 1.5805239975452423
// 4 ==时间差： 1.383782997727394
// 5 ==时间差： 1.5779800042510033
// 6 ==时间差： 0.37355899810791016