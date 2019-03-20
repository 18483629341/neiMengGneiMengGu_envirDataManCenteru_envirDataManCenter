$(function () {
    /* 外环的旋转*/
    var rollItem1 = new Roll('#OutRotateItemMain');/*参数一：需要旋转的元素选择器 */
    /* 内环的旋转*/
    var rollItem2 = new Roll('#InRotateItemMain');/*参数一：需要旋转的元素选择器 */

    var lightLoopLeft = new LightLoop('#LightBox', 10, "converage");//converage 往集中方向
    var lightLoopRight = new LightLoop('#LightBoxRight', 8, 'converage');
    
    //数据汇聚和数据服务的循环切换
    var LeftRightLoop = setInterval(function () {
        loopFun();//数据汇聚和数据服务的方法
    }, loopTime);

    //循环播放数据
    CenterValueLoop();//虚拟展示              
    
    //当前的状态:数据汇聚对应的'converage'；数据服务对应的'spread'；
    var status = 'converage';

    //循环控制集中和扩散
    var loopTime=10000;//需要统一部分循环的时间
    
    //数据汇聚和数据服务的方法
    var loopFun = function () {
        if (status === 'converage') {
            $('.innerRadio').animate({ width: '100%' }, loopTime);
            $('.light').animate({ left: '100%' }, loopTime, function () {
                spreadTranslate()//整体向外扩散
            });
            status = 'spread';
        } else {
            $('.innerRadio').animate({ width: '0' }, loopTime);
            $('.light').animate({ left: '0' }, loopTime, function () {
                collectTranslate();  //整体向中心集中
            });
            status = 'converage';
        }
    }

    

    //整体向中心集中
    function collectTranslate() {
        if (status != 'converage') {
            $(".DownIconBox").removeClass('UpSideDown');
            $(".UpIconBox").removeClass('UpSideDown');
            lightLoopLeft.setType("converage");//converage 往集中方向
            lightLoopRight.setType('converage');
        }
    }

    //整体向外扩散
    function spreadTranslate() {
        if (status != 'spread') {
            $(".DownIconBox").addClass('UpSideDown');
            $(".UpIconBox").addClass('UpSideDown');
            lightLoopLeft.setType("spread");//converage 往扩散方向
            lightLoopRight.setType('spread');
        }
    }

})

