gsap.to(".main",{
    backgroundColor:"#000",
    duration:0.5,
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        start:"top -30%",
        end:"top -70%",
        scrub:3
    }
})