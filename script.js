const timeLeft = document.getElementById('time-left')
let updateTimerDisplay = (minutes, seconds) =>{
    timeLeft.textContent = String(minutes).padStart(2, '0') +':' + String(seconds).padStart(2, '0');}

updateTimerDisplay(2,9);

