//Link to source code https://codepen.io/SabAsan/pen/ExVzaGb
// YouTube https://youtu.be/rrf0nPjuums?list=LL

const html = document.documentElement;
const canvas = document.getElementById("scroll-background");
const context = canvas.getContext("2d");
const frameCount = 500;

canvas.style.opacity = "0.7"
var x = 10;

var arraySlide = [
  [
    "../img/slideshow 2/V0.1.jpg",
    "../img/slideshow 2/V0.3.jpg",
    "../img/slideshow 2/V0.5.jpg",
    "../img/slideshow 2/V0.7.jpg",
    "../img/slideshow 2/May_3_2021.jpg",
    "../img/slideshow 2/Aug_31_2021.jpg",
    "../img/slideshow 2/Sep_22_2021.jpg",
    "../img/slideshow 2/Oct_12_2021.jpg",
    "../img/slideshow 2/Oct_21_2021.jpg",
    "../img/slideshow 2/nov_1_2021.jpg",
  ],
  [
    "11. februar 2021",
    "13. februar 2021",
    "14. februar 2021",
    "22. februar 2021",
    "3. maj 2021",
    "31. august 2021",
    "22. september 2021",
    "12. oktober 2021",
    "21. oktober 2021",
    "1. november 2021",
  ],
];

canvas.width = window.innerWidth; /// integer values
canvas.height = window.innerHeight;

const currentFrame = (index) =>
  `../img/scrollBackground2/${index.toString().padStart(4, "0")}.jpg`;

function preloadImages() {
  for (let i = 1; i <= frameCount; i++) {
    const image = new Image();
    image.src = currentFrame(i);
  }

  for (let ii = 0; ii < arraySlide[0].length; ii++) {
    const image2 = new Image();
    image2.src = arraySlide[0][ii];
  }
}
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

  document.getElementById("div3").style.display = "flex";

  fadeIn(0, "titel", index);
  fadeIn(50, "div1", index);
  fadeIn(170, "div2", index);
  fadeIn(240, "div3", index);
  fadeIn(240, "versionText", index);
  //fadeIn(undefined,300,undefined,"divFooter", index);

  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  // context.drawImage(image, 0, 0, 1536, 754);
  // context.drawImage(image, 0, 0, 1920, 1080);
};

function fadeIn(midV, idName, index) {

  if (window.innerWidth < 850) { // til Mobil
  var interval1 = 50;
  var interval2 = interval1 + 60;
  var interval3 = interval1 + 70;
  var interval4 = interval1 + 80;
  } else { // til PC og iPad
  var interval1 = 20;
  var interval2 = 25;
  var interval3 = 30;
  var interval4 = 35;
  }

  // document.getElementById(idName).style.transform = "matrix(0,0,1,0,1," +(index-115)+")";
  if (index > midV - interval1 && index < midV + interval1) {
    document.getElementById(idName).style.opacity = "1";
  } else if (
    (index <= midV - interval1 && index >= midV - interval2) ||
    (index >= midV + interval1 && index <= midV + interval2)
  ) {
    document.getElementById(idName).style.opacity = "0.75";
  } else if (
    (index <= midV - interval2 && index >= midV - interval3) ||
    (index >= midV + interval2 && index <= midV + interval3)
  ) {
    document.getElementById(idName).style.opacity = "0.5";
  } else if (
    (index <= midV - interval3 && index >= midV - interval4) ||
    (index >= midV + interval3 && index <= midV + interval4)
  ) {
    document.getElementById(idName).style.opacity = "0.25";
  } else {
    document.getElementById(idName).style.opacity = "0";
  }
}

preloadImages();

//-- Slideshow

