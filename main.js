const deg = 6;
const hr = document.querySelector("#hr");
const mn =  document.querySelector("#mn");
const sc = document.querySelector("#sc");
setInterval(() => {
    let day = new Date();
    let h = day.getHours() * 30;
    let m = day.getMinutes() * deg;
    let s = day.getSeconds() * deg;
    hr.style.transform = `rotateZ(${h + (m/12)}deg)`;
    mn.style.transform = `rotateZ(${m}deg)`;
    sc.style.transform = `rotateZ(${s}deg)`;
});

function showTime(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let time = h + " : " + m + " : " + s;
    
    var digitalClock = document.getElementById("digital");
    digitalClock.textContent = time;
}
setInterval(showTime,1000);
