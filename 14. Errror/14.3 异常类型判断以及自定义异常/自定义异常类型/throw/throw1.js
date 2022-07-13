try {
    throw "错误字符串";
} catch (e) {
    // string ==name== undefined === 错误字符串
    console.log(typeof e, "==name==", e.name, "===", e);
}

try {
    throw 22;
} catch (e) {
    // number ==name== undefined === 22
    console.log(typeof e, "==name==", e.name, "===", e);
}

function UserException(message) {
    this.message = message;
    this.name = "UserException";
}


try {
    throw new UserException("无效异常");
} catch (e) {
    // object ==name== UserException === UserException { message: '无效异常', name: 'UserException' }
    console.log(typeof e, "==name==", e.name, "===", e);
}
