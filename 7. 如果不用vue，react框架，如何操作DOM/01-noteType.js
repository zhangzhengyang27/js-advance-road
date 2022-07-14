/* 
节点类型

1. 元素节点 
      div span 等

3. 文本节点
      对象模型:Text

      神秘的空白文本节点
      使用childNodes访问
      使用nodeValue取值
      API:
        splitText:拆家
        Element.noramlize 


8. 注释节点
      对象模型:Comment

9. 文档
      对象模型:Document
      节点查找：document.querySelector,document.querySelectorAll
      节点结合信息:document.all,document.forms,document.links,document.images,document.script,document.style,
      cookie :document.cookie

    

10. 文档类型  
      对象模型:DocumentType
      访问方式：document.doctype,document.firstChild
      有效的属性只有一个，就是name。返回的值就是"html"

11. 文档碎片
      对象模型:DocumentFragment

      就像标准的document一样，存储由节点(nodes)组成的文档结构
      所有的节点被一次插入到文档中，而这个操作仅发生一个重新渲染的操作
      常用于批量创建大量的节点，提高性能


Element系列
  创建:document.createElement
  获取：
    children:Element.children  只返回nodeType=1的节点
    childNodes:Element.childNodes 返回所有节点
  属性获取：
    getAttribute
    setAttribute
    hasAttribute





*/
