var overlayDashboard = document.getElementsByClassName('overlayDashboard')
document.getElementById('btnAsideResponive').addEventListener('click', () => {
    let detectClassName = 'asideResponsiveActive';
    let element = document.getElementsByClassName('sideBar')[0]
    if(element.classList.contains(detectClassName)){
        element.classList.remove(detectClassName)
        document.getElementById('btnAsideResponive').lastElementChild.style.transform = "rotate(0deg)"
        overlayDashboard[0].style.display = 'none'
    }else{
        element.classList.add(detectClassName)
        document.getElementById('btnAsideResponive').lastElementChild.style.transform = "rotate(180deg)"
        overlayDashboard[0].style.display = 'block'
    } 
})

// Clock NavBar -
setInterval(showTime, 1000);

function showTime(){
  let time = new Date();
  let hr = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
//   AMPM = 'AM'; 

// if(hr > 12) {
//   hr -= 12;
//   AMPM = "PM";
// }
// if(hr == 0) {
//   hr = 12;
//   AMPM = "AM";
// }

hr = hr < 10 ? "0" + hr : hr;
min = min < 10 ? "0" + min : min;
sec = sec < 10 ? "0" + sec : sec;

// let curentTime = hr + ":" + min + ":" + sec + AMPM; 
let curentTime = hr + ":" + min + ":" + sec;
document.getElementById('digital_clock').innerHTML = curentTime;

}
showTime();