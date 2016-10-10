window.onload =function handler() {

	var start =document.getElementById('start');
	var win =document.getElementById('end');
	var walls =document.querySelectorAll('div.boundary');

	start.setAttribute('onclick','init()');

	for (var i =0; i <=4; i++) {
		walls[i].setAttribute('onmouseover','testTraversal()');
	}

	win.setAttribute('onmouseover','victory()');
	endState();
};

function testTraversal() {

	var walls =document.querySelectorAll('div.boundary');
	document.getElementById('status').innerHTML ='You Lose!';
	
	for (var i =0; i <=4; i++) {
		walls[i].setAttribute('style','background-color:#ff8888');
	}	
}

function victory() {

	if(document.getElementById('boundary1').getAttribute('style') == 'background-color:#ff8888') {
		document.getElementById('status').innerHTML ='Sorry!\n<br />You must go through the maze\n<br />without hitting the walls';
	}	
	else {
		document.getElementById('status').innerHTML ='You Win!';
	}
}

function init() {

	var walls =document.querySelectorAll('div.boundary');
	document.getElementById('status').innerHTML ='Move your mouse over the "S" to begin.';

	for (var i =0; i <=4; i++) {
		walls[i].setAttribute('style','background-color: #eeeeee');
	}
}
