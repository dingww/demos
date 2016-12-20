$.fn.dropDownMenu = function(_config) {

	var isStartMenuShow = false;

	// 创建主框架
	$('<div/>', {
			'id': 'dropDownMenu'
		})
		.html(function() {
			var _this = $(this);

			$('<div/>', {
					'class': 'startBtn'
				})
				.html(function() {
					var _this = $(this);
					$('<p/>', {
							'id': _config.startId
						})
						.html('查看全部菜单').appendTo(_this);

					$('<ul/>', {
							'id': 'startMenu'
						})
						.html(function() {
							var _this = $(this);
							getData(_this);
						})
						.appendTo(_this);
				})
				.appendTo(_this)
		})
		.appendTo($('body'));

	//绑定事件点击
	$("#startMenuBtn").on('click', function() {
		if (!isStartMenuShow) {
			$('#startMenu').show();
			isStartMenuShow = true;
		} else {
			$('#startMenu').hide();
			isStartMenuShow = false;
		}
	});

	// 获取json数据
	function getData(_this) {
		$.ajax({
			type: 'get',
			url: '../data/startMenuData.json',
			dataType: 'json',
			success: function(d) {
				createLi(d, _this); // 给获取的数据搭建渲染框架
			}
		})
	}

	// 框架函数
	function createLi(d, _this) {
		var _data = d;

		if ($.isArray(_data.subMenu)) {} else {
			return false;
		}

		for (var i = 0; i < _data.subMenu.length; i++) {
			console.log(_data.subMenu[i].name);

			if ('subMenu' in _data.subMenu[i]) {
				var liThis;

				$('<li/>', {})
					.html(function() {
						$('<p/>', {})
							.html(_data.subMenu[i].name)
							.appendTo($(this));
						$('<ul/>', {})
							.html(function() {
								liThis = $(this);
							})
							.appendTo($(this));
					})
					.appendTo(_this);

				createLi(_data.subMenu[i], liThis);
			} else {

				$('<li/>', {})
					.html(function() {
						return _data.subMenu[i].name;
					})
					.appendTo(_this);
			}
		}
	}
};