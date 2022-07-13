/*

网络请求 XMLHttpRequest
    取消  XMLHttpRequest.abort()方法
 fetch
    const controller = new AbortController();
    controller.abort();
axios取消
    const controller = new AbortController();
    controller.abort();


文件上传思路
    input 标签选择文件/拖拽方法
    File API获取文件信息
    Ajax上传
    上传数据:FromData/Blob等
File 为特殊的Blob对象
    需要整理


accept
    文件扩展名
    一个有效的MIME类型，但是没有扩展名
    audio/ *
    video/ *  视频
    image/ * 图片


上传文件
    单文件上传
        客户端使用form-data传递 ，服务端以相同的方式接收
        mutle库用来处理 multipart/form-data
    多文件上传
        与单文件几乎相同
    大文件上传
        思考问题：
            如何实现断点续传
            大文件上传进度
            内容hash的速度提升



 */







