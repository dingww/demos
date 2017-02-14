$(function() {
	$(".tab .menu li").hover(function() {
		$(this).addClass("hover");
		$(this).parents(".tab").children('.list').hide();
		var _index = $(this).index();
		console.log(_index);
		$(this).parents(".tab").children('.list').eq(_index).show();

	}, function() {
		$(this).removeClass("hover");
	});
})