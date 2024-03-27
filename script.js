var t1 = gsap.timeline()

t1.from("h2",{
    y:-50,
    delay:1,
    duration:1.5,
    opacity:0,
    stagger:0.3
})

t1.from("h1",{
    x:-500,
    duration:0.5,
    opacity:0,
    stagger:0.4
})

t1.from("img",{
    x:100,
    rotate:45,
    opacity:0,
    duration:0.8,
    stagger:0.5
})