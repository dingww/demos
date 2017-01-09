// $(function(){
// 	$("#skin li").click(function(event) {
// 		$("head").find("link.skin").remove();
// 		$("head").append('<link rel="stylesheet" type="text/css" href="styles/skin/'+this.id+'.css" class="skin">');
// 	});
// });//没有保存换肤记录，刷新之后页面皮肤还原默认皮肤
$(function(){
	$("#skin li").click(function() {
		switchSkin(this.id);
	});

	var cookie_skin = $.cookie("myCssSkin");
	if(cookie_skin){
		switchSkin(cookie_skin);
	}
});

function switchSkin(skinName){
	$("#"+skinName).addClass('selected')
				   .siblings()
				   .removeClass('selected');
	$("#cssfile").attr("href","styles/skin/"+skinName+".css");
	$.cookie("myCssSkin",skinName,{path:'/',expires:10});
}
