function page1Animation() {
  var tl = gsap.timeline()

tl.from('nav h1, nav h4, nav button', {
  y: -20,
  opacity: 0,
  duration: 0.7,
  delay: 0.7,
  stagger: 0.15
})

tl.from(".center-part1 h1", {
  x: -200,
  opacity: 0,
  duration: 0.5 
},"-=0.3")

tl.from(".center-part1 p", {
  x: -100,
  opacity: 0,
  duration: 0.4 
})

tl.from(".center-part1 button", {
  opacity: 0,
  duration: 0.4 
})

tl.from(".center-part2 img", {
  opacity: 0,
  duration: 0.5,
  x:200
}, "-=1")

tl.from(".section1bottom img" ,{
  opacity: 0,
  y: 30,
  stagger: 0.2,
  duration: 0.7

})


}

page1Animation()


function page2Animation() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      markers: true,
      start: "top 50%",
      end: "top -20%",
      scrub: 2,
    }
  })
  
  tl2.from(".services", {
    y: 30, 
    opacity: 0,
    duration: 0.5,
  })
  
  tl2.from(".elem.line1.left", {
    x: -300 , 
    opacity: 0,
    duration: 1,
  },"anime1")
  
  tl2.from(".elem.line1.right", {
    x: 300 , 
    opacity: 0,
  },"anime1")
  
  
  
  tl2.from(".elem.line2.left", {
    x: -300 , 
    opacity: 0,
  
  },"anime2")
  
  tl2.from(".elem.line2.right", {
    x: 300 , 
    opacity: 0,
  },"anime2")
}


page2Animation()

