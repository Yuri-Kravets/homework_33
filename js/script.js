"use strict";
(function () {

const form = document.querySelector('#form');
//let inputData = form.querySelector('input');


form
    .addEventListener('submit', event => {
            event.preventDefault();

            let inpData = Array.from(
                event.target.querySelectorAll('input, textarea')
            )
                .reduce((accum,item) => {
                    accum[item.name] = item.value;
                    return accum;
                }, {})

                console.log(inpData);
                event.target.reset();
                createElement(inpData);
            
        })

function createElement(elementData) {
   const div = document.createElement('div');
   div.classList.add('data');
   div.innerHTML = JSON.stringify(elementData);
   
   document.querySelector('.vueData').append(div);
}








})();


