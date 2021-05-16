const deg = 6;
const hr = document.querySelector('#hr');
const sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * deg;
let ss = day.getSeconds() * deg;

hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;
})



setInterval(function () {
        document.getElementById('current_date_time_block2').innerHTML = date_time();
    }, 1000);
