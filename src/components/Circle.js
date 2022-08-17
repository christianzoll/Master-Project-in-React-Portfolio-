import React from "react"
function Circle() {

var setup = function() {
    var radius = 150;
    var digitKey = document.getElementById('digitKey');
    var mainHeight = parseInt(window.getComputedStyle(digitKey).height.slice(0, -2));
    var theta = [0, (2 * (Math.PI / 15)), (4 * (Math.PI / 15)), (2 * (Math.PI / 5)), (8 * (Math.PI / 15)), (2 * (Math.PI / 3)), (4 * (Math.PI / 5)), (14 * (Math.PI / 15)), (16 * (Math.PI / 15)), (6 * (Math.PI / 5)), (4 * (Math.PI / 3)), (22 * (Math.PI / 15)), (8 * (Math.PI / 5)), (26 * (Math.PI / 15)), (28 * (Math.PI / 15))];
    var circleArray = [];
    var colors = ['red', 'green', 'purple', 'black', 'orange', 'yellow', 'maroon', 'grey', 'lightblue', 'tomato', 'pink', 'maroon', 'cyan', 'magenta', 'blue', 'chocolate', 'DarkSlateBlue'];
    for (var i = 0; i < 15; i++) {
      var circle = document.createElement('div');
      circle.className = 'circle number' + i;
      circleArray.push(circle);
      circleArray[i].posx = Math.round(radius * (Math.cos(theta[i]))) + 'px';
      circleArray[i].posy = Math.round(radius * (Math.sin(theta[i]))) + 'px';
      circleArray[i].style.position = "absolute";
      circleArray[i].style.backgroundColor = colors[i];
      circleArray[i].style.top = ((mainHeight / 2) - parseInt(circleArray[i].posy.slice(0, -2))) + 'px';
      circleArray[i].style.left = ((mainHeight / 2) + parseInt(circleArray[i].posx.slice(0, -2))) + 'px';
      digitKey.digitKeyendChild(circleArray[i]);
    }
  };
  setup();
}
window.addEventListener('load', function() {
});

export default Circle

