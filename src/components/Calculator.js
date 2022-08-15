import React from 'react'

function Calculator() {
  document.addEventListener('DOMContentLoaded', () => {
    let digitKeys = 10;
    for (let i=0; i < digitKeys; i++) {
      
      const textNode = document.createTextNode(i); // last/deepest child

      const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text'); // first/deepest parent
      textElement.setAttribute('fill', 'white');
      textElement.setAttribute('alignment-baseline', "middle");
      textElement.setAttribute('text-anchor', "middle");
      textElement.setAttribute('x', 50.25);
      textElement.setAttribute('y', 67.25);
      textElement.setAttribute('font-size', 50);
      textElement.appendChild(textNode);  // append deepest child to first parent
      
      const circle = document.createElementNS('http://www.w3.org/2000/svg','circle') //svg elements require createElementNS() (NS = namespace) instead of createElement();
      circle.setAttribute('class', 'digitKeys');
      circle.setAttribute('cx', 50)
      circle.setAttribute('cy', 50)
      circle.setAttribute('r', 33)
      circle.setAttribute('fill', 'steel') // sibling of first parent
      console.log(circle)
      
      const circlesSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg')//svg elements require createElementNS() (NS = namespace) instead of createElement();
      circlesSVG.setAttribute('id', 'circlesSVG')
      circlesSVG.setAttribute('width', 100)
      circlesSVG.setAttribute('height', 100)
      circlesSVG.appendChild(circle);
      circlesSVG.appendChild(textElement);
      console.log(circlesSVG)
      
      
      const keyboardDiv = document.createElement('div')
      keyboardDiv.setAttribute('class', 'keyboard')
      keyboardDiv.appendChild(circlesSVG)
        console.log(keyboardDiv)
    document.body.appendChild(keyboardDiv);
    const appsJsReturnDiv = document.querySelector('.App')
      appsJsReturnDiv.appendChild(keyboardDiv)
        console.log(appsJsReturnDiv)
  }
}
)}

export default Calculator