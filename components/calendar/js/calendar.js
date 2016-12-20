$.fn.calendar = function(_config) {

	var mdate = new Date();
	var y = mdate.getFullYear();
	var m = mdate.getMonth() + 1; //getMonth()方法得到的月份是从0开始的，故加1
	var d = mdate.getDate();
	// console.log(m);
	var week = ["日", "一", "二", "三", "四", "五", "六"];

	// 判断是否为闰年
	function isLeap(year) {
		return (year % 100 == 0 ? res = (year % 400 == 0 ? 1 : 0) : res = (year % 4 == 0 ? 1 : 0));
	}

	// 日历的外容器创建
	var $div = $('<div/>', {
		'id': _config.id
	});
	$div.appendTo('body').draggable();

	// 创建日期控制的dom
	var control = '<div class="control"><div class="sele-year"><span><span>' + y + '年</span><img src="images/down.png" /></span></div><div class="sele-month"><img src="images/left.png" id="left"/><span><span>' + m + '月</span><img src="images/down.png" /></span><img src="images/right.png" id="right" /></div>' + '<div class="turnback">返回今天</div></div>';
	$div.append(control);

	// 创建日历主体的dom
	var tab = '<table></table>';
	$div.append(tab);

	// 创建年份下拉菜单
	var listY = '<ul>';
	for (var i = 1990; i <= 2030; i++) {
		listY += '<li>' + i + '年' + '</li>';
	}
	listY += '</ul>';
	$('.sele-year').append(listY);

	// 创建月份下拉菜单
	var listM = '<ul>';
	for (var i = 1; i <= 12; i++) {
		listM += '<li>' + i + '月' + '</li>';
	}
	listM += '</ul>';
	$('.sele-month').append(listM);

	// 年份下拉菜单显示与隐藏
	var flag = 0;
	$('.sele-year>span').click(function(event) {
		if (flag == 0) {
			$(this).siblings('ul').show();
			flag = 1;
		} else {
			$(this).siblings('ul').hide();
			flag = 0;
		}
		event.stopPropagation(); /*阻止事件冒泡*/
	});

	// 月份下拉菜单显示与隐藏	
	$('.sele-month>span').click(function(event) {
		if (flag == 0) {
			$(this).siblings('ul').show();
			flag = 1;
		} else {
			$(this).siblings('ul').hide();
			flag = 0;
		}
		event.stopPropagation();
	});

	// 鼠标点击ul标签之外的地方下拉菜单隐藏
	$('body').click(function(event) {
		$('ul').hide();
		flag = 0;
	});

	// 下拉菜单选择年份
	$('.sele-year ul li').click(function(event) {
		$(this).parent().siblings('span').children('span').html($(this).html());
		var mth = parseInt($('.sele-month span span').html());
		var year = parseInt($('.sele-year span span').html());
		calendarMain(year, mth);
	});

	// 下拉菜单选择月份
	$('.sele-month ul li').click(function(event) {
		$(this).parent().siblings('span').children('span').html($(this).html());
		var mth = parseInt($('.sele-month span span').html());
		var year = parseInt($('.sele-year span span').html());
		calendarMain(year, mth);
	});

	// 鼠标滑过下拉菜单改变背景颜色
	$('.sele-year ul li').mouseover(function(event) {
		$(this).css('background', '#eee');
	});
	$('.sele-year ul li').mouseout(function(event) {
		$(this).css('background', '#fff');
	});

	$('.sele-month ul li').mouseover(function(event) {
		$(this).css('background', '#eee');
	});
	$('.sele-month ul li').mouseout(function(event) {
		$(this).css('background', '#fff');
	});

	// 点击左按钮选择月份
	$("#left").click(function(event) {
		var mth = parseInt($(this).siblings('span').children('span').html());
		console.log(mth);
		if (mth > 1) {
			mth--;
		} else {
			mth = 1;
		}
		$(this).siblings('span').children('span').html(mth + "月");
		var year = parseInt($('.sele-year span span').html());
		calendarMain(year, mth);
	});
	// 点击右按钮选择月份
	$("#right").click(function(event) {
		var mth = parseInt($(this).siblings('span').children('span').html());
		console.log(mth);
		if (mth < 12) {
			mth++;
		} else {
			mth = 12;
		}
		$(this).siblings('span').children('span').html(mth + "月");
		var year = parseInt($('.sele-year span span').html());
		calendarMain(year, mth);
	});

	// 返回今天
	$(".control>div:last-child").click(function() {
		$('.sele-year span span').html(y + '年');
		$('.sele-month span span').html(m + '月');
		calendarMain(y, m);
	});

	// 鼠标滑过日期控制按钮边框颜色改变
	$('.control>div').mouseover(function(event) {
		$(this).css({
			border: '1px solid #fcc',
			'box-shadow': '0 0 2px 0 #fbb'
		});
	});
	$('.control>div').mouseout(function(event) {
		$(this).css({
			border: '1px solid #ddd',
			'box-shadow': 'none'
		});

	});

	//默认显示今天的日期
	calendarMain(y, m);

	// ========日历显示函数========
	function calendarMain(year, month) {

		var months = [31, 28 + isLeap(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		var d1 = new Date(year, (month - 1), 1);
		var w = d1.getDay();

		// 日历星期标志
		var item = '<tr>';
		var len = week.length;
		for (var n = 0; n < len; n++) {
			item += '<th>' + week[n] + '</th>';
		}
		item += '</tr>';

		// 日历日期显示
		for (var i = 0; i < 6; i++) {
			item += '<tr>';
			for (var j = 0; j < len; j++) {
				var k = i * 7 + j - w + 1;
				// console.log(k);
				if (k > 0 && k <= months[month - 1]) { //k在当月日期之内时
					if (k == d && month == m && year == y) {
						item += '<td class="today">' + k + '</td>'; //当天加红色背景
					} else {
						item += '<td class="themonth">' + k + '</td>'; //当月字体颜色加深
					}
				} else if (k <= 0) { //k小于0时
					if (month > 1) {
						item += '<td>' + (months[month - 2] - w + 1 + j) + '</td>';
					} else {
						item += '<td>' + (months[12 + (month - 2)] - w + 1 + j) + '</td>';
					}
				} else { // k大于当月日期时
					item += '<td>' + (k - months[month - 1]) + '</td>';
				}
			}
			item += '</tr>';
		}

		$('table').html(item);

		// 周末日期标红
		$('table tr td:first-child,table tr th:first-child').css('color', '#f66');
		$('table tr td:last-child,table tr th:last-child').css('color', '#f66');
	}
}