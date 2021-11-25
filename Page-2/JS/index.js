const nav = document.querySelector('.header__nav')
const header = document.querySelector('.header__nav')
window.addEventListener('scroll',()=>{
    const scrollHeight = window.pageYOffset
    if(scrollHeight > 180){
        nav.classList.add('fix')
        header.style.zIndex = "1000"
    }
    else{
        nav.classList.remove('fix')
    }
})


const hamburger = document.querySelector('.hamburger-icon')
const navList = document.querySelector('div.grid.wide.header__nav')

hamburger.addEventListener('click',()=>{
    navList.classList.toggle('open')
})