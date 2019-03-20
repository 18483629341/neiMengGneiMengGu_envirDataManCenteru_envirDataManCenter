$(function () {
     /* 外环上的球*/
    var rollItem1 = new Roll('#OutRotateItemMain', 8);/*需要旋转的元素选择器 id 初始位置所在的角度*/
     /* 内环上的球*/
    var rollItem2 = new Roll('#InRotateItemMain', 8);/*需要旋转的元素选择器 id 初始位置所在的角度*/

    var lightLoopLeft=new LightLoop('#LightBox',10,"spread");//converage 往集中方向
    var lightLoopRight=new LightLoop('#LightBoxRight',8,'spread');

    $('.innerRadio').animate({width:'100%'},3000);
    $('.light').animate({left:'100%'},3000);
    
    $('body').click('#LeftPoint',function(){
        converageFun();
    })
    $('body').click('#RightPoint',function(){
        spreadFun();
    })
    function converageFun(){
        console.log(1);
        $(".DownIconBox").removeClass('rotate');
        $(".UpIconBox").removeClass('rotate');
        lightLoopLeft.setType("converage");//converage 往集中方向
        lightLoopRight.setType('converage');
        console.log(2);
    }
    
    function spreadFun(){ 
        console.log(3);
        $(".DownIconBox").addClass('rotate');
        $(".UpIconBox").addClass('rotate');
        lightLoopLeft.setType("spread");//converage 往扩散方向
        lightLoopRight.setType('spread');
        console.log(4);
    }
    
})

