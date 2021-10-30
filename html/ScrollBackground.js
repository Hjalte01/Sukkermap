//Link to source code https://codepen.io/SabAsan/pen/ExVzaGb
// YouTube https://youtu.be/rrf0nPjuums?list=LL 

const html = document.documentElement;
const canvas = document.getElementById("scroll-background");
const context = canvas.getContext("2d");
const frameCount = 299;

var x = 10;

canvas.width = window.innerWidth;   /// integer values
canvas.height = window.innerHeight;

const currentFrame = (index) =>
  `../img/scrollBackground/${index
    .toString()
    .padStart(4, "0")}.jpg`;

const preloadImages = () => {
  for (let i = 1; i < 300; i++) {
    const image = new Image();
    image.src = currentFrame(i);
  }
};

const image = new Image();
image.src = currentFrame(1);

image.onload = function () {
   context.drawImage(image, 0, 0, canvas.width, canvas.height);
};

window.addEventListener("scroll", () => {
  const scrollTop = html.scrollTop;
  const maxScroll = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScroll;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );
  requestAnimationFrame(() => updateImage(frameIndex + 1));
});

const updateImage = (index) => {
  image.src = currentFrame(index);

  console.log(index)
    
    fadeIn(-5,10,20,"titel1",index)
    fadeIn(20,30,50,"div1",index)
    fadeIn(60,80,100,"div2",index)

  context.drawImage(image, 0, 0, canvas.width, canvas.height);
};

function fadeIn(minV, midV, maxV, idName, index) {
  // document.getElementById(idName).style.transform = "matrix(0,0,1,0,1," +(index-115)+")";
  if (index > (midV - 10) && index < (midV + 10)){
    document.getElementById(idName).style.opacity= "1";
  } else if (index <= (midV - 5) && index >= minV || index >= (midV + 5) && index <= maxV) {
    document.getElementById(idName).style.opacity= "0.5";
  } else {
    document.getElementById(idName).style.opacity= "0";

  }
}


preloadImages();

//----

var speed = 3000;

function newPage(intPage) {

    //den her skal være der for, ellers kan man lige se at navbar bevæger sig en lille smule
    if(localStorage.getItem("animationSelect.navbarProject") != "Off") {
        document.getElementById("header").style.animation = "moveNavbarBack 3s";
    }

    setTimeout(function () {
        document.getElementById("header").style.right = "0";
        document.getElementById("header").style.transform = "translate(0%)";

    }, 3000);

    if (intPage == 1) {
        setTimeout(function () {
            location.href = "../index.html";
        }, speed);
    }

    if (intPage == 2) {
        setTimeout(function () {
            location.href = "kontakt.html";
        }, speed);
    }

    if (intPage == 3) {
        setTimeout(function () {
            location.href = "donate.html";
        }, speed);
    }
}
//animation knap for navbar
(localStorage.getItem("animationSelect.navbarProject").onChange = function(){
  if(localStorage.getItem("animationSelect.navbarProject") == "Off"){
      speed = 0;
      
  }else{
      document.getElementById("header").style.animationName = "moveNavbar";
  }
})();

