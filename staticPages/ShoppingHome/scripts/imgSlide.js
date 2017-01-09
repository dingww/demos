$(function(){	
	$("#brandTab li a").click(function(event) {
		$(this).parent().addClass('chos').siblings().removeClass('chos');
		var idx = $("#brandTab li a").index(this);
		imgSlide(idx);
		return false;
	}).eq(0).click();
});

function imgSlide(index){
	var $rollobj = $("#brandList");
	var Width = $rollobj.find("li").outerWidth();
	rollWidth = Width*4;
	$rollobj.stop(true,false).animate({left: -rollWidth*index},1000);
}