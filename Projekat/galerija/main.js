var current = document.getElementById('current');
var slike = document.getElementsByClassName('thumb');

for(var i=0;i<slike.length;i++){
	slike[i].addEventListener('click',display);
}

function display(){
	var sl = this.getAttribute('src'); //this. = sluzi kao mamac
	current.setAttribute('src',sl);
}