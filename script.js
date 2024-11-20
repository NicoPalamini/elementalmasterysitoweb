gsap.registerPlugin(ScrollTrigger);

/* immagini che cambiano*/

var images = ['mondo4.png', 'mondo.png', 'mondo1.png', 'mondo2.png','mondo3.png','mondo5.png','mondo6.png','mondo7.png','mondo8.png'];

var imageElement = document.getElementById('image-element');
var currentIndex = 0;

function changeImage() {
  var imagePath = 'images/' + images[currentIndex];
  imageElement.setAttribute('src', imagePath);
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
}

setInterval(changeImage, 800);

/* animazione scatola*/
gsap.from( "#scatola",{
  x:-70,
  duration:4,

  scrollTrigger:{
  trigger: "scatola",
  start: 50,
  ease: "elastic",
  }
}
)

/*animazione elemental*/
gsap.from( "#elemental",{
  y:-200,
  duration:3,
  opacity:0,

scrollTrigger:{
  trigger: "elemental",
  Start: 50,
}
}
)

/* animazione services*/
gsap.from( "#services" , {
  opacity:0, 
  duration:3, 
  y:-50,
  scrollTrigger:{
    trigger: "#services" ,
    start:900,
    end: 1300,
    scrub: 1,
    stagger:6, 
  }
}
)

/* animazione invito*/
gsap.from( "#invito",{
  x:-70,
  duration: 6,

scrollTrigger:{
  trigger: "invito",
  start: 100,
  ease: "elastic",
}
}
)

/* animazione sottotitolo*/
gsap.from( "#sottotitolo",{
  y:-70,
  duration: 6,

scrollTrigger:{
  trigger: "sottotitolo",
  start: 100,
  ease: "elastic",
}
}
)