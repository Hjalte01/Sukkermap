let punkterlængde = [];
let parameter;
let clickArealSum = 0;
var planTegningImg
let imgPlantegningIcon = document.createElement("img");
imgPlantegningIcon.src = "img/plantegningIcon.png";
// document.body.appendChild(imgPlantegningIcon);

// document.getElementById("defaultCanvas0").appendChild("imgPlantegningIcon");   



class YdreBygning{
    constructor(countdown){
        this.centerGæt = createVector(0, 0);
        this.arealSum = 0;
        this.maxCountdown = countdown;
        this.countdown = 0;
        this.xy;


    }

    ydreBygningCanvas(){
        background(kortImg);


        // planTegningImg.width = width/10;
        // planTegningImg.height = width/10;
        // Jeg tror det er "image" der er noget galt med, hvilket er indbygget i p5, og for at bruge html version "img", så skal vi kunne få fat i canvaset
        // Hvilket vi også har haft lidt problemer med...
        // image(planTegningImg, width-planTegningImg.width, 0);
        



        
        
    
        

        ydreTing.områder();
        pathfindingAlgorithm.loop();


    }



    områder(){ 


        // if(figurer[0].pointConnections([[width-planTegningImg.width, 0], [width, 0], [width, planTegningImg.height], [width-planTegningImg.width, planTegningImg.height]], "LINES", "#00000000")){
            // planTegning = 0;
            // triCount.change = true;
        // } 
    }
    

 

    /*
    Når man kalder denne metode, så kan man give den punkter, som danner en figur. Derefter kan man specifikkere figuren
    ved det næste argument, f.eks. er "LINES" en figur med kun linjer i stedet for at fylde figuren ud, som den gør, hvis der står undefined.
    Det næste argument er igen et array, hvor det første element viser linjer mellem centergæt og punkterne. 
    Det andet element viser fra mus pos. til punkterne. 
    f.eks - variable.pointConnections([punkt0], [punkt1], [punkt2], ext.], undefined, [true, true])
    */
    pointConnections(xy, fyld, fillFarve, texts){ 
        // this.visuelt = visuelt; //viser visuelt, hvis true
        if(this.xy == undefined) this.xy = xy;
        push();
        stroke(fillFarve);
        strokeWeight(width/500);
        fill(fillFarve);

        if(this.centerGæt.x == 0 && this.centerGæt.y == 0){
            for(let i = 0; i < this.xy.length; i++){
                this.centerGæt.x += this.xy[i][0];       
                this.centerGæt.y += this.xy[i][1];
            }
        
            this.centerGæt.x = this.centerGæt.x/this.xy.length; //laver et gæt på midten af figuren
            this.centerGæt.y = this.centerGæt.y/this.xy.length;
        }
        



        if(fyld == undefined) beginShape();     // fyld gør at man enten ser linjer, eller en figur
        if(fyld == "LINES") beginShape(LINES);
            
        for(let i = 0; i < this.xy.length; i++){   //danner figuren 
            if(fyld == "LINES" && i > 0) {
                vertex(this.xy[i][0], this.xy[i][1]);            
            }
            vertex(this.xy[i][0], this.xy[i][1]);
        }
        vertex(this.xy[0][0], this.xy[0][1]);
        endShape();
        
        strokeWeight(1);

        if(texts != undefined){
            textSize(24);
            noStroke();
            fill(0);
            textAlign(CENTER, CENTER);
            text(texts, this.centerGæt.x, this.centerGæt.y);
        }
        

        pop();

        if(this.countdown <= 0 || this.countdown == undefined){
            if(keyCode === 38 || keyCode === 40) this.countdown = this.maxCountdown;
            if(mouseIsPressed && this.xy.length >= 3){ //hvis man klikker på figuren
                this.countdown = this.maxCountdown;
                clickArealSum = 0;
                
                
                if(this.arealSum == 0) for(let i = 0; i < this.xy.length; i++){
                    punkterlængde[0] = sqrt(pow(this.centerGæt.x-this.xy[i][0],2) + pow(this.centerGæt.y-this.xy[i][1],2));
                    punkterlængde[1] = sqrt(pow(this.xy[i][0]-this.xy[(i+1)%this.xy.length][0],2) + pow(this.xy[i][1]-this.xy[(i+1)%this.xy.length][1],2));
                    punkterlængde[2] = sqrt(pow(this.xy[(i+1)%this.xy.length][0]-this.centerGæt.x,2) + pow(this.xy[(i+1)%this.xy.length][1]-this.centerGæt.y,2));
                    parameter = (punkterlængde[0]+punkterlængde[1]+punkterlængde[2])/2;
                    this.arealSum += sqrt(parameter*(parameter-punkterlængde[0])*(parameter-punkterlængde[1])*(parameter-punkterlængde[2])); 
                }
                
                this.arealSum = round(this.arealSum/100)*100;
                // console.log(`this.arealSum = ${this.arealSum}`);


                for(let i = 0; i < this.xy.length; i++){
                    punkterlængde[0] = sqrt(pow(mouseX-this.xy[i][0],2) + pow(mouseY-this.xy[i][1],2));
                    punkterlængde[1] = sqrt(pow(this.xy[i][0]-this.xy[(i+1)%this.xy.length][0],2) + pow(this.xy[i][1]-this.xy[(i+1)%this.xy.length][1],2));
                    punkterlængde[2] = sqrt(pow(this.xy[(i+1)%this.xy.length][0]-mouseX,2) + pow(this.xy[(i+1)%this.xy.length][1]-mouseY,2));
                    parameter = (punkterlængde[0]+punkterlængde[1]+punkterlængde[2])/2;
                    clickArealSum += sqrt(parameter*(parameter-punkterlængde[0])*(parameter-punkterlængde[1])*(parameter-punkterlængde[2]));
                }
                clickArealSum = round(clickArealSum/100)*100;
                // console.log(`clickarealSum = ${clickArealSum}`);

                if(clickArealSum - 100 <= this.arealSum) return true; //Der blev klikket på figuren
            }
        }else if(this.countdown > 0) this.countdown --;
    }
}