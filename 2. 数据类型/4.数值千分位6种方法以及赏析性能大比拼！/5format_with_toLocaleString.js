function format_with_toLocaleString(number, minimumFractionDigits, maximumFractionDigits) {
    minimumFractionDigits = minimumFractionDigits || 2;
    maximumFractionDigits = (maximumFractionDigits || 2);
    maximumFractionDigits = Math.max(minimumFractionDigits, maximumFractionDigits);

    return number.toLocaleString("en-us", {
        maximumFractionDigits: maximumFractionDigits || 2,
        minimumFractionDigits: minimumFractionDigits || 2
    })
}


function format_with_toLocaleString(number) {
    return number.toLocaleString("en-us")
}


const print = console.log;
print(format_with_toLocaleString(938765432.02)); // 938,765,432.02


// 基本功能：国际化的数字处理方案，他可以用来显示不同国家对数字处理偏好
// format_with_toLocaleString 把数字转为特定语言环境下的表示字符串
