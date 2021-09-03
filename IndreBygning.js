let keyBol = false;
let pathfindingAlgorithm = new Astar();

class IndreBygning extends YdreBygning{
    constructor(){
        super();
    }

    indreBygningCanvas(){
        indreBygninger[planTegning]();

        push();
        stroke(0);
        strokeWeight(1);
        text("Plantegning: " + planTegning, width/1.1, width/20);
        pop();
        
        pile();
        tilbageKnap();

        pathfindingAlgorithm.loop();


    }

    kælder(){

    }

    stue(){
        background(stueImg);
        

    }

    sal1(){
        background(sal1Img);


    }

    sal2(){
        background(sal2Img);


    }

    sal3(){
        background(sal3Img);


    }

    
}   

function tilbageKnap(){
    if(figurer[3].pointConnections([[width-110, 0], [width, 0], [width, 35], [width-110, 35]], undefined, undefined, "Kortet")){
        planTegning = undefined;
        triCount.change = true;
    } 
}


function pile(){
    if(planTegning > 0){
        if(figurer[1].pointConnections([[width/2, height-height/500], [width/2-width/70, height-height/30], [width/2+width/70, height-height/30]]) || keyCode === 40 && figurer[1].countdown <= 0){ 
            planTegning--; 
            keyCode = undefined;
            triCount.change = true;
        }
    }

    if(planTegning < 3){
        if(figurer[2].pointConnections([[width/2, height/500], [width/2-width/70, height/30], [width/2+width/70, height/30]]) || keyCode === 38 && figurer[2].countdown <= 0){
            planTegning++;
            keyCode = undefined;
            triCount.change = true;
        }
    }
}

