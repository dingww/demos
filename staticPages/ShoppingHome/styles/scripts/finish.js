// 放入购物车
$(function(){
	var $product = $("#proDetails");
	$("#cart a").click(function() {
		var pro_name = $product.find("h4:first").text();
		var pro_size = $product.find(".pro_size strong").text();
		var pro_color = $product.find('.color_change strong').text();
		var pro_num = $product.find('#num_sort option').val();
		var pro_price = $product.find('.pro_price strong').text();
		// alert(pro_price);
		// alert(pro_name);
		// alert(pro_num);

		var dialog = "感谢您的购买。<div style='font-size:12px;font-weight:400;'>您购买的产品是：" + pro_name + "；" 
					+ "尺寸是："+ pro_size + "；"
					+ "颜色是："+ pro_color + "；"
					+ "数量是："+ pro_num + "；"
					+ "总价是："+ pro_price + "元。</div>";
		$("#dialogContent").html(dialog);
		$("#basic-dialog-ok").modal();
		return false;//避免页面跳转
	});
});