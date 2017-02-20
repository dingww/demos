$.fn.colorBoard = function(_config) {
	//创建节点
	var $div = $('<div/>', {
		'id': _config.id
	});
	$div.appendTo('body');

	var item = '';
	for (var n = 0; n < _config.class.length; n++) {
		item += '<ul class="' + _config.class[n] + '">';
		for (var i = 0; i < _config.len0[n]; i++) {
			item += '<li class="clr-box"><ul class="colors item-' + (i + 1) + '">';
			for (var j = 0; j < _config.len1[n]; j++) {
				item += '<li class="color-' + (j + 1) + '"></li>';
			}
			item += '</ul><div class="like"><span class="icon"><img src="images/love.png"></span><span class="count">0</span></div></li>';
		}
		item += '</ul>';
	}

	$div.append(item);

	$('.clr-box').mouseover(function(event) {
		$(this).addClass('clr-hover');
	});
	$('.clr-box').mouseout(function(event) {
		$(this).removeClass('clr-hover');
	});

	//鼠标滑过显示色值
	$(".colors li").mouseover(function(event) {
		var _this = $(this);
		var bgc = getBackgroundColor(_this, 'background-color');
		$(this).addClass('hover');
		$(this).html(bgc);
	});
	$(".colors li").mouseout(function(event) {
		$(this).removeClass('hover');
		$(this).html("");
	});

	// 点赞
	var flag0 = 0;
	$(".like img").click(function(event) {
		var num = $(this).parent(".icon").siblings('.count').text();
		var src = $(this).attr('src').split("/")[1];
		if (flag0 == 0) {
			if (src === "loved.png") {
				flag0 = 1;
				like($(this), flag0);
				num = count(num, flag0);
				$(this).parent(".icon").siblings('.count').html(num);
			} else {
				flag0 = 0;
				like($(this), flag0);
				num = count(num, flag0);
				$(this).parent(".icon").siblings('.count').html(num);
			}
		} else {
			if (src === "love.png") {
				flag0 = 0;
				like($(this), flag0);
				num = count(num, flag0);
				$(this).parent(".icon").siblings('.count').html(num);
			} else {
				flag0 = 1;
				like($(this), flag0);
				num = count(num, flag0);
				$(this).parent(".icon").siblings('.count').html(num);
			}
		}
		// console.log(flag0);

	});

	function like(obj, flag) {
		if (flag == 0) {
			obj.attr('src', 'images/loved.png');
		} else {
			obj.attr('src', 'images/love.png');
		}
	}

	function count(count0, flag) {
		if (flag == 0) {
			count0++;
		} else {
			count0--;
		}
		return count0;
	}

	function getBackgroundColor(obj, property) {
		var rgb = obj.css(property);
		if (rgb >= 0) {
			return rgb;
		} else {
			rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
			rgb = "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
			return rgb;
		}
	}

	function hex(x) {
		return ("0" + parseInt(x).toString(16)).slice(-2);
	}

}