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
        textSize(30);
        
            
        
        pop();
        
        pile();

        pathfindingAlgorithm.loop();


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


function pile(){
    if(planTegning > 0){
        if(figurer[1].pointConnections([[width/2, height-height/250], [width/2-width/35, height-height/20], [width/2+width/35, height-height/20]], undefined, "rgba(0, 0, 0, 0.5)") || keyCode === 40 && figurer[1].countdown <= 0){ 
            planTegning--; 
            keyCode = undefined;
            triCount.change = true;
        }
    }

    if(planTegning < 3){
        if(figurer[2].pointConnections([[width/2, height/250], [width/2-width/35, height/20], [width/2+width/35, height/20]], undefined, "#00000077") || keyCode === 38 && figurer[2].countdown <= 0){
            planTegning++;
            keyCode = undefined;
            triCount.change = true;
        }
    }
}

