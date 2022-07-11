function format_with_array(number) {
    // 转为字符串，并按照.拆分
    var arr = (number + '').split('.');
    // 整数部分再拆分
    var int = arr[0].split('');
    // 小数部分
    var fraction = arr[1] || '';
    // 返回的变量
    var r = "";
    var len = int.length;
    // 倒叙并遍历
    int.reverse().forEach(function (v, i) {
        // 非第一位并且是位值是3的倍数， 添加 ","
        if (i !== 0 && i % 3 === 0) {
            r = v + "," + r;
        } else {
            // 正常添加字符
            r = v + r;
        }
    })
    // 整数部分和小数部分拼接
    return r + (!!fraction ? "." + fraction : '');
}

const print = console.log;
print(format_with_array(938765432.02));  // 938,765,432.02


/*
* 整体思路:数字转字符串，整数部分低位往高位遍历
* 1.数字转字符串，字符按照.分割
* 2.整数部分拆分成字符串数组，并倒序
* 3.遍历，按照每3位添加"，"号
* 4.拼接整数部分+小数部分
* */



