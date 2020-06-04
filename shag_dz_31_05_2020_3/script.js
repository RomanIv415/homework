(function(){

    const targetDate = new Date(2020, 6, 27, 0, 0, 0, 0);
    const startDate = new Date(2020, 0, 1, 0, 0, 0, 0);

    const maxDays = Math.floor( (targetDate - startDate) / (24*3600*1000) );

    const days = document.querySelector('#countdown-days>div');
    const daysBG = document.querySelector('#countdown-days>p');
    const hours = document.querySelector('#countdown-hours>div');
    const hoursBG = document.querySelector('#countdown-hours>p');
    const minutes = document.querySelector('#countdown-minutes>div');
    const minutesBG = document.querySelector('#countdown-minutes>p');
    const seconds = document.querySelector('#countdown-seconds>div');
    const secondsBG = document.querySelector('#countdown-seconds>p');
    const daystext = document.querySelector('#days');
    const hourstext = document.querySelector('#hours');
    const minutestext = document.querySelector('#minutes');
    const secondstext = document.querySelector('#seconds');
    function twoending (numberr) {
        let numEnd = numberr - (Math.floor(numberr / 100) * 100);
        return numEnd;
    }
    function ending (number) {
        if (twoending(number) > 10 && twoending(number) < 20) {
            let numEnd = 7;
            return numEnd;
        }
        else {
            let numEnd = number - (Math.floor(number / 10) * 10);
            return numEnd;
        }
    }

    function countdown() {
        let delta = Math.round( (targetDate - new Date()) / 1000 );
        
        const d = Math.floor( delta / (24*3600) );

        delta -= d*24*3600;
        const h = Math.floor( delta / 3600 );

        delta -= h*3600;
        const m = Math.floor( delta / 60 );

        s = delta - m*60
    
        days.textContent = d;
        hours.textContent = h<10 ? '0' + h : h;
        minutes.textContent = m<10 ? '0' + m : m;
        seconds.textContent = s<10 ? '0' + s : s;
        
        daysBG.style.bottom = `${-d*100/maxDays}%`;
        hoursBG.style.bottom = `${-h*100/24}%`;
        minutesBG.style.bottom = `${-m*100/60}%`;
        secondsBG.style.bottom = `${-s*100/60}%`;

        if (ending(d) == 1){
            daystext.textContent = 'День';
        }
        else if (ending(d) < 5 && ending(d) > 1) {
            daystext.textContent = 'Дня';
        }
        else {
                daystext.textContent = 'Дней';
        }

        if (ending(h) == 1){
            hourstext.textContent = 'Час';
        }
        else if (ending(h) < 5 && ending(h) > 1) {
            hourstext.textContent = 'Часа';
        }
        else {
                hourstext.textContent = 'Часов';
        }

        if (ending(m) == 1){
            minutestext.textContent = 'Минута';
        }
        else if (ending(m) < 5 && ending(m) > 1) {
            minutestext.textContent = 'Минуты';
        }
        else {
                minutestext.textContent = 'Минут';
        }

        if (ending(s) == 1){
            secondstext.textContent = 'Секунда';
        }
        else if (ending(s) < 5 && ending(s) > 1) {
            secondstext.textContent = 'Секунды';
        }
        else {
                secondstext.textContent = 'Секунд';
        }

        setTimeout(countdown, 500)
    }
    countdown();

})();