import React from 'react'


function Calculator() {
  document.addEventListener('DOMContentLoaded', () => {
    const circle = document.createElementNS('http://www.w3.org/2000/svg','circle')
      circle.setAttribute('cx', 100)
      circle.setAttribute('cy', 100)
      circle.setAttribute('r', 33)
      circle.setAttribute('fill', 'blue')
        console.log(circle)
    const circlesSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      circlesSVG.setAttribute('id', 'circlesSVG')
      circlesSVG.setAttribute('width', 100)
      circlesSVG.setAttribute('height', 100)
      circlesSVG.appendChild(circle)
        console.log(circlesSVG)
    const keyboardDiv = document.createElement('div')
      keyboardDiv.setAttribute('class', 'keyboard')
      keyboardDiv.appendChild(circlesSVG)
        console.log(keyboardDiv)
    document.body.appendChild(keyboardDiv);
    const appsJsReturnDiv = document.querySelector('.App')
      appsJsReturnDiv.appendChild(keyboardDiv)
        console.log(appsJsReturnDiv)
  },

    //create board
    // let cxLocation = document.querySelectorAll('cx');
    // let cyLocation = document.querySelectorAll('cy');
    // let numbers = 10;
    // for (let i = 0; i < numbers; i++) {
    //     const circlesSVG = document.createElement('svg')
    //     circlesSVG.setAttribute('id', i)
    //     circlesSVG.setAttribute('width', 100)
    //     circlesSVG.setAttribute('height', 100)
    //     const circle = document.createElement('circle')
    //     circle.setAttribute('id', 'circle')
    //     circle.setAttribute('cx', 100/* relative to previous */)
    //     circle.setAttribute('cy', 100/* relative to previous */)
    //     circle.setAttribute('r', 25)
    //     circle.setAttribute('fill', 'yellow')
    //     circlesSVG.appendChild('circle')
    // }
  
)}

export default Calculator