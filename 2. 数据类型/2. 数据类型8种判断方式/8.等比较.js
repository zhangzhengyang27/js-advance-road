// 原理：与某个固定值比较
// 使用场景：undefined、window、document.all

//判断是否是undefied ； void 0 返回的都是判断是否是undefied
function isUndefined(object) {
    return object === void 0;
}
