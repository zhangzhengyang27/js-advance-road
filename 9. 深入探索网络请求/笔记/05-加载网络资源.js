/*
如何高效的加载网络资源
1.页面的加载流程
    当前页面卸载 --> DNS解析(从域名到ip地址的过程) --> TCP连接 --> HTTP请求 --> 服务器响应 --> 浏览器解析

2. 解析渲染过程
    图片需要整理

3. 页面加载时间
    开发者工具可以查看页面的加载时间
    navigation Timing Api 提供了可用于衡量一个网站性能的数据

4. 资源加载的时间
    Resource Timing Api
    获取和分析应用资源加载的详细网络计时数据，比如XHR、图片、脚本
    js对象模型为PerformanceResourceTiming

5. 资源加载优先级
    首先是html、css、font，同步的XHR优先级最高
    在可视区的图片，script标签，异步的XHR和fetch等
    图片、音频
    prefetch预读取资源

    注意事项：
        css在head里面和在body里面的优先级不一样
        可视区的图片优先级高于js，但是js会优先加载
        可推迟加载资源：图片，视频

    自定义优先级


6. css 和 script 加载阻塞情况
    css不阻塞DOM解析，阻塞页面的渲染
        当css没有回来之前，我们的页面没有渲染出任何东西
        请求是几乎同一时间发出，说明其解析了DOM后来的内容
    js执行阻塞DOM的解析


7. 预加载系列(需要整理)
    preload


8. 图片加载
        压缩图片
        选择合适的图片格式，优先jdp和webp
        CDN
        dns-prefetch
        图片多的化，放不同的域名
        重点：大图png交错，jpg渐进式提高视觉体验
        重点：懒加载 intersectionObserver 进入可视区域再加载图片




* */
