const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const ampmEl = document.getElementById('ampm');

const dayEl = document.getElementById('day');
const dateEl = document.getElementById('date');
const monthEl = document.getElementById('month');
const yearEl = document.getElementById('year');

const updateClock =()=>{
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = 'AM';

    ampm = h >= 12 ? 'PM' : 'AM';

    h = h < 10 ?'0'+h :h;
    m = m < 10 ?'0'+m :m;
    s = s < 10 ?'0'+s :s;

    hoursEl.innerText=h;
    minutesEl.innerText=m;
    secondsEl.innerText=s;
    ampmEl.innerText=ampm;

     /** Note day is array based and starts from 0 */
     let d = new Date().getDay();
     /**Note week starts on Sunday */
     let weekDay =['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
     dayEl.innerText=weekDay[d];

     let dt = new Date().getDate();
     dateEl.innerText=dt;

     /** Note month is array based and starts from 0 */
     let mth = new Date().getMonth();
     /**Note week starts on Sunday */
     let months =['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
     monthEl.innerText=months[mth];

     let y= new Date().getFullYear();
     yearEl.innerText=y;

    
    const timer = setTimeout(()=>{
        updateClock();
    },1000);

    return ()=>{
        clearTimeout(timer);
    }

}
updateClock();



