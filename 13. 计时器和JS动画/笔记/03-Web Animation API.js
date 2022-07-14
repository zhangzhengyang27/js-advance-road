/*
动画手段
  之前学过的
  Web Animation API
  

例子
  落球

  弹幕播报

两个核心对象
  KeyframeEffect
    描述动画属性
    创建一组可动画的属性和值，称为关键帧。然后可以使用Animation()构造函数播放这些内容
    构造函数:重点第二种、第三种
      new keyframeEffect(target, keyframes)
      new keyframeEffect(target, keyframes,options)
      new keyframeEffect(source)
  Animation
    控制动画的播放
    常用的事件类型
      oncancel
      onfinish
      onremove



Element.getAnimations()
  通过这个方法可以获得所有的Animation的实例
  在需要批量修改参数的时候可以使用这个方法


优势
  对比css、Animation更加的灵活
  天然支持promise


兼容性

查看动画

总结












*/