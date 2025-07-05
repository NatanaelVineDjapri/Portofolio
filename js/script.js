// toogle kelas aktif
const navSub = document.querySelector('.navigation-links-1');

//ketika menu di klik
document.querySelector('#menu').onclick =()=>{
    navSub.classList.toggle('active');
}