/*
资源加载器
    通过程序加载资源(js、css、视频)，以便之后重回利用
    资源加载库PreloadJs

原理：
    发送请求获取资源
    用key标记资源
    URL.createObjectURL生成url，以便之后复用
缺点：
    没有显式的版本问题
    没有缓存
    资源之间没有依赖关系

改进：
    支持版本：用属性字段标记版本
    支持缓存：indexedDB
    支持依赖关系：一个字段标记前置依赖

组成：
    util 工具方法
    idb.js文件存储
    class Emitter 事件中心
    class CacheManager 缓存管理
    class ResourceLoader  资源加载和管理

流程图

消息通知
* */
