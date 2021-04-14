let kortImg;
let canvasStr = 1500;
let canvasZoom = 0.75;
let canvasHeightDiff = 0.4933;
var indreBygninger = [];
var ydreTing;
var indreTing;
var planTegning = undefined;
var figurer = [];
var søgefelt = new Søg();



function setup(){
    createCanvas(canvasStr*canvasZoom, canvasStr*canvasHeightDiff*canvasZoom); //canvas
    
    for(let i = 0; i < 2; i++){
        figurer[i] = new YdreBygning();
    }


    ydreTing = new YdreBygning();
    indreTing = new IndreBygning();
    indreBygninger = new Arrays().indreArray();

    // setupSpot();

}



function draw(){
    
    
    if(planTegning != undefined) {
    

        indreTing.indreBygningCanvas();
        
        
    }else{
        ydreTing.ydreBygningCanvas();
    }


    advInput = document.getElementById("listInput");
    if(advInput.value != '' && keyCode == ENTER){
        console.log(advInput.value);
    }


    // drawSpot();
    

}


// function mouseClicked(){
//     console.log(round(mouseX,0) + " , " + round(mouseY, 0))
// }

function preload(){
    kortImg = loadImage('img/sukkertoppen.png'); //kortet 
    stueImg = loadImage('img/stue.png'); //stue  
    sal1Img = loadImage('img/1.sal.png')//1.sal
    sal2Img = loadImage('img/2.sal.png')//2.sal
    sal3Img = loadImage('img/3.sal.png')//3.sal

    
}