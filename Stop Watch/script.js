const startBtn = document.getElementById('.start');
const stopBtn = document.getElementById('.stop');
const resetBtn = document.getElementById('.reset');

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

function start(){
    startBtn.classList.add("active");
    startBtn.classList.remove("stopActive");
}

function stop(){
    stopBtn.classList.add("active");
    startBtn.classList.remove("stopActive");
}

function reset(){
    resetBtn.classList.add("active");
    resetBtn.classList.remove("stopActive");
}