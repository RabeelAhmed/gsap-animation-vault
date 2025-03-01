var main = document.querySelector("#main")

var cursur = document.querySelector("#cursur")

var image = document.querySelector("#image")

main.addEventListener("mousemove", function (dets) {
    gsap.to(cursur, {
        x: dets.x,
        y: dets.y,
        duration: 0.3,
        ease:"back.out"
    })
})

image.addEventListener("mouseenter", function () {
    cursur.innerHTML = "King Kohli"
    gsap.to(cursur, {
        scale: 3,
        duration: 0.3,
        backgroundColor: "#ffffff8a"

    })
})
image.addEventListener("mouseleave", function () {
    cursur.innerHTML = ""
    gsap.to(cursur, {
        scale: 1,
        duration: 0.3,
        backgroundColor: "#fff"
        })
})