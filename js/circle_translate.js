function Circle(element, angle) {
	this.element = $(element);
	this.angle = angle;
	this.sideLength=$(element).width();
	//旋转路径是根据父元素的宽度的一半作为椭圆的X轴的半径
	this.rx = $(element).parent('.rotateBack').width() / 2;
	this.ry = this.rx * 0.5; //0.5为y轴半径与x轴半径的比率；
  //  this.turnOn = function(){turn();}
	this.turnOff = function () {}
	var turnOn=null;
	var _this=this;
	$(element).hover(function(){
		clearInterval(turnOn);
	},function(){
		turnOn=setInterval(function(){
			//顺时针旋转 ++，逆时针旋转  --
			_this.turn();
		}, 100)
	}).trigger('mouseleave');
	//循环一次执行的方法
	this.turn=function(){
		this.angle=this.angle+3;
		//0.017453293为角度转为弧度的比率值，1度=0.017453293弧度；Math.cos(x),x为弧度
		$(element).css({
			'left':this.rx*Math.cos(this.angle*0.017453293)+this.rx-this.sideLength/2+'px',
			'top':this.ry*Math.sin(this.angle*0.017453293)+this.ry-this.sideLength/2+'px',
		})
	}
}
// var circleItem1 = new Circle($('#rotateItem1'), 180);
// var circleItem2 = new Circle($('#rotateItem2'), 90);
