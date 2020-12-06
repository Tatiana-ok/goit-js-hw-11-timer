class CountdownTimer {
    constructor ({selector, targetDate}) {
        this.selector = selector,
        this.targetDate = targetDate
    }

    start() {
        this.IntervalId = setInterval(() => {
            const countDownDate = this.targetDate.getTime();
            const now = new Date().getTime();
        
            const time = countDownDate - now;
            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((time % (1000 * 60)) / 1000);
        
            const daysMarkup = document.querySelector('[data-value="days"]');
            const hoursMarkup = document.querySelector('[data-value="hours"]');
            const minsMarkup = document.querySelector('[data-value="mins"]');
            const secsMarkup = document.querySelector('[data-value="secs"]');

            daysMarkup.textContent = `${days}`;
            hoursMarkup.textContent = `${hours}`;
            minsMarkup.textContent = `${mins}`;
            secsMarkup.textContent = `${secs}`;

            if (time < 0) {
            clearInterval(x);
            }
        }, 1000);
    }
};

const countDownTimer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Dec 31, 2020'),
});

countDownTimer.start()


