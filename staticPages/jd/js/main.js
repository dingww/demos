// 导航
$(function() {
	// 头部导航
	$("#nav #position li").mouseover(function() {
		$(this).children('.downmenu').show();
		$("#nav .position").css({
			'background': '#fff',
			"border": "1px solid #ddd",
			"border-bottom": "none"
		});
		$("#position .downmenu li a").click(function(event) {
			var addr = $(this).html();
			var hrf = $(this).attr("href");
			// console.log(hrf);
			$("#position .position a").html(addr);
			$("#position .position a").attr('href', hrf);
		});
	});
	$("#nav #position li").mouseout(function() {
		$("#nav .position").css({
			'background': '#E3E4E5',
			"border": "none",
		});
		$(this).children('.downmenu').hide();
	});
	$("#user .down").mouseover(function(event) {
		$(this).css("background", '#fff');
		$(this).children('.downmenu').show();
	});
	$("#user .down").mouseout(function(event) {
		$(this).css("background", '#E3E4E5');
		$(this).children('.downmenu').hide();
	});
	// 购物车
	$("#header .cart").mouseover(function(event) {
		$(this).children('.cart-content').show();
	});
	$("#header .cart").mouseout(function(event) {
		$(this).children('.cart-content').hide();
	});
	// 左导航
	$("#banner .lside .menu>li").mouseover(function(event) {
		$("#banner .lside .image").hide();
		$(this).css("background", '#ccc');
		$(this).children('.image').show();
	});
	$("#banner .lside .menu>li").mouseout(function(event) {
		$(this).css("background", '#6C6669');
		$("#banner .lside .image").hide();
	});

});

// 中间轮播
$(function() {
	$("#banner .banner .container").mouseover(function(event) {
		$(this).children('.arrow').show();
	});
	$("#banner .banner .container").mouseout(function(event) {
		$(this).children('.arrow').hide();
	});

	// 点击向左箭头
	$("#banner .banner .left").click(function(event) {
		Left();
	});
	// 点击向右箭头
	$("#banner .banner .right").click(function(event) {
		Right();
		// console.log(i);
	});
	// 自动轮播
	setInterval(Right, 3000); //注意此处Right函数的调用
	// 索引的mouseover事件
	$("#banner .banner .btn li").mouseover(function(event) {
		$("#banner .banner .btn li").css({
			'background': '#666'
		});
		$("#banner .banner .images li").hide();
		var index = $(this).index();
		$("#banner .banner .images li:eq(" + index + ")").show();
		$(this).css({
			'background': '#E01222'
		});
		// console.log(index);
	});

	var len = $("#banner .banner .images li").length;
	var i = 0;

	function Left() {
		$("#banner .banner .btn li").css({
			'background': '#666'
		});
		$("#banner .banner .images li").hide();
		if (i > 0) {
			i--;
		} else {
			i = len - 1;
		}
		$("#banner .banner .images li:eq(" + i + ")").show();
		$("#banner .banner .btn li:eq(" + i + ")").css({
			'background': '#E01222'
		});
	}

	function Right() {
		$("#banner .banner .btn li").css({
			'background': '#666'
		});
		$("#banner .banner .images li").hide();
		if (i < len - 1) {
			i++;
		} else {
			i = 0;
		}
		$("#banner .banner .images li:eq(" + i + ")").show();
		$("#banner .banner .btn li:eq(" + i + ")").css({
			'background': '#E01222'
		});
	}
});

// tab
$(function() {
	$(".tab .tabtitle li").not('.nonews').mouseover(function() {
		var index = $(this).index();
		$(".tab .news ul").hide();
		$(this).css({
			"border-bottom": '2px solid #E01222'
		});
		$(".tab .news ul:eq(" + index + ")").show();
	});
	$(".tab .tabtitle li").not('.nonews').mouseout(function() {
		var index = $(this).index();
		$(this).css({
			"border-bottom": 'none'
		});
		$(".tab .news ul:eq(" + index + ")").show();
	});
});

