(function(){

    const hour = document.querySelector('#clock-hour');
    const minute = document.querySelector('#clock-minute');
    const second = document.querySelector('#clock-second');

    const hour2 = document.querySelector('#clock-hour2');
    const minute2 = document.querySelector('#clock-minute2');
    const second2 = document.querySelector('#clock-second2');

    const hour3 = document.querySelector('#clock-hour3');
    const minute3 = document.querySelector('#clock-minute3');
    const second3 = document.querySelector('#clock-second3');

    const hour4 = document.querySelector('#clock-hour4');
    const minute4 = document.querySelector('#clock-minute4');
    const second4 = document.querySelector('#clock-second4');

    const hour5 = document.querySelector('#clock-hour5');
    const minute5 = document.querySelector('#clock-minute5');
    const second5 = document.querySelector('#clock-second5');

    const hour6 = document.querySelector('#clock-hour6');
    const minute6 = document.querySelector('#clock-minute6');
    const second6 = document.querySelector('#clock-second6');

    function clock() {

        let now = new Date();

        let h = now.getHours();
        let m = now.getMinutes();
        let s = now.getSeconds();
        let ms = now.getMilliseconds();
        
        second.style.transform = `rotate(${s*6 + ms*.006}deg)`;
        minute.style.transform = `rotate(${m*6 + s*.1}deg)`;
        hour.style.transform = `rotate(${h*30 + m*.5}deg)`;

        second2.style.transform = `rotate(${s*6 + ms*.006}deg)`;
        minute2.style.transform = `rotate(${(m + 30)*6 + s*.1}deg)`;
        hour2.style.transform = `rotate(${(h + 2.5)*30 + m*.5}deg)`;

        second3.style.transform = `rotate(${s*6 + ms*.006}deg)`;
        minute3.style.transform = `rotate(${(m + 30)*6 + s*.1}deg)`;
        hour3.style.transform = `rotate(${(h + 5.5)*30 + m*.5}deg)`;

        second4.style.transform = `rotate(${s*6 + ms*.006}deg)`;
        minute4.style.transform = `rotate(${(m)*6 + s*.1}deg)`;
        hour4.style.transform = `rotate(${(h + 2)*30 + m*.5}deg)`;

        second5.style.transform = `rotate(${s*6 + ms*.006}deg)`;
        minute5.style.transform = `rotate(${(m)*6 + s*.1}deg)`;
        hour5.style.transform = `rotate(${(h + 5)*30 + m*.5}deg)`;

        second6.style.transform = `rotate(${s*6 + ms*.006}deg)`;
        minute6.style.transform = `rotate(${(m)*6 + s*.1}deg)`;
        hour6.style.transform = `rotate(${(h - 3)*30 + m*.5}deg)`;

        setTimeout(clock, 20);
    }

    clock();

})();