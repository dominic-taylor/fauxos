var icons = document.getElementsByClassName('icon')
for (var i = 0; i < icons.length; i++) {
	icons[i].addEventListener('click', test)
}

function test() {
	console.log('you clicked alright')
}