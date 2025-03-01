gsap.to("#page2 h1", {
    transform: "translateX(-62%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        marker: true,
        start: "top 0%",
        end: "top -150%",
        scrub: true,
        pin: true
    }
})
