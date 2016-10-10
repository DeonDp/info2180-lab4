window.onload =function handler() {

	var start =document.getElementById('start');
	var win =document.getElementById('end');
	var walls =document.querySelectorAll('div.boundary');

	start.setAttribute('onclick','init()');

	for (var i =0; i <=4; i++) {
		walls[i].setAttribute('onmouseover','testTraversal()');
	}

	win.setAttribute('onmouseover','victory()');
};

function testTraversal() {
	
	alert('You Lose!');
	var walls =document.querySelectorAll('div.boundary');

	for (var i =0; i <=4; i++) {
		walls[i].setAttribute('style','background-color:#ff8888');
	}	
}

function victory() {

	if(document.getElementById('boundary1').getAttribute('style') == 'background-color:#ff8888') {
		alert('You must go through the maze \nwithout hitting the walls!');
	}	
	else {
		alert('You Win!');
	}
}

function init() {
	var walls =document.querySelectorAll('div.boundary');

	for (var i =0; i <=4; i++) {
		walls[i].setAttribute('style','background-color: #eeeeee');
	}
}
