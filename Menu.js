
var pause = false;
var coronaTrapper;

class Menu{


    mainMenu(){
        image(questionMark, 0, 0, 198/10, 299/10);
        if(pause == false) {
            if(figurer[4].pointConnections([[0, 0], [198/10, 0], [197/10, 299/10], [0, 299/10]], "LINES")) pause = true;
        }else{
            if(figurer[5].pointConnections([[width/2-30, height-230], [width/2+30, height-230], [width/2+30, height-200], [width/2-30, height-200]], "LINES")) pause = false;
            coronaTrapper.remove();
            
        }
 

        if(pause == true){
            push();
            fill(0, 0, 0, 100);
            rect(400, 100, width-800, height-200); 

            fill(255);
            textSize(32);
            textAlign(CENTER, TOP);
            text("Settings", 400, 100, width-800, height-200);
            textSize(12);
            
            coronaTrapper = createCheckbox("textCorona", true);
            coronaTrapper.elt.style.color = "red";
            coronaTrapper.position(320, 140);
            coronaTrapper.changed(coronaTrapperFunc);

            
            pop();
        }



    }
}


function coronaTrapperFunc(){

    if (this.checked()){
        console.log("Checked")
    } else {

    }

}