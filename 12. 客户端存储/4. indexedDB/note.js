/*
1. 什么事indexedDB
    一个事务性的数据库系统
    基于js的面向对象数据库
    支持索引
    可以存储 结构化克隆算法 支持的任何对象


2. 不能被结构化克隆算法复制的数据
    Error以及Function对象
    DOM节点
    属性描述符，setters 以及 getters
    原型链上的属性


3. indexedDB的特点
    以键值对方式存储，键可以是二进制
    支持事务
    异步操作。基于回调函数的异步，不是promise
    遵循同源策略
    存储空间，配额很大
    支持直接存储二进制

4. 主要的对象模型


5.基本的操作流程


  实用场景:
    缓存数据，比如游戏数据
    缓存图片，脚本，json文件
    service worker 的第三方库，用的就是indexedDB

6.第三方库
    localForage
        有一个优雅降级的策略，若浏览器不支持indexdeDB或者WebSQL(基本废弃)，则使用localStorage
        支持promise
    dexie
        解决了indexedDB的3个主要问题
        1. 不明确的错误处理
        2. 糟糕的查询
        3. 代码的复杂性
    ZangoDB
        一个类MongoDB的IndexedDB接口实现，提供了过滤、投影、排序、更新和聚合等大多数MongoDB常见的特性
    JsStore
        跟sql很像

7. 基于indexedDB的文件系统
    简单的文件系统



* */
