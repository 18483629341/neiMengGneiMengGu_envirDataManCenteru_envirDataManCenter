/**
 * 
 * @param {element} 需要旋转的元素的选择器
 * @param {angle} 初始位置所在的角度
 */
function Circle(element, angle) {
	this.element = $(element);
	this.angle = angle;
	this.sideLength=$(element).width();
	//旋转路径是根据父元素的宽度的一半作为椭圆的X轴的半径
	this.rx = $(element).parent('.RotateParent').width() / 2;
	this.ry =  $(element).parent('.RotateParent').height() / 2; //0.5为y轴半径与x轴半径的比率；
  //  this.turnOn = function(){turn();}
	this.turnOff = function () {}
	var turnOn=null;
	var _this=this;
	$(element).hover(function(){
		clearInterval(turnOn);
	},function(){
		turnOn=
		setInterval(function(){
			//顺时针旋转 ++，逆时针旋转  --
			_this.turn();
		},10)

	}).trigger('mouseleave');
	//循环一次执行的方法
	this.turn=function(){
		window.requestAnimFrame(this.turn)
		this.angle=this.angle+0.1;
		//0.017453293为角度转为弧度的比率值，1度=0.017453293弧度；Math.cos(x),x为弧度
		$(element).css({
			'left':this.rx*Math.cos(this.angle*0.017453293)+this.rx-this.sideLength/2+'px',
			'top':this.ry*Math.sin(this.angle*0.017453293)+this.ry-this.sideLength/2+'px',
		})
	}
}
window.requestAnimFrame = (function() {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
		function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
			return window.setTimeout(callback, 1000 / 60);
		};
})();
/* 外环上的球*/
var circleItem1 = new Circle($('#RotateItem1'), 0);/*需要旋转的元素选择器 id 初始位置所在的角度*/
var circleItem2 = new Circle($('#RotateItem2'), 45);
var circleItem1 = new Circle($('#RotateItem3'), 90);
var circleItem2 = new Circle($('#RotateItem4'), 135);
var circleItem1 = new Circle($('#RotateItem5'), 180);
var circleItem2 = new Circle($('#RotateItem6'), 225);
var circleItem1 = new Circle($('#RotateItem7'), 270);
var circleItem2 = new Circle($('#RotateItem8'), 315);

/* 内环上的球*/
var circleItemInner1 = new Circle($('#RotateItemInner1'), 0);/*需要旋转的元素选择器 id 初始位置所在的角度*/
var circleItemInner2 = new Circle($('#RotateItemInner2'), 45);
var circleItemInner1 = new Circle($('#RotateItemInner3'), 90);
var circleItemInner2 = new Circle($('#RotateItemInner4'), 135);
var circleItemInner1 = new Circle($('#RotateItemInner5'), 180);
var circleItemInner2 = new Circle($('#RotateItemInner6'), 225);
var circleItemInner1 = new Circle($('#RotateItemInner7'), 270);
var circleItemInner2 = new Circle($('#RotateItemInner8'), 315);

