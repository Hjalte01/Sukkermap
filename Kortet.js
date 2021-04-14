let kortImg;
let canvasStr = 1500;
let canvasZoom = 0.75;
let canvasHeightDiff = 0.4933;
var arraySetup;
var ydreTing;
var indreTing;
var planTegning = undefined;
var figurer = [];
var søgefelt;
var indreBygninger = [];



function setup(){
    createCanvas(canvasStr*canvasZoom, canvasStr*canvasHeightDiff*canvasZoom); //canvas
    
    for(let i = 0; i < 2; i++){
        figurer[i] = new YdreBygning();
    }


    ydreTing = new YdreBygning();
    indreTing = new IndreBygning();
    arraySetup = new Arrays();
    indreBygninger = [indreTing.stue, indreTing.sal1, indreTing.sal2, indreTing.sal3];
    søgefelt = new Søg();
}



function draw(){
    
    
    if(planTegning != undefined) {
    

        indreTing.indreBygningCanvas();
        
        
    }else{
        ydreTing.ydreBygningCanvas();
    }


  
    søgefelt.inputfelt();

}


function preload(){
    kortImg = loadImage('img/sukkertoppen.png'); //kortet 
    stueImg = loadImage('img/stue.png'); //stue  
    sal1Img = loadImage('img/1.sal.png')//1.sal
    sal2Img = loadImage('img/2.sal.png')//2.sal
    sal3Img = loadImage('img/3.sal.png')//3.sal

    
}