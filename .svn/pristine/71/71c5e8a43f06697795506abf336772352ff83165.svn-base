var swidth = null;//获取屏幕的宽度
function autoFit() {
    swidth = $(window).width();
    if (swidth > 1000 || swidth === 1000) {
        resize();
    }
}

//整屏等比缩放
function resize() {
    var winratio = $(window).width() / 1920;
    $('.body1').css({
        transform: "scale(" + winratio + ")",
        transformOrigin: "left top",
        height:winratio*1080+'px'
    });
}

window.requestAnimFrame = (function() {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
		function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
			return window.setTimeout(callback, 1000 / 60);
		};
})();


//利用canvas绘制曲线
/**
* 
* @param {*} elementId 绘制曲线的canvas的ID
* @param {*} n         需要绘制曲线的数量
*/
function draw(elementId, n) {
    var canvas = document.getElementById(elementId);
    //var boxHeight=canvas.style.height;
    //设置或得到整个canvas的高度
   
    var boxHeight = $('#' + elementId).height();         //canvas的高度 待完善
    var boxWidth = $('#' + elementId).width();          //canvas的宽度 待完善
    var perHeight = parseInt(boxHeight / n);
    var centerY = parseInt(boxHeight / 2);
   
    var context = canvas.getContext('2d');

    //绘制2次贝塞尔曲线 
    context.setLineDash([6, 6]);//设置线条为虚线的样式
    for (var i = 0; i < n; i++) {
        var startY = perHeight / 2 + perHeight * i;
        var controlY=parseInt(centerY+perHeight/8*(i-n/2));
        context.beginPath();

        context.moveTo(0, startY); //曲线绘制的起点
        //quadraticCurveTo(cpx,cpy,x,y)　　//cpx，cpy表示控制点的坐标,x，y表示终点坐标；
        //曲线绘制的控制点位整个canvas
        context.quadraticCurveTo(20, controlY, boxWidth, centerY);
        context.strokeStyle = "#078dff";//设置贝塞尔曲线的颜色
        context.stroke();
    }
}

//移动点的原型
/**
* 
* @param {*} element   移动点的父元素的选择器
* @param {*} n         总共移动点的数量
* @param {*} direction     需要绘制曲线的方向,只能为 "converage"|'spread'
*/
function LightLoop(element, n,type) {
    this.element=element
    this.type=type;
    this.boxHeight = $(this.element).height();         //移动点的的高度  
    this.boxWidth = $(this.element).width();          //移动点的父元素的的宽度
    this.perHeight = parseInt(this.boxHeight / n);
    this.childWidth = $(this.element).children().width();                   //移动点的子元素的宽度    
    this.childHeight = $(this.element).children().height();                 //移动点的子元素的高度
    //控制点p1统一为
    this.controlX = 20;                                          //离canvas做左侧的水平距离 统一为20；
    //终点p2统一为右边终点
    this.endX = this.boxWidth;
    this.endY = this.boxHeight / 2;//垂直中心
    this.radio = 0;//贝塞尔曲线的比值
    
    var _this = this;
    var LightTurnOn = setInterval(function () {
        _this.turn();
    }, 40)

    this.turn = function () {
        if (this.radio >= 1) {
            this.radio = 0
        } else {
            this.radio = this.radio + 0.005;
        }
        for (var i = 0; i < n; i++) {
            var obj = {};
             //控制点p1
            obj.controlY= this.boxHeight / 2+this.perHeight/8*(i-n/2);                          
            //如果是光点往集中方向移动的类型
            if(this.type==="converage"){
            //起点p0                
                obj.startX = 0;                                              //离canvas做左侧的水平距离            
                obj.startY = this.perHeight / 2 + this.perHeight * i;             //离canvas顶部的垂直距离  
                obj.endX=this.endX;
                obj.endY=this.endY;    
                //计算斜率，得到点的切线方向，得到角度
                obj.k = [(1 - this.radio) * (obj.controlY - obj.startY) + this.radio * (obj.endY - obj.controlY)] / [(1 - this.radio) * (this.controlX - obj.startX) + this.radio * (obj.endX - this.controlX)];
                //根据斜率，求得需要切斜的角度 单位为弧度，/0.017453293 转化为角度
                obj.angle = Math.atan(obj.k) / 0.017453293;//根据斜率得到旋转角度
            //如果是光点往分散方向移动的类型
            }else{
                obj.startX = this.endX;                                                       
                obj.startY = this.endY;             
                obj.endX=0;
                obj.endY=this.perHeight / 2 + this.perHeight * i;  
        
                //计算斜率，得到点的切线方向，得到角度
                obj.k = [(1 - this.radio) * (obj.controlY - obj.startY) + this.radio * (obj.endY - obj.controlY)] / [(1 - this.radio) * (this.controlX - obj.startX) + this.radio * (obj.endX - this.controlX)];
               
                //根据斜率，求得需要切斜的角度 单位为弧度，/0.017453293 转化为角度
                obj.angle = Math.atan(obj.k) / 0.017453293+180; //根据斜率得到旋转角度，+180另外图标自身要换反方向
            }
             //根据比值this.radio变化计算点的坐标值；p=(1-this.radio)*(1-this.radio)p0+2*this.radio*(1-this.radio)*p1+this.radio*this.radio*p2;
             obj.nowX = (1 - this.radio) * (1 - this.radio) * obj.startX + 2 * this.radio * (1 - this.radio) * this.controlX + this.radio * this.radio * obj.endX;
             obj.nowY = (1 - this.radio) * (1 - this.radio) * obj.startY + 2 * this.radio * (1 - this.radio) *obj.controlY + this.radio * this.radio * obj.endY;
            $(this.element + ' .LineIcon:eq(' + i + ')').css({
                'left': obj.nowX - this.childWidth / 2,
                'top': obj.nowY - this.childHeight / 2,
                'transform': 'rotate(' + obj.angle + 'deg)'
            });
        }
    }

     //重置光点移动方式
    this.setType=function(newType){                                 
        this.type=newType;
        clearInterval(LightTurnOn);
        this.radio = 0;//重置曲线的绘制比值
        LightTurnOn = setInterval(function () {
            _this.turn();
        }, 40)
    }
    
}

//循环播放中间球体数据
function CenterValueLoop(){
     var ListNumArr=['233,444','233,566','33,589'];
     var KbNumArr=['789,233,444','677,233,566','556,533,589'];
     var i=0;
     //循环数据播放
     setInterval(function(){
        $('#ListNum').html(ListNumArr[i]);
        $('#KbNum').html(KbNumArr[i]);
        if(i>=ListNumArr.length){
            i=0
        }else{
            i++;
        }
     },500)
     
};
