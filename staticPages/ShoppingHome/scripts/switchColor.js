$(function(){
	$(".color_change ul li img").click(function(event) {
		$(this).addClass('hover').parent().siblings().
			find('img').removeClass('hover');
		var imgSrc = $(this).attr('src');
		var i = imgSrc.lastIndexOf('.');
		var unit = imgSrc.substring(i);
		imgSrc = imgSrc.substring(0,i);
		var imgSrc_small = imgSrc + "one_small" + unit;
		var imgSrc_big = imgSrc +"one_big" + unit;
		$("#bigImg").attr("src",imgSrc_small);
		$("#thickImg").attr("href",imgSrc_big);
		var alt = $(this).attr('alt');
		$(".color_change strong").text(alt);
		var newImgSrc = imgSrc.replace("images/pro_img/","");
		$("#proItem .imgList li").hide();
		$("#proItem .imgList").find(".imgList_"+newImgSrc).show();
		$("#proItem .imgList").find(".imgList_"+newImgSrc)
			.eq(0).find("a").click();
	});
})