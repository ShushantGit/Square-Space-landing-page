var sametime=gsap.timeline();

sametime.from("#logo,#nav2,#btn,#btn2",{
   y:-100,
   duration:0.9,
   delay:0.5,
   stagger:0.3
})

sametime.from("#main>h1",{
    y:200,
    opacity:0,
    duration:0.5,
    stagger:0.3
})

sametime.from("#l-img",{
    y:200,
    opacity:0,
    duration:0.5,
    stagger:0.3
})

sametime.from("#r-img",{
    scale:0,
    opacity:0,
    stagger:0.2
})