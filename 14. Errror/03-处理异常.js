/*
异常捕获
try catch --可以代码

window.error  --全局错误
    捕获全局没有处理过的错误
    但是捕获了，它是没有办法处理的

    <script>
        window.onerror = function (message, url, line, column, error) {
                console.log('捕获到错误:',message, "==line:", line,"==column:", column, "==error:",error);
        }

    </script>
    <script src="http://127.0.0.1:8080/test.js" crossorigin="anonymous"/>

    需要捕获到跨域获取资源的详细报错
    1. script引用js文件时添加 crossorigin="anonymous"。如果是动态添加的js，还需要写script.crossorigin=true
    2. 为JS资源文件添加CORS响应头，后端需要将Access-Control-Allow-Origin="*"


window.addEventListener('error')  --全局错误 静态资源
    可以捕获静态资源错误，但是必须是捕获阶段。但是无法区分是404还是500错误，需要结合服务端日志

unhandledrejection,rejectionhandled  --promise错误
    unhandledrejection:当Promise被reject且没有reject处理器的时候，会触发unhandledrejection
    rejectionhandled:放Promise被rejected且有rejection处理时会在全局触发rejectionhandled


XMLHttpRequest，fetch,axios   --网络请求
    XMLHttpRequest 自己有error事件
    fetch 自带catch
    axios  catch


React ErrorBoundary     --react异常
    子组件渲染
    生命周期函数
    构造函数

vue erroeHandler    --vue异常
    Vue.config.errorHandler=(err,vm,info)={

    }


上报异常
    sendBeacon
        数据发送可靠
        数据异步传输
        不影响下一个导航的载入
    异常上报-gif图地址
        图片src属性可以支持跨域
        体积小
        一般采用1*1像素的透明色上报，减少体积


http-server 服务器
* */
