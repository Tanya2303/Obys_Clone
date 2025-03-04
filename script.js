var tl = gsap.timeline()
tl.from(".line h1",{
    y:150,
    stagger:0.3,
    duration:0.6,
    delay:0.1,
});
var grow = 0
var h5text = document.querySelector("#line1_part1 h5")
setInterval(() => {
    if(grow<100){
        h5text.innerHTML = grow++
    }else{
        h5text.innerHTML = grow
    }  
},20);
tl.to("#loader",{
    opacity:0,
    duration:0.3,
    delay:0.9,
    display:"none"
});
tl.from(".section1",{
    y:1200,
    delay:0.2,
    opacity:0,
})
tl.from("#nav",{
    opacity:0,
})
tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
    y:120,
    stagger:0.2,
    duration:0.5,
})


document.addEventListener("mousemove",function(dets){
    gsap.to("#crsr",{
        left:dets.x,
        top:dets.y
    })
})
Shery.makeMagnet("#nav_part2 h4",);