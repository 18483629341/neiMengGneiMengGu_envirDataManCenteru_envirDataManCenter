/**   方式css3
 * 
 * @param {element} 需要旋转的元素的选择器
 * @param {angle} 初始位置所在的角度
 */
function RollPanel(element) {
	this.element = $(element);
	this.angle = 0;
	this.sideLength=$(element).children().width();
	this.n=$(element).children().length;
	//旋转路径是根据父元素的宽度的一半作为椭圆的X轴的半径
	this.rx = $(element).width() / 2;
	this.ry =  $(element).height() / 2; //0.5为y轴半径与x轴半径的比率；
	this.minRadio=0.6;
	var turnOn=null;
	var _this=this;
	$(element).hover(function(){
		clearInterval(turnOn);
	},function(){
		turnOn=setInterval(function(){
			//顺时针旋转 ++，逆时针旋转  --
			_this.turn();
		},1)
	}).trigger('mouseleave');
	//循环一次执行的方法
	this.turn=function(){
		//requestAnimFrame(_this.turn);
		this.angle=this.angle+0.01;
		var radio=null;
		for(var i=0;i<this.n;i++){
            
			var nowAngle=this.angle+parseInt(i*360/this.n);
			var simpAngle=nowAngle%360;     //角度简化到0到360°
			var radio=1;
			if(simpAngle>=90&&simpAngle<=270){
				radio=(simpAngle-90)*(-1)*(1-this.minRadio)/180+1;
			}else if(simpAngle>270){
				radio=(simpAngle-270)*(1-this.minRadio)/180+this.minRadio;
			}else{
				radio=(simpAngle-(-90))*(1-this.minRadio)/180+this.minRadio;
			}		
			//0.017453293为角度转为弧度的比率值，1度=0.017453293弧度；Math.cos(x),x为弧度
			var nowRad=parseFloat(simpAngle*0.017453293).toFixed(8);
			$(element + ' .RotateItem:eq(' + i + ')').css({
				'left':this.rx*Math.cos(nowRad)+this.rx-this.sideLength/2+'px',
				'top':this.ry*Math.sin(nowRad)+this.ry-this.sideLength/2+'px',
				'transform': 'scale(' + radio + ')'
			})

		}
		
	}
}




