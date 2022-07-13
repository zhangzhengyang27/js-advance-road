/*
错误类型：
    语法错误：代码中存在拼写错误，将导致程序完全或者部分不能运行
    逻辑错误：代码拼写正确，但执行结果不匹配预期


错误对象
1. Error 通用的error
    基础的错误对象，其他的错误都是继承于它
    name: 错误名
    message: 错误文本消息
    stack：错误堆栈信息


2. EvalErroe   eval的错误
    历史问题 与eval相关
    现在永远不会碰到


3.InternalError  引擎内部的错误
    红皮书和MDN都提到过这个对象，但是只有火狐支持
    产生：过多的case语句；正则表达式中括号过多；递归过深


4. RangeError  数值变量或者参数超出其有效范围
    当一个值不在其所允许的范围或者集合中。
    当传递一个不合法的length值作为Array构造器的参数创建数组。

5. referenceError  无效的引用
    当一个不存在的变量被引用时

6. SyntaxError  语法错误


7. TypeError   变量或参数不属于有效类型
    期望类型与实际类型不匹配
    new 1()

8. URIError   URL编码/解码错误
       只有URI处理函数产生的，但是URI不仅仅会产生这个错误
       encodeURI()
       encodeURIComponent()
       decodeURIComponent()


9. AggregateError  包含多个错误的错误



* */
