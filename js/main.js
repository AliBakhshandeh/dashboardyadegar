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