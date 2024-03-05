var tl=gsap.timeline()
{
    tl.from("#main",
    {
        y:"100vh",
        duration:1.5,
        delay:0.7 
        
    })
    tl.to("main",
    {
        y:"0vh"
    })
}

