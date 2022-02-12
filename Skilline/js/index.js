/*-----====== animations ======-----*/


const scroll = ScrollReveal({
    distance:"100px",
    duration:2000,
});

scroll.reveal(``,{
    origin:"left",
});
scroll.reveal(`.header-image`,{
    origin:"left",
    interval:200
});
scroll.reveal(``,{
    origin:"top",
});
scroll.reveal(`.company`,{
    origin:"bottom",
});
scroll.reveal(`.header-pic`,{
    origin:"right",
    interval:200
});

