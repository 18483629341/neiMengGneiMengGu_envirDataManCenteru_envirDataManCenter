$(function () {
     /* 外环上的球*/
     var rollItem1 = new Roll('#OutRotateItemMain', 8);/*需要旋转的元素选择器 id 初始位置所在的角度*/
     /* 内环上的球*/
     var rollItem2 = new Roll('#InRotateItemMain', 8);/*需要旋转的元素选择器 id 初始位置所在的角度*/
    var lightLoop=new LightLoop('#LightBox',10,"spread");//往集中方向
    var lightLoop=new LightLoop('#LightBoxRight',8,'converage');//往分散方向
   
})