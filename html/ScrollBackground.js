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
  //  context.drawImage(image, 0, 0, 1536, 754);
  //  context.drawImage(image, 0, 0, 1920, 1080);

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

  document.getElementById("div3").style.display= "flex";
    
    fadeIn(0,0,30,"titel",index);
    fadeIn(40,50,60,"div1",index);
    fadeIn(90,130,120,"div2",index);
    fadeIn(undefined,210,undefined,"div3", index);
    //fadeIn(undefined,300,undefined,"divFooter", index);

  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  // context.drawImage(image, 0, 0, 1536, 754);
  // context.drawImage(image, 0, 0, 1920, 1080);
};

function fadeIn(minV, midV, maxV, idName, index) {

  var interval1 = 20
  var interval2 = 25
  var interval3 = 30
  var interval4 = 35
  // document.getElementById(idName).style.transform = "matrix(0,0,1,0,1," +(index-115)+")";
  if (index > (midV - interval1) && index < (midV + interval1)){
    document.getElementById(idName).style.opacity= "1";
  } else if (index <= (midV - interval1) && index >= (midV - interval2) || index >= (midV + interval1) && index <= (midV + interval2)) {
    document.getElementById(idName).style.opacity= "0.75";
  } else if (index <= (midV - interval2) && index >= (midV - interval3) || index >= (midV + interval2) && index <= (midV + interval3)) {
    document.getElementById(idName).style.opacity= "0.5";
  } else if (index <= (midV - interval3) && index >= (midV - interval4) || index >= (midV + interval3) && index <= (midV + interval4)) {
    document.getElementById(idName).style.opacity= "0.25";
  } else {
    document.getElementById(idName).style.opacity= "0";
  } 
}

preloadImages();

//-- Slideshow

document.getElementById("pVersioner").innerHTML = "Version 0.1";

slideShow();

function slideShow() {

    if(document.getElementById("imgVersioner").getAttribute("src") != "../img/slideshow/V1.0.png"){
    rightArrow();
    } else {
      document.getElementById("imgVersioner").src = "../img/slideshow/V0.1.png";
    } 
    setTimeout(function(){ slideShow()}, 1500);
  
}


function rightArrow() {

  
  document.getElementById("leftArrow").style.visibility = "visible";

  if(document.getElementById("imgVersioner").getAttribute("src") == "../img/slideshow/V0.1.png"){
    console.log("This is true")
    document.getElementById("pVersioner").innerHTML = "Version 0.2";
    document.getElementById("imgVersioner").src = "../img/slideshow/V0.2.png";
  } else if (document.getElementById("imgVersioner").getAttribute("src") == "../img/slideshow/V0.2.png"){
    document.getElementById("pVersioner").innerHTML = "Version 0.3";
    document.getElementById("imgVersioner").src = "../img/slideshow/V0.3.png";
  } else if (document.getElementById("imgVersioner").getAttribute("src") == "../img/slideshow/V0.3.png"){
    document.getElementById("pVersioner").innerHTML = "Version 0.4";
    document.getElementById("imgVersioner").src = "../img/slideshow/V0.4.png";
  } else if (document.getElementById("imgVersioner").getAttribute("src") == "../img/slideshow/V0.4.png"){
    document.getElementById("pVersioner").innerHTML = "Version 0.5";
    document.getElementById("imgVersioner").src = "../img/slideshow/V0.5.png";
  } else if (document.getElementById("imgVersioner").getAttribute("src") == "../img/slideshow/V0.5.png"){
    document.getElementById("pVersioner").innerHTML = "Version 0.6";
    document.getElementById("imgVersioner").src = "../img/slideshow/V0.6.png";
  } else if (document.getElementById("imgVersioner").getAttribute("src") == "../img/slideshow/V0.6.png"){
    document.getElementById("pVersioner").innerHTML = "Version 0.7";
    document.getElementById("imgVersioner").src = "../img/slideshow/V0.7.png";
  } else if (document.getElementById("imgVersioner").getAttribute("src") == "../img/slideshow/V0.7.png"){
    document.getElementById("pVersioner").innerHTML = "Version 0.8";
    document.getElementById("imgVersioner").src = "../img/slideshow/V0.8.png";
  } else if (document.getElementById("imgVersioner").getAttribute("src") == "../img/slideshow/V0.8.png"){
    document.getElementById("pVersioner").innerHTML = "Version 0.9";
    document.getElementById("imgVersioner").src = "../img/slideshow/V0.9.png";
    console.log("this works first")
  } else if (document.getElementById("imgVersioner").getAttribute("src") == "../img/slideshow/V0.9.png"){
    console.log("this works")
    document.getElementById("rightArrow").style.visibility = "hidden";
    document.getElementById("pVersioner").innerHTML = "Version 1.0";
    document.getElementById("imgVersioner").src = "../img/slideshow/V1.0.png";
    
  } 
}

