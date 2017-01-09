$(function(){
	var $imageRoll = $("#imageRoll div a");
	$imageRoll.css("opacity","0.7");
	var len = $imageRoll.length;
	var index = 0;
	var adTimer = null;
	$imageRoll.mouseover(function(){
		index = $imageRoll.index(this);
		showImg(index);
	}).eq(0).mouseover();

	//划入 停止动画，划出 开始动画
	$("#imageRoll").hover(function(){
		if(adTimer){
			clearInterval(adTimer);
		}
	},function(){
		adTimer = setInterval(function(){
			showImg(index);
			index++;
			if(index == len){
				index = 0;
			}
		},3000);
	}).trigger('mouseleave');
});
//显示不同图片
function showImg(index){
	var $rollobj = $("#imageRoll");
	var $rollList = $rollobj.find("div a");
	var newhref = $rollList.eq(index).attr("href");
	$("#imgWrap")
		.attr("href",newhref) //此处可省略？有什么作用？
		.find("img").eq(index).stop(true,true).fadeIn()
		.siblings().fadeOut();
	$rollList.removeClass('chos').css("opacity",0.7)
			 .eq(index).addClass('chos').css("opacity",1);				
}