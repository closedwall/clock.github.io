var clock = setInterval(clocktimer, 1000);
function clocktimer() {
    var d = new Date();
    var timer = d.toLocaleTimeString();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();
    var clk = document.getElementById("clock");
    var h = document.getElementById('hour');
    var m = document.getElementById('minute');
    var s = document.getElementById('second');
    h.innerHTML =hour;
    m.innerHTML =minute;
    s.innerHTML =second;
}

var divClock = document.getElementById('clock');
var spanHour = document.getElementById('hour');
var spanMinute = document.getElementById('minute');
var spanSecond = document.getElementById('second');
// document.getElementsByName("body").style.backgroundColor ="#25D366"
divClock.setAttribute(
    "style",
    `
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 150px;
        font-size: 100px;
        color:black;
    `
)
spanHour.setAttribute(
    "style",
    `
        color: red;
        background-color: black;
        padding: 50px;
        margin: 50px;
        padding: 50px;
        border-radius: 150px;
    `
)
spanMinute.setAttribute(
    "style",
    `
        color: blue;
        background-color: red;
        padding: 50px;
        margin: 50px;
        padding: 50px;
        border-radius: 150px;
        
    `
)
spanSecond.setAttribute(
    "style",
    `
        color: orange;
        background-color:blue;
        padding: 50px;
        margin: 50px;
        padding: 50px;
        border-radius: 150px;
        position: abssolute;
    `

)