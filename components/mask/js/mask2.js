var doc = document;
var body = doc.getElementsByTagName('body')[0];
var maskBtn = doc.getElementById('maskBtn');

function createEle(obj, ele) {
	return obj.createElement(ele);
}

function setAttr(obj, attr) {
	for (var i in attr) {
		obj.setAttribute(i, attr[i]);
	}
}

function addText(obj, text) {
	obj.innerText = text;
}

function removeCh(obj, child) {
	obj.removeChild(child);
}

function append(parent, child) {
	parent.appendChild(child);
}

maskBtn.onclick = function() {
	var wH = doc.body.scrollHeight;
	var mask = createEle(doc, 'div');
	var content = createEle(doc, 'div');
	var closeBtn = createEle(doc, 'button');

	mask.style.height = wH;

	setAttr(mask, {
		'class': 'masklayer'
	});
	setAttr(content, {
		'class': 'content'
	});
	setAttr(closeBtn, {
		'class': 'closeBtn'
	});

	addText(content, 'Hello world!');
	addText(closeBtn, '关闭');

	append(body, mask);
	append(mask, content);
	append(content, closeBtn);

	closeBtn.onclick = function() {
		removeCh(this.parentNode.parentNode.parentNode, mask);
	}
}