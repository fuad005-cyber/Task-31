// const btnMinus = document.querySelector('[data-action="minus"]');
// const btnPlus = document.querySelector('[data-action="plus"]');
// const counter = document.querySelector('[data-counter]');

// btnMinus.addEventListener('click',function() {
//     if (+counter.innerText > 1) {
//         counter.innerText = --counter.innerText
//     }
//     else {
//         console.log('Minus Click');
//     }
    
// })
// btnPlus.addEventListener('click',function() {
//     if (++counter.innerText < 1) {
//         counter.innerText = ++counter.innerText 
//     }
//     else {
//         console.log("Plus Click");
//     }
    
// })

window.addEventListener('click', function (znak) {
if (znak.target.dataset.action === 'plus') { 
    const counterWrapper = znak.target.closest('.counter-wrapper');
    const counter = counterWrapper.querySelector('[data-counter]');
    counter.innerText = ++counter.innerText 
}
if (znak.target.dataset.action === 'minus') { 
    const counterWrapper = znak.target.closest('.counter-wrapper');
    const counter = counterWrapper.querySelector('[data-counter]');
    if (+counter.innerText > 1) {
        counter.innerText = --counter.innerText
    }
}

})
