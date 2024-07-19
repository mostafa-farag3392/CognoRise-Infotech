let timerInterval;
let remainingTime;
let isPaused = false;

const alarmSound = document.getElementById('alarm-sound');

function formatTime(time) {
    return time.toString().padStart(2, '0');
}

function updateTimerDisplay(hours, minutes, seconds) {
    document.getElementById('timer').textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function calculateRemainingTime(hours, minutes, seconds) {
    return (hours * 3600) + (minutes * 60) + seconds;
}

function startTimer() {
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;
    
    remainingTime = calculateRemainingTime(hours, minutes, seconds);

    if (remainingTime <= 0) return;

    document.getElementById('start').classList.add('d-none');
    document.getElementById('pause').classList.remove('d-none');

    timerInterval = setInterval(() => {
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            document.getElementById('timer').textContent = 'Time\'s up!';
            document.getElementById('pause').classList.add('d-none');
            alarmSound.play(); // Play the alarm sound
            return;
        }

        remainingTime--;

        const hours = Math.floor(remainingTime / 3600);
        const minutes = Math.floor((remainingTime % 3600) / 60);
        const seconds = remainingTime % 60;

        updateTimerDisplay(hours, minutes, seconds);
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
    isPaused = true;
    document.getElementById('pause').classList.add('d-none');
    document.getElementById('resume').classList.remove('d-none');
}

function resumeTimer() {
    isPaused = false;
    document.getElementById('resume').classList.add('d-none');
    document.getElementById('pause').classList.remove('d-none');
    startTimer();
}

function resetTimer() {
    clearInterval(timerInterval);
    document.getElementById('timer').textContent = '00:00:00';
    document.getElementById('hours').value = '';
    document.getElementById('minutes').value = '';
    document.getElementById('seconds').value = '';
    document.getElementById('start').classList.remove('d-none');
    document.getElementById('pause').classList.add('d-none');
    document.getElementById('resume').classList.add('d-none');
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('resume').addEventListener('click', resumeTimer);
document.getElementById('reset').addEventListener('click', resetTimer);

