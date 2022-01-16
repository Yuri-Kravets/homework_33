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
            
        })









})();


