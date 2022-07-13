/*
1. Ajax发展史
    起初提交表单，返回整个html
    1995 Java 发布Java appletes实现异步加载，不必要刷新页面
    1996 IE将iframe加入HTML的局部刷新
    1998 IE4引入客户端发送XMLHttpRequest请求
    2005 Ajax异步通讯被人熟知
    2006 Ajax被纳入标准

2. Ajax 技术合计
    它不是单指某种技术，而是多种现有技术得结合，实现"无页面刷新数据获取"。
    XMLHttpRequest

3. XMLHttpRequest 发展史


4. XHR(传统Ajax)缺点
    回调地狱的缺点
    XHR不符合关注点分离原则

5. fetch
    在原有的XHR基础上改革，但是因为历史原因不好更新
    重新设计一套 fetch API

    优点：
        Promise语法
        更合理的设计，分离了Request，Response等通用对象
        前端可拦截301、302、307错误
        支持数据流(stream)，方便处理大文件
        语法简单


     缺点：
        缺少终端请求,使用其他API实现(AbortControoler)
        缺少直接获取传输进度的能力，例如缺少XHR的onProgress事件；可以实现但是比较复杂
        兼容性问题
        不支持超时
        同源携带cookie,不同源不携带cookie
        错误不会被拒绝

6. 比较
    如果你希望结果streams API 和 serviceworker，那么就是用Fetch
    更推荐axios

7. axios
    Axios是一个基于Promise网络的请求库，作用域Node.js和浏览器
    客户端：对XMLHttpRequest进行封装
    服务端：使用Node.js Http模块

* */
