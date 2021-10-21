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
var popupBox;
var myCanvas;

function setup() {
	canvasStr = 1500; 

	if (windowWidth < 850) {
		myCanvas = createCanvas(850 - 20, 850 * 0.4933 - 20);
	}else {
		myCanvas = createCanvas(windowWidth - 40, windowWidth * 0.4933 - 20);
	}
	//canvas 
	myCanvas.parent("canvasErHer"); 



	for (let i = 0; i <= 5; i++) {
	//tilføj en figur
	figurer[i] = new YdreBygning(20); //personlig countdown lav en ny figur, uden argument for ingen countdown
	}

	popupBox = new PopupBox();
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
  }
  popupBox.loop();
}

// n =  new Date();
// y = n.getFullYear();
// m = n.getMonth() + 1;
// d = n.getDate();
// document.getElementById("update").innerHTML = m + "/" + d + "/" + y;

function preload() {
  kortImg = loadImage("img/sukkertoppen.png"); //kortet
  stueImg = loadImage("img/stue.png"); //stue
  sal1Img = loadImage("img/1.sal.png"); //1.sal
  sal2Img = loadImage("img/2.sal.png"); //2.sal
  sal3Img = loadImage("img/3.sal.png"); //3.sal
  planTegningImg = loadImage("img/plantegningIcon.png");
}