var arraySlide = [
  [
    "../img/slideshow 2/V0.1.jpg",
    "../img/slideshow 2/V0.3.jpg",
    "../img/slideshow 2/V0.5.jpg",
    "../img/slideshow 2/V0.7.jpg",
    "../img/slideshow 2/May_3_2021.jpg",
    "../img/slideshow 2/Aug_31_2021.jpg",
    "../img/slideshow 2/Sep_22_2021.jpg",
    "../img/slideshow 2/Oct_12_2021.jpg",
    "../img/slideshow 2/Oct_21_2021.jpg",
    "../img/slideshow 2/nov_1_2021.jpg",
  ],
  [
    "11. februar 2021",
    "13. februar 2021",
    "14. februar 2021",
    "22. februar 2021",
    "3. maj 2021",
    "31. august 2021",
    "22. september 2021",
    "12. oktober 2021",
    "21. oktober 2021",
    "1. november 2021",
  ],
];

document.getElementById("pVersioner").innerHTML = "Version 0.1";

var i = 0;
document.getElementById("imgVersioner").src = arraySlide[0][i];
document.getElementById("pVersioner").innerHTML = arraySlide[1][i];

function slideShow(bool_arrow) {
  console.log("Arrow function is running");

  if (bool_arrow) {
    console.log("Left arrow is running");
    if (i == 0) {
      i = arraySlide[0].length - 1;
    } else {
      i = i - 1;
    }
  } else {
    console.log("Right arrow is running");
    if (i == arraySlide[0].length - 1) {
      i = 0;
    } else {
      i++;
    }
  }
  console.log(i);
  document.getElementById("imgVersioner").src = arraySlide[0][i];
  document.getElementById("pVersioner").innerHTML = arraySlide[1][i];
}

//----

var speed = 3000;

