var attrConfig = {
	'id': 'loadId',
	'class': 'loadClass',
	'text': '正在加载中...'
}

var maskConfig = {
	'id': 'maskId',
	'class': 'maskClass',
	'style': 'height:' + document.body.scrollHeight + 'px'
}


function getId(n) {
	return document.getElementById(n);
}

function createNode(_config) {
	var _body = document.getElementsByTagName('body')[0];
	var _div = document.createElement('div');

	for (var i in _config) {
		_div.setAttribute(i, _config[i]);
	}

	if (_config.text != undefined) {
		_div.innerText = _config.text;
	}

	_body.appendChild(_div);
}

function delNode(id) {
	var _id = getId(id);
	_id.parentNode.removeChild(_id);
}

function callback() {
	alert('callback:数据已经加载成功！');
}

function createXHR() {
	if (typeof XMLHttpRequest != 'undefined') {
		return new XMLHttpRequest();
	} else if (typeof ActiveXObject != 'undefined') {
		if (typeof arguments.callee.activeXString != 'string') {
			var versions = ['MSXML2.XMLHttp.6.0', 'MSXML2.XMLHttp.3.0', 'MSXML2.XMLHttp'],
				i, len;
			len = versions.length;
			for (var i = 0; i < len; i++) {
				try {
					new ActiveXObject(versions[i]);
					arguments.callee.activeXString = versions[i];
					break;
				} catch (ex) {
					// 跳过
				}
			}
		}
		return new ActiveXObject(arguments.calle.activeXString);
	} else {
		throw new Error('No XHR object available.');
	}
}

getId('btn').onclick = function() {

	createNode(attrConfig);
	createNode(maskConfig);

	// $.ajax({
	// 	url: 'js/subnav.js',
	// 	type: 'GET',
	// 	dataType: 'json',
	// 	success: function(d) {
	// 		console.log(d);
	// 		setTimeout(function() {
	// 			delNode(attrConfig.id);
	// 			delNode(maskConfig.id);
	// 			callback();
	// 		}, 1000);
	// 	}
	// });

	// 创建xhr对象
	var xhr = createXHR();
	// var xhr = new XMLHttpRequest();
	xhr.open('get', 'js/subnav.js', true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
				console.log(xhr.responseText);
				// alert(d);
				setTimeout(function() {
					delNode(attrConfig.id);
					delNode(maskConfig.id);
					callback();
				}, 1000);

			} else {
				alert('加载失败');
			}
		}
	}

	xhr.send(null);
}