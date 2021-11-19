let kortImg;
var planTegningImg;
let canvasHeightDiff = 0.4933;
var arraySetup;
var ydreTing;
var indreTing;
var planTegning = undefined;
var figurer = [];
var søgefelt;
var indreBygninger = [];
var ellipseCord = {
    x: 0,
    y: 0,
    tempX: 0,
    tempY: 0,
}

function setup() {

	myCanvas = createCanvas(
		1500 * 0.75,
		1500 * 0.4933 * 0.75
	);

  if (windowWidth < 775) {
		myCanvas.elt.style.width = "calc(775px - 37px)";
		myCanvas.elt.style.height = "calc((775px - 37px) * 0.4933)";
	}else {
	 	myCanvas.elt.style.width = "calc(100vw - 37px)";
		myCanvas.elt.style.height = "calc((100vw - 37px) * 0.4933)";
	}
  myCanvas.elt.style.margin = "10px";


	myCanvas.parent("canvasErHer");


  for (let i = 0; i <= 15; i++) {
    //tilføj en figur
    figurer[i] = new YdreBygning(); //personlig countdown lav en ny figur, uden argument for ingen countdown
  }

  ydreTing = new YdreBygning();
  indreTing = new IndreBygning();
  arraySetup = new Arrays();
  indreBygninger = [
    indreTing.stue,
    indreTing.sal1,
    indreTing.sal2,
    indreTing.sal3,
  ];
  søgefelt = new Søg();
}

function draw() {


  if (
    popupBoxContainer.style.display == "" &&
    hjælpereNavigation.style.display == ""
  ) {
    clear();
    canvasZoom = screen.width;
    if (planTegning != undefined) {
      indreTing.indreBygningCanvas();
    } else {
      ydreTing.ydreBygningCanvas();
    }

    søgefelt.inputfelt();
    if(ellipseCord.x >= 0 && ellipseCord.y >= 0 && ellipseCord.x <= width && ellipseCord.y <= height){
        cordLocation();  
    }
    
  }
  
}


function preload() {
  kortImg = loadImage("img/sukkertoppen.png"); //kortet
  stueImg = loadImage("img/stue.png"); //stue
  sal1Img = loadImage("img/1.sal.png"); //1.sal
  sal2Img = loadImage("img/2.sal.png"); //2.sal
  sal3Img = loadImage("img/3.sal.png"); //3.sal
  planTegningImg = loadImage("img/plantegningIcon.png");
}

function cordLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, error, options);
  } else { 
    console.log("Geolocation is not supported by this browser.");
  }
}

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}



function showPosition(position) {
    // console.log(position.coords.latitude + ", " + position.coords.longitude);


    var cord = {
        startX: 55.654661,
        startY: 12.515221,
        slutX: 55.653053,
        slutY: 12.516786,
        width: ((55.654661 - 55.653053)*1000000).toFixed(0),
        height: ((12.516786 - 12.515221)*1000000).toFixed(0),
    };
  
  
    //           0: bio oppe hjørne      1: bio venstre hjørn    2: bio nedre hjørne    3: bio højre hjørne      4: indgang midte       5: canvas start              6: canvas slut
    // var test = [[55.654509, 12.515428], [55.654489, 12.515110], [55.654310, 12.515137], [55.654308, 12.515463], [55.654026, 12.515952], [cord.startX, cord.startY], [cord.slutX, cord.slutY]];
        // testX = test[6][0];
        // testY = test[6][1];
    // testX = 55.653143;
    // testY = 12.516715;
    
    ellipseCord.tempX = (cord.startX - position.coords.latitude)*1000000;
    ellipseCord.tempY = (position.coords.longitude - cord.startY)*1000000;

    var cordAspectRatio = {
        x: (width/cord.width),
        y: (height/cord.height),
    }
    console.log("hej")




    ellipseCord.x = (cord.startX - position.coords.latitude)*1000000*cordAspectRatio.x;
    ellipseCord.y = (cord.startY - position.coords.longitude)*1000000*cordAspectRatio.y; 
    rotate(52.45*PI/180);

    if(ellipseCord.x >= 0 && ellipseCord.y >= 0){
        fill(0, 128, 255);
        strokeWeight(2);
        for(let i = 13; i >= 0; i-= 13){
            ellipse(ellipseCord.x, ellipseCord.y, i, i);
        }
    }



    window.onclick = () => {
        console.log(`CordTranslated: ${(ellipseCord.x).toFixed(0)}, ${(ellipseCord.y).toFixed(0)}\nMouseCord: ${mouseX.toFixed(0)}, ${mouseY.toFixed(0)}
        `);
    }


    if(ellipseCord.x < 0 || ellipseCord.y < 0 || ellipseCord.x > width || ellipseCord.y > height){
        setTimeout(cordLocation, 10000); //kører hvert 10 second, hvis ikke man er inde for skolens grænser
    }
}


