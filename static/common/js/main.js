set100vh()
window.onresize = function(){
	set100vh()
}

function set100vh(){
	document.documentElement.style.setProperty('--100vh', window.innerHeight + 'px' )
}