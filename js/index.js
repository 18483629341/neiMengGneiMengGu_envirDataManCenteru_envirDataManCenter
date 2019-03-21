$(function () {
    /* 外环的旋转*/
    var rollItem1 = new Roll('#OutRotateItemMain');/*参数一：需要旋转的元素选择器 */
    /* 内环的旋转*/
    var rollItem2 = new Roll('#InRotateItemMain');/*参数一：需要旋转的元素选择器 */

    var lightLoopLeft = new LightLoop('#LightBox', 10, "converage");//converage 往集中方向
    var lightLoopRight = new LightLoop('#LightBoxRight', 8, 'converage');

    //数据汇聚和数据服务的循环切换  使用setInterval()使用与内部的animate()时间有误差，不能在准确的时间，间隔
    // LeftRightLoop();
    // var x=0;
    // function LeftRightLoop(){
        // setInterval(function () {
        //    //数据汇聚和数据服务的方法
        //    if (parseInt(x/2) === parseInt(0)) {
        //        // $('.innerRadio').animate({ width: '100%' }, animateTime);
        //         //$('.light').animate({ left: '100%' }, animateTime, function () {
        //             spreadTranslate()//整体向外扩散
        //         //});
        //         status = 'spread';
        //     } else if(parseInt(x/2) === parseInt(1)) {
        //         //$('.innerRadio').animate({ width: '0' }, animateTime);
        //         //$('.light').animate({ left: '0' }, animateTime, function () {
        //             collectTranslate();  //整体向中心集中
        //        // });
        //         status = 'converage';
        //     }
        //     x++;
        // }, loopTime);
    // } 

   
    //数据汇聚和数据服务的循环切换 使用setTimeout()模拟setInterval()，才能准确在间隔时间内执行方法
    var i = 0;
    var timer = setTimeout(function () {
        leftRightAlter();
       
        timer = setTimeout(arguments.callee, loopTime);
    }, loopTime)
    //当前的状态:数据汇聚对应的'converage'；数据服务对应的'service'；
    var status = 'converage';
    //统一循环控制集中和扩散的时间
    var loopTime = 30000;
    var animateTime=29500;
    
    function leftRightAlter(){
        //数据汇聚和数据服务的方法
        if (parseInt(i % 2) === parseInt(0)) {
            //此处展示数据汇聚的内容
            
            //光点向右移动
            $('.innerRadio').animate({ width: '100%' }, animateTime);
            $('.light').animate({ left: '100%' }, animateTime, function () {
                //状态转变到数据服务
                spreadTranslate()//整体向外扩散
                status = 'service';
            });
        } else if (parseInt(i % 2) === parseInt(1)) {
            //此处展示数据服务的内容
            
            //光点向左移动
            $('.innerRadio').animate({ width: '0' }, animateTime);
            $('.light').animate({ left: '0' }, animateTime, function () {
                //状态转变到数据汇聚
                collectTranslate();  //整体向中心集中
                status = 'converage';
            });  
        }
        i++;
    }

    //循环播放数据
    CenterValueLoop();//虚拟展示              

    //整体向中心集中
    function collectTranslate() {
        //console.log(1);
        if (status != 'converage') {
            $(".DownIconBox").removeClass('UpSideDown');
            $(".UpIconBox").removeClass('UpSideDown');
            lightLoopLeft.setType("converage");//converage 往集中方向
            lightLoopRight.setType('converage');
        }
    }

    //整体向外扩散
    function spreadTranslate() {
        if (status != 'service') {
            $(".DownIconBox").addClass('UpSideDown');
            $(".UpIconBox").addClass('UpSideDown');
            lightLoopLeft.setType("spread");//converage 往扩散方向
            lightLoopRight.setType('spread');
        }
    }
     
    $("#LeftPoint").hover(function() {
        // $(this).stop(true)
        $('.innerRadio').stop(true).animate({ width: '0%' }, 500);     //如果在此时触发了光标的移出事件
        //                                           //直接跳过后面的动画队列
        $('.light').stop(true).animate({ left: '0' }, 500);
        clearTimeout(timer);
    },function(){
        timer = setTimeout(function () {
            leftRightAlter();
            timer = setTimeout(arguments.callee, loopTime);
        }, loopTime)
    }).trigger("mouseleave");
      
    $("#RightPoint").hover(function() {
        $('.innerRadio').stop(true).animate({ width: '100%' }, 500);//如果在此时触发了光标的移出事件
        $('.light').stop(true).animate({ left: '100%' }, 500);//直接跳过后面的动画队列
    });
    // $("body").on('click', '#LeftPoint', function () {
    //     clearTimeout(timer);
    //     //整体向中心集中
    //     status = 'converage';
    //     i=0;
    //     timer = setTimeout(function () {
    //         leftRightAlter();
           
    //         timer = setTimeout(arguments.callee, loopTime);
    //     }, loopTime)
    // })

    $('body').on('click', '#RightPoint', function () {
        // //整体向外扩散
        status = 'service';
        i=1;
    })
})

