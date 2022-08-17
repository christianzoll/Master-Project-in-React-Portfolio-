import React from "react"
function Circle() {
// Hold a global reference to the div#main element.  Initially assign it ... somewhere useful :)
var main = document.getElementById('main');
var circleArray = [];

// Move a circle based on the distance of the approaching mouse
var moveCircle = function(circle, dx, dy) {

};

// Look at all the circle elements, and figure out if any of them have to move.
var checkMove = function() {

};
var setup = function() {
  for (var i = 0; i < 15; i++) {
    //create element, add it to the array, and assign it's coordinates trigonometrically.
    //Then add it to the "main" div
    var circle = document.createElement('div');
    circle.className = 'circle number' + i;
    circleArray.push(circle);
    circleArray[i].posx = Math.round((150 * Math.cos(i * (2 * Math.PI / 15)))) + 'px';
    circleArray[i].posy = Math.round((150 * Math.sin(i * (2 * Math.PI / 15)))) + 'px';
    circleArray[i].style.position = "relative";
    circleArray[i].style.top = circleArray[i].posy;
    circleArray[i].style.left = circleArray[i].posx;
    main.appendChild(circleArray[i]);
  }
};
setup();
}
window.addEventListener('load', function() {
});


export default Circle

