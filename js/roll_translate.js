/**
 * 
 * @param {element} 需要旋转的元素的选择器
 * @param {angle} 初始位置所在的角度
 */
function Roll(element, angle) {
	this.element = $(element);
	this.angle = angle;
	this.sideLength=$(element).width();
	//旋转路径是根据父元素的宽度的一半作为椭圆的X轴的半径
	this.rx = $(element).parent('.RotateParent').width() / 2;
	this.ry =  $(element).parent('.RotateParent').height() / 2; //0.5为y轴半径与x轴半径的比率；
	this.minRadio=0.7;
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
		},200)

	}).trigger('mouseleave');
	//循环一次执行的方法
	this.turn=function(){
		//window.requestAnimFrame(this.turn)
		this.angle=this.angle+0.3;
		var simpAngle=this.angle%360;
		var radio=1;
		if(simpAngle>=90&&simpAngle<=270){
			radio=(simpAngle-90)*(-1)*(1-this.minRadio)/180+1;
		}else if(simpAngle>270){
			radio=(simpAngle-270)*(1-this.minRadio)/180+this.minRadio;
		}else{
			console.log(simpAngle)
			radio=(simpAngle-(-90))*(1-this.minRadio)/180+this.minRadio;
		}
        
		
		//0.017453293为角度转为弧度的比率值，1度=0.017453293弧度；Math.cos(x),x为弧度
		$(element).css({
			'left':this.rx*Math.cos(this.angle*0.017453293)+this.rx-this.sideLength/2+'px',
			'top':this.ry*Math.sin(this.angle*0.017453293)+this.ry-this.sideLength/2+'px',
			'transform':'scale('+parseFloat(radio).toFixed(2)+')',
			"transformOrigin":"center middle"
		})
	}
}



/* 外环上的球*/
var rollItem1 = new Roll($('#RotateItem1'), 0);/*需要旋转的元素选择器 id 初始位置所在的角度*/
var rollItem2 = new Roll($('#RotateItem2'), 45);
var rollItem1 = new Roll($('#RotateItem3'), 90);
var rollItem2 = new Roll($('#RotateItem4'), 135);
var rollItem1 = new Roll($('#RotateItem5'), 180);
var rollItem2 = new Roll($('#RotateItem6'), 225);
var rollItem1 = new Roll($('#RotateItem7'), 270);
var rollItem2 = new Roll($('#RotateItem8'), 315);

/* 内环上的球*/
var rollItemInner1 = new Roll($('#RotateItemInner1'), 0);/*需要旋转的元素选择器 id 初始位置所在的角度*/
var rollItemInner2 = new Roll($('#RotateItemInner2'), 45);
var rollItemInner1 = new Roll($('#RotateItemInner3'), 90);
var rollItemInner2 = new Roll($('#RotateItemInner4'), 135);
var rollItemInner1 = new Roll($('#RotateItemInner5'), 180);
var rollItemInner2 = new Roll($('#RotateItemInner6'), 225);
var rollItemInner1 = new Roll($('#RotateItemInner7'), 270);
var rollItemInner2 = new Roll($('#RotateItemInner8'), 315);

