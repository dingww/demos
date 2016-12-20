$(function() {
	var timer1 = null;
	var timer2 = null;
	$("#nav li.layout").mouseover(function() {
		var _this = $(this);
		clearTimeout(timer1);
		setTimeout(function() {
			_this.children('ul').show();
		}, 100);
	});
	$("#nav li.layout").mouseout(function() {
		var _this = $(this);
		clearTimeout(timer1);
		timer1 = setTimeout(function() {
			_this.children('ul').hide();
		}, 300);
	});
	$("#nav li.sub-child").mouseover(function() {
		var _this = $(this);
		clearTimeout(timer2);
		setTimeout(function() {
			_this.children('ul').show();
		}, 100);
	});
	$("#nav li.sub-child").mouseout(function() {
		var _this = $(this);
		clearTimeout(timer2);
		timer2 = setTimeout(function() {
			_this.children('ul').hide();
		}, 300);
	});

	var headH = $("#main").position().top;
	console.log(headH);
	$(window).scroll(function(event) {
		oHeight = $(window).scrollTop();
		// console.log(oHeight);
		if (oHeight > headH) {
			$("#header").show().css({
				position: 'fixed',
				top: -15
			}).addClass('top');
			$("#header").find('a').css('color', '#777');
			$("#header .sign").find('a').css('color', '#fff');
		} else {
			$("#header").css({
				position: 'absolute',
				top: 0
			}).removeClass('top');
			$("#header h1>a,#header .welcome>a,#header .layout>a").css('color', '#fff');
		}
	});

	var flag = 0;
	$("#menu .menubtn").click(function(event) {
		if (flag == 0) {
			$(this).siblings('#nav1').show();
			flag = 1;
		} else {
			$(this).siblings('#nav1').hide();
			flag = 0;
		}
	});
	$("#menu li").hover(function() {
		$(this).css('background', '#83D3C9');
	}, function() {
		$(this).css('background', '#fff');
	});


});