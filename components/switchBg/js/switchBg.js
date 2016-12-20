$.fn.switchBg = function(_config) {
	this.init = function(_config) {
		var len = _config.skinId.length;
		var skin = '';
		for (var i = 0; i < len; i++) {
			skin += "<li id='" + _config.skinId[i] + "'>" + "<img src='" + _config.url[i] + "' title='" + _config.title[i] + "'/></li>";
		}
		$("<ul/>", {
			id: 'skin'
		}).html(skin).appendTo($('body')).draggable();
		$("<div/>", {
			id: 'content'
		}).appendTo($('body'));

	}
	this.init(_config);
}

$(function() {
	//创建DOM
	var config = {
		skinId: new Array('skin_0', 'skin_1', 'skin_2'),
		contentId: 'content',
		title: new Array('Kris1', 'Kris2', 'Kris3'),
		url: new Array('images/Kris1.jpg', 'images/Kris2.jpg', 'images/Kris3.jpg')
	}
	$().switchBg(config);

	//切换皮肤
	var $li = $("#skin li");
	$li.click(function() {
		switchSkin(this.id);
	});
	var cookie_skin = $.cookie("MyCssSkin");
	if (cookie_skin) {
		switchSkin(cookie_skin);
	}

	//切换函数
	function switchSkin(skinName) {
		// $("#"+skinName).addClass("selected")                 //当前<li>元素选中
		// 	.siblings().removeClass("selected");  //去掉其它同辈<li>元素的选中
		$("#cssfile").attr("href", "css/" + skinName + ".css"); //设置不同皮肤
		$.cookie("MyCssSkin", skinName, {
			path: '/',
			expires: 7
		});
	}
});