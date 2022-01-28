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








// inputData.onblur = function() {
//     if (inputData.value ==='') {
//         this.classList.add('bgcolor')
//     }  inputData.classList.remove('bgcolor');
// }

// function validateForm (form) {
//     let error = 0;
//     let formReq = document.querySelectorAll('_req');

//     for (let i = 0;i < formReq.length;i++) {
//         const input = formReq[i];
//         formRemoveError(input);
//         if (input.classList.contains('_req')) {
//             formAddError(input);
//             error++;
//         }
//     }
// }
// function formAddError(input) {
//     input.parentElement.classList.add('_error');
//     input.classList.add('_error');
// }

// function formRemoveError(input) {
//     input.parentElement.classList.remove('_error');
//     input.classList.remove('_error');
//}






})();


