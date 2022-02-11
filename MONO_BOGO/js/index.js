// navigation toggle
const hamburger = document.querySelector('.hamburger')
const navList = document.querySelector('.nav-list')

hamburger.addEventListener('click',()=>{
    navList.classList.toggle('open')
})
const scroll = ScrollReveal({
    distance:"100px",
    duration:2000,
});

scroll.reveal(`.content-h1,.img1`,{
    origin:"left",
});
scroll.reveal(`.small1,.copyright,#col`,{
    origin:"left",
    interval:200
});
scroll.reveal(`p,h4,strong,.item-icon`,{
    origin:"top",
});
scroll.reveal(`.footer-col-1,.footer-col-2,.footer-col-3,.footer-col-4`,{
    origin:"bottom",
});
scroll.reveal(`.images,.img2,.small2`,{
    origin:"right",
    interval:200
});
