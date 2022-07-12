/*
Web Storage
把 sessionStorage 与 localstorage 统称为 Web Storage

1. sessionStorage vs localstorage
都遵循同源策略；容量一样

2. web Storage 注意事项
同步的API。如果存单个值或者键太大，影响体验
存储得分是字符串，要保存对象的时候，需要转换

3. sessionStorage是共享的吗

<a href="./other.html" target="_blank">打开新页面</a>
谷歌浏览器获取不到sessionStorage;360版本的可以获取

<a href="./other.html" target="_blank" rel="opener">打开新页面</a>
设置 rel="opener", 就都可以共享sessionStorage

* 在新标签或窗口打开一个页面时会复制顶级浏览会话的上下文作为新会话的上下文
* 打开多个相同的URL的Tabs页面，会创建各自的sessionStorage
* 89版本后，通过a标签target="_blank"跳转到sessionStorage就会丢失。a标签rel="opener"能够复制，
  仅仅能够复制，之后的更改并不会同步


4. StorageEvent
当前页面使用的storage被其他页面修改时就会触发StorageEvent事件
事件在同一个域下的不同页面之间触发，即在A页面注册了storage的监听处理，只有在跟A同域的B页面才会触发storage事件。B页面本身不会触发事件

sessionStorage能触发StorageEvent事件吗
    a标签打开：不触发
    iframe嵌套：触发

sessionStorage 与 localstorage 都可以触发StorageEvent事件。怎么区分
    window.addEventListener("storage", function (ev) {
       if(ev.storageArea===sessionStorage){

       }
    })

5. localStorage支持过期
简单实现
    添加一个属性，记住过期的时间
    添加数据的时候，一起保存
    查询数据的时候，比较时间，过期删除

第三方库
    web-storage-cache



6. localStorage存储加密
简单加密
    url方法：encodeURIComponent()  + decodeURIComponent()
    base64:window.btoa + window.atob

复杂加密
    浏览器提供了加密的API
    web Crypto API 的SubtleCrypto接口提供了许多加密功能

加密库
    crypto.js
    secure-ls
    localstorage-slim

7. web Storage 的存储空间

localstorage存储的键值采用什么字符编码？
    UTF-16
    UTF-16，每个字符使用两个字节，是有前提条件的，就是码点小于0XFFFF(65535),大于这个码点的就是四个字节

5M的单位是什么
    是字符的长度，或者是UTF-16编码单元
    字符的个数不等于字符的长度

localstorage键占不占存储空间？
    键是占空间的




* */
