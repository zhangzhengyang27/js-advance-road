function log() {
    typeof a  // 暂时性死区 ReferenceError: Cannot access 'a' before initialization
    let a = 10;
}

log();

// typeof 操作数的类型，只能识别基本数据类型和引用数据类型
// 特别注意：null、NaN、document.all
// 注意事项：已经不是绝对的安全（暂时性死区）
