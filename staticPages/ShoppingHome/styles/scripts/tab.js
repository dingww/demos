$(function(){
	var $li = $("div.tab_menu ul li");
	$li.click(function(event) {
		$(this).addClass('selected')
			   .siblings()
			   .removeClass('selected');
		var index = $li.index(this);
		$("div.tab_box > p")
			.eq(index).show()
			.siblings().hide();
	}).hover(function() {
		$(this).addClass('hover');
	}, function() {
		$(this).removeClass('hover');
	});;
})