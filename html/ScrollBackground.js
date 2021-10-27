const html = document.documentElement;
const canvas = document.getElementById("scroll-background");
const context = canvas.getContext("2d");

// canvas.width = 1158;
// canvas.height = 770;

const currentFrame = (index) =>
  `../img/scrollBackground/${index
    .toString()
    .padStart(4, "0")}.jpg`;

const preloadImages = () => {
  for (let i = 1; i < 200; i++) {
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
  const frameIndex = Math.min(147, Math.floor(scrollFraction * 200));
  requestAnimationFrame(() => updateImage(frameIndex + 1));
});

const updateImage = (index) => {
  image.src = currentFrame(index);
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
};

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

function showText() {
  document.getElementById("div1").style.opacity='1';
};
showText();


//ved ikke helt, hvad du bruger det oven over til brugt til animation af navbar, men for nu disabler jeg den her og ændrer nogle css ting,
//i stedet for at ændrer javascript til at stoppe den med at kører unødvendig script

(localStorage.getItem("animationSelect.navbarProject").onChange = function(){
    if(localStorage.getItem("animationSelect.navbarProject") == "Off"){
        speed = 0;
        
    }else{
        document.getElementById("header").style.animationName = "moveNavbar";
    }
})();


