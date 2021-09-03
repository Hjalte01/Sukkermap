let punkterlængde = [];
let parameter;
let clickArealSum = 0;


class YdreBygning{
    constructor(countdown){
        this.centerGæt = createVector(0, 0);
        this.arealSum = 0;
        this.scaling;
        this.maxCountdown = countdown;
        this.countdown = 0;
        this.xy;


    }

    ydreBygningCanvas(){
        background(kortImg);
    
        

        ydreTing.områder();
        pathfindingAlgorithm.loop();


    }



    områder(){ 

        if(figurer[0].pointConnections([[0, 0], [width, 0], [width, height], [0, height]], "LINES")){
            planTegning = 0;
            triCount.change = true;
        } 
    }
    

 

    /*
    Når man kalder denne metode, så kan man give den punkter, som danner en figur. Derefter kan man specifikkere figuren
    ved det næste argument, f.eks. er "LINES" en figur med kun linjer i stedet for at fylde figuren ud, som den gør, hvis der står undefined.
    Det næste argument er igen et array, hvor det første element viser linjer mellem centergæt og punkterne. 
    Det andet element viser fra mus pos. til punkterne. 
    f.eks - variable.pointConnections([punkt0], [punkt1], [punkt2], ext.], undefined, [true, true])
    */
    pointConnections(xy, fyld, visuelt, texts){ 
        this.visuelt = visuelt; //viser visuelt, hvis true
        if(this.xy == undefined) this.xy = xy;
        push();
        stroke(255, 0, 0);
        strokeWeight(width/500);

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
        stroke(255, 0, 0);
        if(this.visuelt != undefined) if(this.visuelt[0]){
            for(let i = 0; i < xy.length; i++){
               line(this.xy[i][0], this.xy[i][1], this.centerGæt.x, this.centerGæt.y);
            }
        }
        if(this.visuelt != undefined) if(this.visuelt[1]){
            for(let i = 0; i < xy.length; i++){
               line(this.xy[i][0], this.xy[i][1], mouseX/currentScalling, mouseY/currentScalling); 
            }
        }

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
                
                
                if(this.arealSum == 0 || this.scaling != currentScalling) for(let i = 0; i < this.xy.length; i++){
                    punkterlængde[0] = sqrt(pow(this.centerGæt.x-this.xy[i][0],2) + pow(this.centerGæt.y-this.xy[i][1],2));
                    punkterlængde[1] = sqrt(pow(this.xy[i][0]-this.xy[(i+1)%this.xy.length][0],2) + pow(this.xy[i][1]-this.xy[(i+1)%this.xy.length][1],2));
                    punkterlængde[2] = sqrt(pow(this.xy[(i+1)%this.xy.length][0]-this.centerGæt.x,2) + pow(this.xy[(i+1)%this.xy.length][1]-this.centerGæt.y,2));
                    parameter = (punkterlængde[0]+punkterlængde[1]+punkterlængde[2])/2;
                    this.arealSum += sqrt(parameter*(parameter-punkterlængde[0])*(parameter-punkterlængde[1])*(parameter-punkterlængde[2])); 
                }
                
                this.arealSum = round(this.arealSum/100)*100;
                // console.log(`this.arealSum = ${this.arealSum}`);


                for(let i = 0; i < this.xy.length; i++){
                    punkterlængde[0] = sqrt(pow(mouseX/currentScalling-this.xy[i][0],2) + pow(mouseY/currentScalling-this.xy[i][1],2));
                    punkterlængde[1] = sqrt(pow(this.xy[i][0]-this.xy[(i+1)%this.xy.length][0],2) + pow(this.xy[i][1]-this.xy[(i+1)%this.xy.length][1],2));
                    punkterlængde[2] = sqrt(pow(this.xy[(i+1)%this.xy.length][0]-mouseX/currentScalling,2) + pow(this.xy[(i+1)%this.xy.length][1]-mouseY/currentScalling,2));
                    parameter = (punkterlængde[0]+punkterlængde[1]+punkterlængde[2])/2;
                    clickArealSum += sqrt(parameter*(parameter-punkterlængde[0])*(parameter-punkterlængde[1])*(parameter-punkterlængde[2]));
                }
                clickArealSum = round(clickArealSum/100)*100;
                // console.log(`clickarealSum = ${clickArealSum}`);

                this.scaling = currentScalling;
                if(clickArealSum - 100 <= this.arealSum) return true; //Der blev klikket på figuren
            }
        }else if(this.countdown > 0) this.countdown --;
    }
}