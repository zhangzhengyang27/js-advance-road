/*
1. HTTP简介
    HTTP(HyperText Transfer Protocol)超文本传输协议，是万维网(World Wide Web)的基础协议
    最初的万维网包括超文本标记语言(HTML)、超文本传输协议(HTTP)、客户端、服务端


2. HTTP/0.9
    1991年发布。
    仅仅支持get
    不包含HTTP头，只能传输HTML文件
    没有状态码或者错误代码


3. HTTP/1.0
    1996发布
    发送时添加协议的版本
    添加状态码，例如200、404
    引入了HTTP头，多了传递信息的手段，更加的灵活方便
    HTTP头里面引入了重要的content-type属性，具备了传输除了纯文本HTML以外的其他文档类型的能力


4. HTTP/1.1
    1997年发布
    连接复用。长连接，多个请求都可以复用一个tcp连接。1.0版本每次请求都需要重新建立连接。
    管道化技术。多个连续的请求甚至都不用等待，立即就可以被发送，这样就减少了耗费在网络上的延迟时间。(不用等待上一个的返回就可以继续发送，类似于并发)
    支持响应分块：就是单个请求返回部分内容，这个需要前后端配合
    新的缓存控制机制。cache-control，eTag就是1.1引入的，强缓存和协商缓存。
    新增host请求头。是够使不同的域名配置在同一个IP地址的服务器上。


5. HTTP/1.x报文
    请求报文
    响应报文--> 引出状态码


6.常见状态码
    信息响应 101 协议切换
    成功响应 200 请求成功
            204 请求成功，不返回任何内容
            206 范围请求成功
    重定向   301 永久重定向
            302 临时的重定向
            304 资源未修改(协商缓存)
    客户端响应 400  无法被服务器理解
             401  未授权
             403  禁止访问
             404  未找到资源
             405  禁止使用该方法

     服务端响应 500 服务端异常
              503 服务不可达


7. header头
    请求头（需要整理）

    响应头（需要整理）

8. content-type

    application/x-www-form-unlencoded
        地址但是被加密过得

    multipart/form-data
        1.表单提交
        2.new FormData

    application/json

9. HTTPS
    HTTPS(HyperText Transfer Protocol Secure)超文本传输协议，在HTTP的基础上添加了一个Secure安全
    HTTPS是HTTP协议的一种扩展，受用传输安全性(TLS)或安全套接字层(SSL)对通信协议进行加密
    HTTP+SSL(TLS)=HTTPS

10. HTTP2
    二进制帧传递信息
    多路复用
    头部压缩
    服务器推送

11. HTTP3
    基于UDP的传输层协议，主要就是快

*/
