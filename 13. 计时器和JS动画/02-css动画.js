/**
animation: 动画
  keyframe动画
  动画暂停以及动画启动
  动画事件
    webkitAnimationEnd
    webkitAnimationStart
    webkitAnimationIteration

  内置贝塞尔曲线运动效果
    linear：线性运动
    ease：缓和运动,缓慢开始，突然加速，最后变慢
    ease-in：缓和运动,缓慢开始,逐渐加速知道结束
    ease-out：突然开始，逐渐减速到结束
    ease-in-out:缓和运动,缓慢开始，突然加速，最后减速至结束

    要点：
      曲线越陡峭，速度越快
      控制点的位置会影响曲线的形状

    应用场景：
      svg
      canvas

    

transition: 过渡
  能用transition实现的动画，一定可以用animation实现
  属性·
    不支持动画的属性：background-images、float、display、position、visibility

  事件
    transitionstart 过渡开始事件，因为有delay属性，所以进行，不一定真正开始
    transitionrun
    transitionend
    transitioncancel

  注意事项


动画案例
  进度条动画

  雪花

  购物车抛物线

animation对比transition
  animation优于transition




css vs js
  css动画优于js动画


动画的注意事项
  整理




 */