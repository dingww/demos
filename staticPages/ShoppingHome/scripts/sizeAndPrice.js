//尺寸选择
$(function(){
	$(".pro_size ul li").click(function(event) {
		$(this).addClass('cur').siblings().removeClass('cur');
		var sizeTxt = $(this).text();
		$(".pro_size strong").text(sizeTxt);
	});
});

// 数量和价格联动
$(function(){
	var $span = $(".pro_price strong");
	var price = $span.text();
	$("#num_sort").change(function(){
		var num = $(this).val();
		var amount = num*price;
		$span.text(amount);
	}).change();	
});