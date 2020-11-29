class CountdownTimer {
    constructor ({selector, targetDate}) {
        this.selector = selector,
        this.targetDate = targetDate
    }
};

const countDownTimer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Dec 31, 2020'),
});

const x = setInterval(function() {
    const countDownDate = countDownTimer.targetDate.getTime();
    const now = new Date().getTime();

    const time = countDownDate - now;
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    const markup = `<div class="field"><span class="value" data-value="days">${days} </span><span class="label">Days</span></div><div class="field"><span class="value" data-value="hours">${hours} </span><span class="label">Hours</span></div><div class="field"><span class="value" data-value="mins">${mins} </span><span class="label">Minutes</span></div><div class="field"><span class="value" data-value="secs">${secs} </span><span class="label">Seconds</span></div>`

    document.getElementById("timer-1").innerHTML = markup;

    if (time < 0) {
    clearInterval(x);
    }
}, 1000);


