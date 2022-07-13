/*
同源策略下的限制
    非同源存储：localStorage、sessioonStorage、indexedDB受限，cookie以本源和父域为限制
    非同源dom获取受限
    非同源发送ajax受限

跨域网络的访问
跨域写操作一般被允许，例如:链接a标签、重定向、表单提交
跨域资源嵌入一般被允许，如script,link,img,video

不同源窗口/文档交流


跨域解决方案 -JSOUP
    原理：借助浏览器允许script标签跨域资源嵌套，执行回调
    步骤：script标签url上携带回调函数名称
         后端解析queryString，获取回调函数名称
         将数据传入回调函数，返回字符串
         客户端拿到结果，浏览器自动执行
    缺点：
        只支持get请求
        JSOUP存在明显的安全问题

CORS
    定义：跨域资源共享(cross-origin sharing),是一种基于HTTP头的机制，该机制通过允许服务器标示除了它自己以外的其他的origin(域，协议，端口)
    CORS相关的响应头：
        需要整理

    CORS相关的请求头：
        需要整理


    CORS-简单请求：


    CORS-复杂请求：
        与简单请求相对应的就是复杂请求，复杂请求会先发一个预检请求。
        需要预检的请求，必须使用OPTIONS方法 发起一个预检请求到服务器，查看服务器是否允许发送实际请求

    CORS-注意事项：
        需要整理

    CORS-服务端配置：
        corsOptions 中间件


     CORS-什么情况下需要使用：
        XMLHttpRequest 或者 Fetch APIS 发起的跨源请求
        web字体(css中通过@font-face使用跨源字体资源)，字体网站设置跨站调用
        webgl贴图
        使用drawImage将images/video画面绘制到canvas中
        来自图像的css图形

     正向代理：
        cli工具(webpack 配置 devServer proxy)
        charles .fiddler 等代理软件


     方向代理
        nginx



wobsocket
    简单来说：客户端和服务器端之间存在持久的连接，而且双方都可以随时开始发送数据
    需要两边替换协议  101


总结：最推荐的是CORS 和nginx反向代理


* */
