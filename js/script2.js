(function () {

    const form = document.querySelector('#form');

    form
        .addEventListener('submit', event => {
          event.preventDefault();
          const inpData = Array.from(
              event.target.querySelectorAll('input, select, textarea')
          )
              .reduce((accum, item) => {
                  accum[item.name] = item.value;
                  return accum;
              }, {});

          localStorage.setItem(
              'inputData',
              JSON.stringify(inpData)
          );

        })



    document
        .addEventListener(
            'DOMContentLoaded',
            () => {
                const data = JSON.parse(
                    localStorage.getItem('inputData')
                );

                setTimeout(() => {
                    form
                        .querySelectorAll('input, select')
                        .forEach(item => {
                            item.value = data[item.name]
                        })
                }, 1500)


            })

})()