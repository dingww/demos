// 原型
function Mask() {
	this.doc = document;
	this.body = this.doc.getElementsByTagName('body')[0];
}

// 原型的扩展
Mask.prototype = {
	init: function() {
		var _self = this;
		_self.getId('maskBtn').onclick = function() {
			_self.clickFn();
		}
	},
	getId: function(id) {
		var _self = this;
		return _self.doc.getElementById(id);
	},
	createEle: function(node) {
		var _self = this;
		return _self.doc.createElement(node);
	},
	setAttr: function(obj, attr) {
		var _self = this;
		for (var i in attr) {
			obj.setAttribute(i, attr[i]);
		}
	},
	addText: function(obj, text) {
		obj.innerText = text;
	},
	removeNode: function(obj, node) {
		obj.removeChild(node);
	},
	append: function(parent, child) {
		parent.appendChild(child);
	},
	clickFn: function() {
		var _self = this;
		var wH = _self.body.scrollHeight;
		var mask = _self.createEle('div');
		var content = _self.createEle('div');
		var closeBtn = _self.createEle('button');

		mask.style.height = wH;

		_self.setAttr(mask, {
			'class': 'masklayer'
		});
		_self.setAttr(content, {
			'class': 'content'
		});
		_self.setAttr(closeBtn, {
			'class': 'closeBtn'
		});

		_self.addText(content, 'Hello world!');
		_self.addText(closeBtn, '关闭');

		_self.append(this.body, mask);
		_self.append(mask, content);
		_self.append(content, closeBtn);

		closeBtn.onclick = function() {
			_self.removeNode(this.parentNode.parentNode.parentNode, mask);
		}
	}
}

new Mask().init();