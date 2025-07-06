// toogle kelas aktif
const navSub = document.querySelector('.navigation-links-1');
const hamburger = document.querySelector('#menu');

//ketika menu di klik
hamburger.onclick =()=>{
    navSub.classList.toggle('active');
}

// document.addEventListener('click',function(e){
//     if(!hamburger.contains(e.target) && !navSub.contains(e.target)){
//         navSub.classList.remove('active');
//     }
// })

