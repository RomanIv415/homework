(function(){

    const hour = document.querySelector('#clock-hour');
    const minute = document.querySelector('#clock-minute');
    const second = document.querySelector('#clock-second');

    function clock() {

        let now = new Date();

        let h = now.getHours();
        let m = now.getMinutes();
        let s = now.getSeconds();
        let ms = now.getMilliseconds();
        let daysOfTheWeek = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
        let month = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"];
        const days = document.querySelector('#dayOfTheWeek');
        const datee = document.querySelector('#date');
        const monthonclock = document.querySelector('#month');
        let day = now.getDay();
        let date = now.getDate();
        let monthnow = now.getMonth();
        days.innerText = daysOfTheWeek[day];
        datee.innerText = date;
        monthonclock.innerText = month[monthnow];
        second.style.transform = `rotate(${s*6 + ms*.006}deg)`;
        minute.style.transform = `rotate(${m*6 + s*.1}deg)`;
        hour.style.transform = `rotate(${h*30 + m*.5}deg)`;

        setTimeout(clock, 20);
    }

    clock();

})();