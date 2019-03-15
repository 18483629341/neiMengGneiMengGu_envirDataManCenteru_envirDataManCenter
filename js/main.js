var swidth=null;//获取屏幕的宽度
function autoFit(){
	swidth = $(window).width();
    if(swidth >1000 || swidth === 1000){
	   resize();
    }
}

//整屏等比缩放
function resize() {
   var winratio = $(window).width()/1920;
   $('.body1').css({
	 transform: "scale("+winratio+")",
	 transformOrigin: "left top"
   });
}