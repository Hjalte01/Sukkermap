let punkterlængde = [];
let parameter;
let arealSum = 0;
let clickArealSum = 0;
let centerGæt;
let counter = 0;

class YdreBygning{
    constructor(){
        this.counter = 0;
    }

    ydreBygningCanvas(){
        background(kortImg);
    
        søgefelt.inputfelt();

        ydreTing.områder();

    }



    områder(){


        if(ydreTing.pointConnections([0, 0, width, 0, width, height], "LINES")) planTegning = 1;
    }
    

 




    pointConnections(xy, fyld){
        centerGæt = createVector(0, 0);
        if(this.counter > 0) this.counter--;

        
        push();
        stroke(255, 0, 0);
        strokeWeight(width/500);

        for(let i = 0; i < xy.length; i += 2){
            centerGæt.x += xy[i];
            centerGæt.y += xy[i+1];
        }
            centerGæt.x = centerGæt.x/(xy.length/2);
            centerGæt.y = centerGæt.y/(xy.length/2);


        if(fyld == undefined) beginShape();
        if(fyld == "LINES") beginShape(LINES);
            
        for(let i = 0; i < xy.length-1; i += 2){
            if(fyld == "LINES" && i > 1) {
                vertex(xy[i], xy[i+1]);            
            }
            vertex(xy[i], xy[i+1]);
        }
        // if(fyld == "LINES")vertex(xy[xy.length-2], xy[xy.length-1]);
        vertex(xy[0], xy[1]);
        endShape();


        pop();



        if(mouseIsPressed && xy.length >= 6 && this.counter <= 0){
            this.counter = 25;
            clickArealSum = 0;
            arealSum = 0;
            console.log()


            for(let i = 0; i < xy.length-1; i+=2){
                punkterlængde[0] = sqrt(pow(centerGæt.x-xy[i],2)+pow(centerGæt.y-xy[i+1],2));
                punkterlængde[1] = sqrt(pow(xy[i]-xy[(i+2)%xy.length],2)+pow(xy[i+1]-xy[(i+3)%xy.length],2));
                punkterlængde[2] = sqrt(pow(xy[(i+2)%xy.length]-centerGæt.x,2)+pow(xy[(i+3)%xy.length]-centerGæt.y,2));
                parameter = (punkterlængde[0]+punkterlængde[1]+punkterlængde[2])/2;
                arealSum += sqrt(parameter*(parameter-punkterlængde[0])*(parameter-punkterlængde[1])*(parameter-punkterlængde[2]));
            }
            console.log("clickArealSum: " + clickArealSum + ", arealSum: " + arealSum);

            arealSum = round(arealSum/100)*100 


            for(let i = 0; i < xy.length-1; i+=2){
                punkterlængde[0] = sqrt(pow(mouseX-xy[i],2)+pow(mouseY-xy[i+1],2));
                punkterlængde[1] = sqrt(pow(xy[i]-xy[(i+2)%xy.length],2)+pow(xy[i+1]-xy[(i+3)%xy.length],2));
                punkterlængde[2] = sqrt(pow(xy[(i+2)%xy.length]-mouseX,2)+pow(xy[(i+3)%xy.length]-mouseY,2));
                parameter = (punkterlængde[0]+punkterlængde[1]+punkterlængde[2])/2;
                clickArealSum += sqrt(parameter*(parameter-punkterlængde[0])*(parameter-punkterlængde[1])*(parameter-punkterlængde[2]));
                // console.log("p0: " + punkterlængde[0] + ", p1: " + punkterlængde[1] + ", p2: " + punkterlængde[2] + ", i: " + i);                
            }
            clickArealSum = round(clickArealSum/100)*100;

            console.log("clickArealSum: " + clickArealSum + ", arealSum: " + arealSum);



            if(clickArealSum <= arealSum) return true; //Der blev klikket på figuren
            
        }
    }
}