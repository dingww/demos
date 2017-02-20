$.extend({

	centralize: function(obj) {
		var win = $(window);

		obj.css({
			'left': win.width() > obj.width() ? (win.width() - obj.width()) / 2 : 0,
			'top': win.height() > obj.height() ? (win.height() - obj.height()) / 2 : 0
		});

		win.on('resize', function() {
			obj.css({
				'left': win.width() > obj.width() ? (win.width() - obj.width()) / 2 : 0,
				'top': win.height() > obj.height() ? (win.height() - obj.height()) / 2 : 0
			});
		});
	},

	resize: function(trigger, toResize, minWidth, maxWidth, callBack) {
		var body = $('body');
		var doc = $(document);
		var par = toResize.parent();

		body.delegate(trigger, 'mousedown', function(event) {
			var distX = event.pageX - toResize.width();

			doc.on('mousemove', function(event) {
				var chgX = event.pageX - toResize.width();

				doc.on('mousemove', function(event) {
					//w为鼠标移动改变视频尺寸时的视频宽度
					var w = event.pageX - chgX;
					w = w < minWidth ? minWidth : w = w > maxWidth ? maxWidth : w;
					toResize.css('width', w);

					if (callBack) {
						callBack();
					}
				});

				doc.on('mouseup', function() {
					doc.off();
				})
			});
		});
	},

	drag: function(trigger, toMove, axis, limitTo, callBack) {
		var body = $('body');
		var doc = $(document);
		toMove = toMove ? $(toMove) : $(trigger);

		body.delegate(trigger, 'mousedown', function(event) {
			var posX = toMove.position().left;
			var posY = toMove.position().top;
			var chgX = event.pageX - posX;
			var chgY = event.pageY - posY;

			doc.on('mousemove', function(event) {
				var L = event.pageX - chgX;
				var T = event.pageY - chgY;

				if (limitTo) {
					var limit = $(limitTo);
					var minX = limit.position().left;
					var maxX = minX + limit.width() - toMove.width();
					var minY = limit.position().top;
					var maxY = minY + limit.height() - toMove.height();

					L = L < minX ? minX : L = L > maxX ? maxX : L;
					T = T < minY ? minY : T = T > maxY ? maxY : T;
					L = axis == 'y' ? posX : L;
					T = axis == 'x' ? posY : T;
				}

				toMove.css({
					'left': L,
					'top': T
				});

				if (callBack) {
					callBack();
				}
			});

			doc.on('mouseup', function() {
				doc.off();
			});
		});
	},

	formateTime: function(seconds) {

		seconds = parseInt(seconds);

		var H = $.padZero(Math.floor(seconds / 3600));
		var M = $.padZero(Math.floor(seconds % 3600 / 60));
		var S = $.padZero(Math.floor(seconds % 60));

		return H + ':' + M + ':' + S;
	},

	padZero: function(num) {
		num = num <= 9 ? '0' + num : '' + num;
		return num;
	}

})