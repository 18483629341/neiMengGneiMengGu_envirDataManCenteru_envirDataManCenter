$(function () {
     /* 外环的旋转*/
    var rollItem1 = new Roll('#OutRotateItemMain');/*参数一：需要旋转的元素选择器 */
     /* 内环的旋转*/
    var rollItem2 = new Roll('#InRotateItemMain');/*参数一：需要旋转的元素选择器 */

    var lightLoopLeft=new LightLoop('#LightBox',10,"converage");//converage 往集中方向
    var lightLoopRight=new LightLoop('#LightBoxRight',8,'converage');
    
    loadAnimate();//加载动画需要的所有动态效果

    $("body").on('click','#LeftPoint',function(){
        //整体向中心集中
        collectTranslate();
    })

    $('body').on('click','#RightPoint',function(){
        //整体向外扩散
        spreadTranslate();
    })

    //加载动画需要的所有动态效果
    function loadAnimate(){
        $('.innerRadio').animate({width:'100%'},2500);
        $('.light').animate({left:'100%'},2500,function(){
            spreadTranslate()
        });
    }

     //整体向中心集中
    function collectTranslate(){
        $(".DownIconBox").removeClass('UpSideDown');
        $(".UpIconBox").removeClass('UpSideDown');
        lightLoopLeft.setType("converage");//converage 往集中方向
        lightLoopRight.setType('converage'); 
    }

    //整体向外扩散
    function spreadTranslate(){ 
        $(".DownIconBox").addClass('UpSideDown');
        $(".UpIconBox").addClass('UpSideDown');
        lightLoopLeft.setType("spread");//converage 往扩散方向
        lightLoopRight.setType('spread');
    }
    
})

