var doc = document;
var body = doc.getElementsByTagName('body')[0];
var maskBtn = doc.getElementById('maskBtn');

maskBtn.onclick = function() {
	var wH = doc.body.scrollHeight;
	console.log(wH);

	var mask = doc.createElement('div');
	mask.style.height = wH;

	var closeBtn = doc.createElement('button');
	var content = doc.createElement('div');

	mask.setAttribute('class', 'masklayer');
	closeBtn.setAttribute('class', 'closeBtn');
	content.setAttribute('class', 'content');

	content.innerText = 'Hello world!';
	closeBtn.innerText = '关闭';


	closeBtn.onclick = function() {
		this.parentNode.parentNode.parentNode.removeChild(mask);
		// this.parentNode.removeChild(this);
	}
	body.appendChild(mask);
	mask.appendChild(content);
	content.appendChild(closeBtn);
}