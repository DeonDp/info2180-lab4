window.onload =function handler() {

	var walls =document.getElementsByTagName('div');
	
	for (var i =2; i <=6; i++) {
		walls[i].setAttribute('onmouseover','testTraversal(this)');
	}
	
};

function testTraversal(element) {
	element.setAttribute('style','background-color:#ff8888');
}
