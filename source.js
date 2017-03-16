// var icons = document.getElementsByClassName('icon')
// for (var i = 0; i < icons.length; i++) {
// 	icons[i].addEventListener('onmousedown', function (e) {
// 		test(event)
// 	}, false)
// }

// document.addEventListener('mousedown', function (e) {

// 	test(event)
// 	// e.preventDefault();
// }, false)

// function test(e) {
// 	console.log(e.target)
// 	// if(e.target.className == 'icon') {
// 	// e.pageX
// 	// e.pageY
// 	    document.addEventListener ("mousedown" , dragIcon , false);

// 	console.log('you clicked alright')
// 	console.log(e.target.style.left)

// 	//while mouseDown get mouse x and y
//  // }else{
//  // 	return
//  // }
// 	//set e.left and e/top to mouse x y
	
// }
// function dragIcon(e) {
// 	e.target.style.left = e.pageX+'px';
// 	e.target.style.top = e.pageY+'px';

document.getElementById('ball2').addEventListener('onmousedown', function() {
  this.style.position = 'absolute'

  var self = this

  document.onmousemove = function(e) {
    e = e || event
    fixPageXY(e) 
   
    self.style.left = e.pageX-25+'px' 
    self.style.top = e.pageY-25+'px' 
  }
  this.onmouseup = function() {
    document.onmousemove = null
  }
}

document.getElementById('ball2').ondragstart = function() { return false }