// 左边固定导航控制
$(function() {

	var sH = $("#content").position().top;
	var qH = $("#content .quality").position().top + sH;
	var lH = $("#content .live").position().top + sH;
	var eH = $("#content .electronics").position().top + sH;
	var dH = $("#content .digital").position().top + sH;
	var cH = $("#content .3C").position().top + sH;
	var aH = $("#content .eating").position().top + sH;
	var mH = $("#content .maternal").position().top + sH;
	var bH = $("#content .book").position().top + sH;
	var vH = $("#content .virtual").position().top + sH;
	var nH = $("#content .notenough").position().top + sH;
	var topH = $("#content footer").position().top + sH;
	var topArr = [qH, lH, eH, dH, cH, aH, mH, bH, vH, nH, topH];
	console.log(topArr);
	// console.log(sH);
	// console.log(qH);
	$(window).scroll(function(event) {
		oH = $(window).scrollTop();
		// console.log(oH);
		if (oH >= qH) {
			$("#fixedheader").show();
		} else {
			$("#fixedheader").hide();
		}
		if (oH >= qH) {
			$("#left").show();
		} else {
			$("#left").hide();
		}
		if (oH >= qH && oH < lH) {
			$("#left li:eq(0)").css('background', '#E01222');
		} else {
			$("#left li:eq(0)").css('background', '#918888');
		}
		if (oH >= lH && oH < eH) {
			$("#left li:eq(1)").css('background', '#E01222');
		} else {
			$("#left li:eq(1)").css('background', '#918888');
		}
		if (oH >= eH && oH < dH) {
			$("#left li:eq(2)").css('background', '#E01222');
		} else {
			$("#left li:eq(2)").css('background', '#918888');
		}
		if (oH >= dH && oH < cH) {
			$("#left li:eq(3)").css('background', '#E01222');
		} else {
			$("#left li:eq(3)").css('background', '#918888');
		}
		if (oH >= cH && oH < aH) {
			$("#left li:eq(4)").css('background', '#E01222');
		} else {
			$("#left li:eq(4)").css('background', '#918888');
		}
		if (oH >= aH && oH < mH) {
			$("#left li:eq(5)").css('background', '#E01222');
		} else {
			$("#left li:eq(5)").css('background', '#918888');
		}
		if (oH >= mH && oH < bH) {
			$("#left li:eq(6)").css('background', '#E01222');
		} else {
			$("#left li:eq(6)").css('background', '#918888');
		}
		if (oH >= bH && oH < vH) {
			$("#left li:eq(7)").css('background', '#E01222');
		} else {
			$("#left li:eq(7)").css('background', '#918888');
		}
		if (oH >= vH && oH < nH) {
			$("#left li:eq(8)").css('background', '#E01222');
		} else {
			$("#left li:eq(8)").css('background', '#918888');
		}
		if (oH >= nH && oH < topH) {
			$("#left li:eq(9)").css('background', '#E01222');
		} else {
			$("#left li:eq(9)").css('background', '#918888');
		}

		var length = $("#left li").length;
		// console.log(length);
		$("#left li").mouseover(function(event) {
			$(this).css('background', '#E01222');
		});
		$("#left li").mouseout(function(event) {
			var lIndex = $(this).index();
			var sTop = document.body.scrollTop || document.documentElement.scrollTop;
			var preH = $("#content .typing:eq(" + lIndex + ")").position().top + sH;

			if (lIndex < (length - 1)) {
				var nextH = $("#content .typing:eq(" + (lIndex + 1) + ")").position().top + sH;
			} else {
				var nextH = $("#content .typing:eq(" + (length - 1) + ")").position().top + sH;
			}

			// console.log(sTop);
			// console.log(preH);
			// console.log(nextH);

			if (sTop >= preH && sTop < nextH) {
				$(this).css('background', '#E01222');
			} else {
				$(this).css('background', '#918888');
			}
		});

		$("#left li").click(function(event) {
			var lIndex = $(this).index();
			if (lIndex < length - 1) {

				$(window).scrollTop(topArr[lIndex]);
				// console.log(topArr[lIndex]);
				console.log(oH);

			} else {
				returnTop();
			}
		});

		var sdelay = 0;

		function returnTop() {
			window.scrollBy(0, -1000); //Only for y vertical-axis
			console.log(document.body.scrollTop);
			if (document.body.scrollTop > 0) {
				sdelay = setTimeout('returnTop()', 50);

			}
		}
	});
})
$(function() {
	$("#right li").mouseover(function(event) {		
		$(this).children('.tips').show();		
	});
	$("#right li").mouseout(function(event) {
		
		$(this).children('.tips').hide();
	});


})