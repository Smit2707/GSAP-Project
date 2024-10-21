let t1 = gsap.timeline();

t1.from(".nav h3", {
    y: -50,
    duration: 0.8,
    delay: 0.4,
    opacity: 0,
    stagger: 0.3
})
t1.from("#main h2", {
    x: -500,
    duration: 0.8,
    delay: 0.4,
    opacity: 0,
    stagger: 0.4
})
t1.from("#main img", {
    x: 50,
    rotate: 50,
    duration: 0.8,
    opacity: 0,
    stagger: 0.5
})
t1.from("#main footer", {
    y: 50,
    duration: 0.8,
    opacity: 0
})