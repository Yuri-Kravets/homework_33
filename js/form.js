'use strict';

(function () {

    const form  = document.getElementById('form');


    form.addEventListener('submit', event => {
        event.preventDefault();
        const obj = {};
        const inputs = event.target.querySelectorAll('input');

        inputs.forEach(input => {
            obj[input.name] = input.value;
        })

        createElement(obj);
        event.target.reset();
    })


    function createElement(elementData) {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML  = JSON.stringify(elementData)

        document.querySelector('.card-content')
            .append(
                div
            );
    }



})()