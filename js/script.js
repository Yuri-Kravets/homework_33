"use strict";
(function () {

const form = document.querySelector('#form');

//let inputData = form.querySelector('.bgcolor');

// if (inputData.value ==='') {
//     inputData.style.backgroundColor = 'red';
// } else {
//     inputData.style.backgroundColor = 'white';
// }

form
    .addEventListener('submit', event => {
            event.preventDefault();
            let error = validateForm(form);
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

// inputData.onblur = function() {
//     if (inputData.value ==='') {
//         this.classList.add('bgcolor')
//     }  inputData.classList.remove('bgcolor');
// }

function validateForm (form) {

}






})();


