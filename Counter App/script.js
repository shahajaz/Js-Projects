const counter = document.querySelector('.counter');
const minusBtn = document.querySelector('.minus-btn');
const plusBtn = document.querySelector('.plus-btn');
const changeBy = document.querySelector('.changeBy');
const resetBtn = document.querySelector('.resetBtn');

minusBtn.addEventListener('click', () => {
    const counterValue = parseInt(counter.innerText);
    const changeByValue = parseInt(changeBy.value);
    counter.innerText = counterValue - changeByValue;
});


plusBtn.addEventListener('click', () => {
    const counterValue = parseInt(counter.innerText);
    const changeByValue = parseInt(changeBy.value);
    counter.innerText = counterValue + changeByValue;
});

resetBtn.addEventListener('click', () => {  
    counter.innerText = 0;
});