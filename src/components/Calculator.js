import React from 'react'

function Calculator() {
  document.addEventListener('DOMContentLoaded', () => {
    let digits = 10;
    for (let i=0; i < digits; i++) {
      
      const textNode = document.createTextNode(i); // last/deepest child

      var textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text'); // first/deepest parent
      textElement.setAttribute('fill', 'white');
      textElement.setAttribute('alignment-baseline', "middle");
      textElement.setAttribute('text-anchor', "middle");
      textElement.setAttribute('x', 50.25);
      textElement.setAttribute('y', 67.25);
      textElement.setAttribute('font-size', 50);
      textElement.appendChild(textNode);  // append deepest child to first parent
      
      var circle = document.createElementNS('http://www.w3.org/2000/svg','circle') //svg elements require createElementNS() (NS = namespace) instead of createElement();
      circle.setAttribute('class', 'digitCircle');
      circle.setAttribute('cx', 50)
      circle.setAttribute('cy', 50)
      circle.setAttribute('r', 33)
      circle.setAttribute('fill', 'steel') // sibling of first parent

      
      var digitSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg')//svg elements require createElementNS() (NS = namespace) instead of createElement();
      digitSVG.setAttribute('id', 'digitSVG')
      digitSVG.setAttribute('width', 100)
      digitSVG.setAttribute('height', 100)
      digitSVG.appendChild(circle);
      digitSVG.appendChild(textElement);

      var digitKey = document.createElement('div')
      digitKey.setAttribute('class', 'digitKey')
      digitKey.appendChild(digitSVG)

      var App = document.querySelector('.App')
      App.appendChild(digitKey)
      
    } // end of for loop
    console.log(typeof textElement)
    console.log(typeof circle)
    console.log(typeof digitSVG)
    console.log(typeof digitKey)
    console.log(typeof App)
  } // end of .addEventListener function parameter

  )} // end of .addEventListener function definition
  

export default Calculator