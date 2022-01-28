"use strict";
(function () {

const form = document.querySelector('#form');
const inputData = form.querySelector('.inpValue');


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
        
document.querySelector('#form').addEventListener('keydown',(e) => {
    e.target.classList.remove('error');
})
document.querySelector('#form').addEventListener('focusout',({target}) => {
    if (target.value.trim() === '') {
        target.classList.add('error');
    }
})



function createElement(elementData) {
    let div = document.createElement('div');
    div.classList.add('data');
    div.innerHTML = JSON.stringify(elementData);
    document.querySelector('.vueData').append(div);   
}

})();