function leftArrow() {

  document.getElementById("rightArrow").style.visibility = "visible";

  if(document.getElementById("imgVersioner").getAttribute("src") == "../img/slideshow/V0.1.png"){
    document.getElementById("leftArrow").style.visibility = "hidden";
    document.getElementById("pVersioner").innerHTML = "Version 0.1";
    document.getElementById("imgVersioner").src = "../img/slideshow/V0.1.png";
  }
  else if(document.getElementById("imgVersioner").getAttribute("src") == "../img/slideshow/V0.2.png"){
    document.getElementById("pVersioner").innerHTML = "Version 0.1";
    document.getElementById("imgVersioner").src = "../img/slideshow/V0.1.png";
  } else if (document.getElementById("imgVersioner").getAttribute("src") == "../img/slideshow/V0.3.png"){
    document.getElementById("pVersioner").innerHTML = "Version 0.2";
    document.getElementById("imgVersioner").src = "../img/slideshow/V0.2.png";
  } else if (document.getElementById("imgVersioner").getAttribute("src") == "../img/slideshow/V0.4.png"){
    document.getElementById("pVersioner").innerHTML = "Version 0.3";
    document.getElementById("imgVersioner").src = "../img/slideshow/V0.3.png";
  } else if (document.getElementById("imgVersioner").getAttribute("src") == "../img/slideshow/V0.5.png"){
    document.getElementById("pVersioner").innerHTML = "Version 0.4";
    document.getElementById("imgVersioner").src = "../img/slideshow/V0.4.png";
  } else if (document.getElementById("imgVersioner").getAttribute("src") == "../img/slideshow/V0.6.png"){
    document.getElementById("pVersioner").innerHTML = "Version 0.5";
    document.getElementById("imgVersioner").src = "../img/slideshow/V0.5.png";
  } else if (document.getElementById("imgVersioner").getAttribute("src") == "../img/slideshow/V0.7.png"){
    document.getElementById("pVersioner").innerHTML = "Version 0.6";
    document.getElementById("imgVersioner").src = "../img/slideshow/V0.6.png";
  } else if (document.getElementById("imgVersioner").getAttribute("src") == "../img/slideshow/V0.8.png"){
    document.getElementById("pVersioner").innerHTML = "Version 0.7";
    document.getElementById("imgVersioner").src = "../img/slideshow/V0.7.png";
  } else if (document.getElementById("imgVersioner").getAttribute("src") == "../img/slideshow/V0.9.png"){
    document.getElementById("pVersioner").innerHTML = "Version 0.8";
    document.getElementById("imgVersioner").src = "../img/slideshow/V0.8.png";
  } else if (document.getElementById("imgVersioner").getAttribute("src") == "../img/slideshow/V1.0.png"){
    document.getElementById("pVersioner").innerHTML = "Version 0.9";
    document.getElementById("imgVersioner").src = "../img/slideshow/V0.9.png";
  } 
}





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
// Sldeishow 
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto

(localStorage.getItem("animationSelect.navbarProject").onChange = function(){
  if(localStorage.getItem("animationSelect.navbarProject") == "Off"){
      speed = 0;
      
  }else{
      document.getElementById("header").style.animationName = "moveNavbar";
  }
})();

