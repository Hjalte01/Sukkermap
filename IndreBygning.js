let bol;
class IndreBygning extends YdreBygning{
    constructor(){
        super();
    }

    indreBygningCanvas(){
        indreBygninger[planTegning][0]();

        text("Plantegning: " + planTegning, width/1.1, width/20);
        pile();

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
function pile(){

    if(planTegning > 0){
        if(figurer[0].pointConnections([width/2, height-height/500, width/2-width/70, height-height/30, width/2+width/70, height-height/30], undefined)){
            planTegning--; 
            console.log("1");
        } 
    } 

    if(planTegning < 3){
        if(figurer[1].pointConnections([width/2, height/500, width/2-width/70, height/30, width/2+width/70, height/30], undefined)){
            planTegning++;
            console.log("2");
        }
    }
}