function breakText() {
  var h1 = document.querySelector("h1");

  var h1Text = document.querySelector("h1").textContent;

  var splitedText = h1Text.split("");

  var halfValue = Math.floor(splitedText.length / 2);

  var clutter = "";

  splitedText.forEach(function (elem, idx) {
    if(idx<halfValue){
        clutter += `<span class="a">${elem}</span>`;
    }
    else{
        clutter += `<span class="b">${elem}</span>`;
    }
  });

  h1.innerHTML = clutter;
}


breakText();

gsap.from("h1 .a", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  delay: 0.5,
  stagger: 0.2,
});

gsap.from("h1 .b", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  delay: 0.5,
  stagger: -0.2,
});