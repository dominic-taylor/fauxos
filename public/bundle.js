(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

document.onmousemove = moveEl;
document.onmouseup = dropEl;
change;
var icons = document.getElementsByClassName('icon');
//fffr
var selected = null,
    // Object of the element to be moved
mouseX = 0,
    mouseY = 0,
    // Stores x & y coordinates of the mouse pointer
elemX = 0,
    elemY = 0;

for (var i = 0; i < icons.length; i++) {
    icons[i].onmousedown = function () {
        grabEl(this);
        return false;
    };
    icons[i].addEventListener('dblclick', function (e) {
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
        selected.style.left = mouseX - elemX + 'px';
        selected.style.top = mouseY - elemY + 'px';
    }
}

function dropEl() {
    mouseX = null;
    mouseY = null;
    selected = null;
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzb3VyY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLFNBQVMsV0FBVCxHQUF1QixNQUF2QjtBQUNBLFNBQVMsU0FBVCxHQUFxQixNQUFyQjtBQUNBO0FBQ0EsSUFBSSxRQUFRLFNBQVMsc0JBQVQsQ0FBZ0MsTUFBaEMsQ0FBWjtBQUNBO0FBQ0EsSUFBSSxXQUFXLElBQWY7QUFBQSxJQUFxQjtBQUNqQixTQUFTLENBRGI7QUFBQSxJQUNnQixTQUFTLENBRHpCO0FBQUEsSUFDNEI7QUFDeEIsUUFBUSxDQUZaO0FBQUEsSUFFZSxRQUFRLENBRnZCOztBQUlBLEtBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxNQUFNLE1BQTFCLEVBQWtDLEdBQWxDLEVBQXVDO0FBQ3JDLFVBQU0sQ0FBTixFQUFTLFdBQVQsR0FBdUIsWUFBWTtBQUNqQyxlQUFPLElBQVA7QUFDQSxlQUFPLEtBQVA7QUFDRCxLQUhEO0FBSUEsVUFBTSxDQUFOLEVBQVMsZ0JBQVQsQ0FBMEIsVUFBMUIsRUFBcUMsVUFBUyxDQUFULEVBQVc7QUFDOUMsZ0JBQVEsR0FBUixDQUFZLGFBQVo7QUFDRCxLQUZEO0FBSUQ7O0FBRUQsU0FBUyxNQUFULENBQWdCLElBQWhCLEVBQXNCO0FBQ2xCLGVBQVcsSUFBWDtBQUNBLFlBQVEsU0FBUyxTQUFTLFVBQTFCO0FBQ0EsWUFBUSxTQUFTLFNBQVMsU0FBMUI7QUFDSDs7QUFFRCxTQUFTLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUI7QUFDZixhQUFTLFNBQVMsR0FBVCxHQUFlLE9BQU8sS0FBUCxDQUFhLE9BQTVCLEdBQXNDLEVBQUUsS0FBakQ7QUFDQSxhQUFTLFNBQVMsR0FBVCxHQUFlLE9BQU8sS0FBUCxDQUFhLE9BQTVCLEdBQXNDLEVBQUUsS0FBakQ7QUFDQSxRQUFJLGFBQWEsSUFBakIsRUFBdUI7QUFDbkIsaUJBQVMsS0FBVCxDQUFlLElBQWYsR0FBdUIsU0FBUyxLQUFWLEdBQW1CLElBQXpDO0FBQ0EsaUJBQVMsS0FBVCxDQUFlLEdBQWYsR0FBc0IsU0FBUyxLQUFWLEdBQW1CLElBQXhDO0FBQ0g7QUFDSjs7QUFFRCxTQUFTLE1BQVQsR0FBa0I7QUFDZCxhQUFTLElBQVQ7QUFDQSxhQUFTLElBQVQ7QUFDQSxlQUFXLElBQVg7QUFDSCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG1vdmVFbDtcbmRvY3VtZW50Lm9ubW91c2V1cCA9IGRyb3BFbDtcbmNoYW5nZVxudmFyIGljb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaWNvbicpXG4vL2ZmZnJcbnZhciBzZWxlY3RlZCA9IG51bGwsIC8vIE9iamVjdCBvZiB0aGUgZWxlbWVudCB0byBiZSBtb3ZlZFxuICAgIG1vdXNlWCA9IDAsIG1vdXNlWSA9IDAsIC8vIFN0b3JlcyB4ICYgeSBjb29yZGluYXRlcyBvZiB0aGUgbW91c2UgcG9pbnRlclxuICAgIGVsZW1YID0gMCwgZWxlbVkgPSAwOyBcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBpY29ucy5sZW5ndGg7IGkrKykge1xuICBpY29uc1tpXS5vbm1vdXNlZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICBncmFiRWwodGhpcyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuICBpY29uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsZnVuY3Rpb24oZSl7XG4gICAgY29uc29sZS5sb2coXCJvcGVuIGZvbGRlclwiKTtcbiAgfSk7XG5cbn1cblxuZnVuY3Rpb24gZ3JhYkVsKGVsZW0pIHtcbiAgICBzZWxlY3RlZCA9IGVsZW07XG4gICAgZWxlbVggPSBtb3VzZVggLSBzZWxlY3RlZC5vZmZzZXRMZWZ0O1xuICAgIGVsZW1ZID0gbW91c2VZIC0gc2VsZWN0ZWQub2Zmc2V0VG9wO1xufVxuXG5mdW5jdGlvbiBtb3ZlRWwoZSkge1xuICAgIG1vdXNlWCA9IGRvY3VtZW50LmFsbCA/IHdpbmRvdy5ldmVudC5jbGllbnRYIDogZS5wYWdlWDtcbiAgICBtb3VzZVkgPSBkb2N1bWVudC5hbGwgPyB3aW5kb3cuZXZlbnQuY2xpZW50WSA6IGUucGFnZVk7XG4gICAgaWYgKHNlbGVjdGVkICE9PSBudWxsKSB7XG4gICAgICAgIHNlbGVjdGVkLnN0eWxlLmxlZnQgPSAobW91c2VYIC0gZWxlbVgpICsgJ3B4JztcbiAgICAgICAgc2VsZWN0ZWQuc3R5bGUudG9wID0gKG1vdXNlWSAtIGVsZW1ZKSArICdweCc7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcm9wRWwoKSB7XG4gICAgbW91c2VYID0gbnVsbDtcbiAgICBtb3VzZVkgPSBudWxsO1xuICAgIHNlbGVjdGVkID0gbnVsbDtcbn0iXX0=
