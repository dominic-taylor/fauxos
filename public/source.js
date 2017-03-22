document.onmousemove = moveEl;
document.onmouseup = dropEl;

var icons = document.getElementsByClassName('icon')
//fffr
var selected = null, // Object of the element to be moved
    mouseX = 0, mouseY = 0, // Stores x & y coordinates of the mouse pointer
    elemX = 0, elemY = 0; 

for (var i = 0; i < icons.length; i++) {
  icons[i].onmousedown = function () {
    grabEl(this);
    return false;
  };
  icons[i].addEventListener('dblclick',function(e){
    console.log("open folder");
  });

}

function grabEl(elem) {
    selected = elem;
    elemX = mouseX - selected.offsetLeft;
    elemY = mouseY - selected.offsetTop;
}

function moveEl(e) {
    mouseX = document.all ? window.event.clientX : e.pageX;
    mouseY = document.all ? window.event.clientY : e.pageY;
    if (selected !== null) {
        selected.style.left = (mouseX - elemX) + 'px';
        selected.style.top = (mouseY - elemY) + 'px';
    }
}

function dropEl() {
    mouseX = null;
    mouseY = null;
    selected = null;
}