function newPage(intPage) {
  //den her skal være der for, ellers kan man lige se at navbar bevæger sig en lille smule
  if (localStorage.getItem("animationSelect.navbarProject") != "Off") {
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

//animation knap for navbar
(localStorage.getItem("animationSelect.navbarProject").onChange = function () {
  if (localStorage.getItem("animationSelect.navbarProject") == "Off") {
    speed = 0;
  } else {
    document.getElementById("header").style.animationName = "moveNavbar";
  }
})();

// function rightArrow() {

//   document.getElementById("leftArrow").style.visibility = "visible";

//   if(document.getElementById("imgVersioner").getAttribute("src") == "../img/slideshow/V0.1.png"){
//     document.getElementById("pVersioner").innerHTML = "Version 0.2";
//     document.getElementById("imgVersioner").src = "../img/slideshow/V0.2.png";
//   } else if (document.getElementById("imgVersioner").getAttribute("src") == "../img/slideshow/V0.2.png"){
//     document.getElementById("pVersioner").innerHTML = "Version 0.3";
//     document.getElementById("imgVersioner").src = "../img/slideshow/V0.3.png";
//   } else if (document.getElementById("imgVersioner").getAttribute("src") == "../img/slideshow/V0.3.png"){
//     document.getElementById("pVersioner").innerHTML = "Version 0.4";
//     document.getElementById("imgVersioner").src = "../img/slideshow/V0.4.png";
//   } else if (document.getElementById("imgVersioner").getAttribute("src") == "../img/slideshow/V0.4.png"){
//     document.getElementById("pVersioner").innerHTML = "Version 0.5";
//     document.getElementById("imgVersioner").src = "../img/slideshow/V0.5.png";
//   } else if (document.getElementById("imgVersioner").getAttribute("src") == "../img/slideshow/V0.5.png"){
//     document.getElementById("pVersioner").innerHTML = "Version 0.6";
//     document.getElementById("imgVersioner").src = "../img/slideshow/V0.6.png";
//   } else if (document.getElementById("imgVersioner").getAttribute("src") == "../img/slideshow/V0.6.png"){
//     document.getElementById("pVersioner").innerHTML = "Version 0.7";
//     document.getElementById("imgVersioner").src = "../img/slideshow/V0.7.png";
//   } else if (document.getElementById("imgVersioner").getAttribute("src") == "../img/slideshow/V0.7.png"){
//     document.getElementById("pVersioner").innerHTML = "Version 0.8";
//     document.getElementById("imgVersioner").src = "../img/slideshow/V0.8.png";
//   } else if (document.getElementById("imgVersioner").getAttribute("src") == "../img/slideshow/V0.8.png"){
//     document.getElementById("pVersioner").innerHTML = "Version 0.9";
//     document.getElementById("imgVersioner").src = "../img/slideshow/V0.9.png";
//   } else if (document.getElementById("imgVersioner").getAttribute("src") == "../img/slideshow/V0.9.png"){
//     document.getElementById("rightArrow").style.visibility = "hidden";
//     document.getElementById("pVersioner").innerHTML = "Version 1.0";
//     document.getElementById("imgVersioner").src = "../img/slideshow/V1.0.png";

//   }
// }

// function leftArrow() {

//   document.getElementById("rightArrow").style.visibility = "visible";

//   if(document.getElementById("imgVersioner").getAttribute("src") == "../img/slideshow/V0.1.png"){
//     document.getElementById("leftArrow").style.visibility = "hidden";
//     document.getElementById("pVersioner").innerHTML = "Version 0.1";
//     document.getElementById("imgVersioner").src = "../img/slideshow/V0.1.png";
//   }
//   else if(document.getElementById("imgVersioner").getAttribute("src") == "../img/slideshow/V0.2.png"){
//     document.getElementById("pVersioner").innerHTML = "Version 0.1";
//     document.getElementById("imgVersioner").src = "../img/slideshow/V0.1.png";
//   } else if (document.getElementById("imgVersioner").getAttribute("src") == "../img/slideshow/V0.3.png"){
//     document.getElementById("pVersioner").innerHTML = "Version 0.2";
//     document.getElementById("imgVersioner").src = "../img/slideshow/V0.2.png";
//   } else if (document.getElementById("imgVersioner").getAttribute("src") == "../img/slideshow/V0.4.png"){
//     document.getElementById("pVersioner").innerHTML = "Version 0.3";
//     document.getElementById("imgVersioner").src = "../img/slideshow/V0.3.png";
//   } else if (document.getElementById("imgVersioner").getAttribute("src") == "../img/slideshow/V0.5.png"){
//     document.getElementById("pVersioner").innerHTML = "Version 0.4";
//     document.getElementById("imgVersioner").src = "../img/slideshow/V0.4.png";
//   } else if (document.getElementById("imgVersioner").getAttribute("src") == "../img/slideshow/V0.6.png"){
//     document.getElementById("pVersioner").innerHTML = "Version 0.5";
//     document.getElementById("imgVersioner").src = "../img/slideshow/V0.5.png";
//   } else if (document.getElementById("imgVersioner").getAttribute("src") == "../img/slideshow/V0.7.png"){
//     document.getElementById("pVersioner").innerHTML = "Version 0.6";
//     document.getElementById("imgVersioner").src = "../img/slideshow/V0.6.png";
//   } else if (document.getElementById("imgVersioner").getAttribute("src") == "../img/slideshow/V0.8.png"){
//     document.getElementById("pVersioner").innerHTML = "Version 0.7";
//     document.getElementById("imgVersioner").src = "../img/slideshow/V0.7.png";
//   } else if (document.getElementById("imgVersioner").getAttribute("src") == "../img/slideshow/V0.9.png"){
//     document.getElementById("pVersioner").innerHTML = "Version 0.8";
//     document.getElementById("imgVersioner").src = "../img/slideshow/V0.8.png";
//   } else if (document.getElementById("imgVersioner").getAttribute("src") == "../img/slideshow/V1.0.png"){
//     document.getElementById("pVersioner").innerHTML = "Version 0.9";
//     document.getElementById("imgVersioner").src = "../img/slideshow/V0.9.png";
//   }
// }
