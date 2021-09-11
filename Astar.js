var arrayTemp = [];
var openSet = [];
var closedSet = [];
var path = [];
var w, h;
var start, end;
var current;
var temp;
var neighbors;
var neighbor;
var inputStart;
var inputEnd;
var setupBol = true;
var doneBol = false;
var tempG;
var keyKomma = false;
var select;
var option;
var triCount = {pivot:0, mindsteVærdi:[], maxVærdi:[], change:true, fejl:false};





class Astar{

    
    constructor(){

    }
    

    loop(){

        select = document.getElementById('farveRute');
        option = select.options[select.selectedIndex];

        if(inputStart != undefined && inputEnd != undefined && inputStart != inputEnd){
            if(setupBol){ 
                
                arraySetup.aStarArray();
                
                triCount.change = true;
                setupBol = false;
                openSet = [];
                closedSet = [];
                path = [];
                h = width/300;
                w = h;
                current = undefined;
                neighbors = undefined;
                neighbor = undefined;
                temp = undefined;
                for(let i = 0; i < arrayTemp.length; i++){
                    if(arrayTemp[i].text != undefined){
                        if(arrayTemp[i].text == inputStart) start = arrayTemp[i];
                        if(arrayTemp[i].text == inputEnd) end = arrayTemp[i];
                    } 
                    
                }
                openSet.push(start);
            }

            
            

            if(openSet.length > 0){
                var winner = 0;
                for(let i = 0; i < openSet.length; i++){
                    if(openSet[i].f < openSet[winner].f){
                        winner = i;
                    }       
                }
                
                current = openSet[winner];

                if(current == end){
                    // console.log("Done");
                    setupBol = true;
                    inputEnd = undefined;
                    inputStart = undefined;

                }
                removeFromArray(openSet, current);
                closedSet.push(current);
                neighbors = current.neighbors;
                for(let i = 0; i < neighbors.length; i++){
                    neighbor = neighbors[i];
                    

                    if(!closedSet.includes(neighbor)){

                        tempG = current.g + heuristic(neighbor, current);
                        var newPath = false;
                        if(openSet.includes(neighbor)){
                            if(tempG < neighbor.g){
                                neighbor.g = tempG;
                                newPath = true;
                            }
                        }else{
                            neighbor.g = tempG;
                            newPath = true;
                            openSet.push(neighbor);
                        }


                        if(newPath){
                            neighbor.h = heuristic(neighbor, end);
                            neighbor.f = neighbor.g + neighbor.h;
                            neighbor.previous = current;
                        }
                        
                    }
                }
            }else{
                console.log("fejl, noget gik galt, formodentlig en connection error");
                alert("Hjælp os med at skrive en bugRapport for en bedre version, gerne skriv hvilke to steder i skrev i søgefeltet for at fejlen forekommer :)");
                setupBol = true;
                inputEnd = undefined;
                inputStart = undefined;
                triCount.fejl = true;
                return;
            }


            path = [];
            temp = current;
            path.push(temp);
            while(temp.previous){
                path.push(temp.previous);
                temp = temp.previous;
                

            }


            noFill();
            
            if (option.value == "pink") {
                stroke(255, 0, 200);
            } else if (option.value == "blå") {
                stroke(0, 0, 200);
            } else if (option.value == "grøn") {
                stroke(0, 200, 0);
            } else if (option.value == "rød") {
                stroke(200, 0, 0);
            } else if (option.value == "orange"){
                stroke(255,165,0);
            }
            
            
            strokeWeight(w / 2);
            beginShape();
            for(let i = 0; i < path.length; i++){
                vertex(path[i].x, path[i].y);
            }
            endShape();
            strokeWeight(1);
            textSize(12);
            stroke(0);
            if(start != undefined) text(start.text, start.x, start.y);
            if(end != undefined) text(end.text, end.x, end.y);


        // Hvis kortet er sorteret færdigt, så sker dette
        } else if(end != undefined && start != undefined){
            noFill();
            if (option.value == "pink") {
                stroke(255, 0, 200);
            } else if (option.value == "blå") {
                stroke(0, 0, 200);
            } else if (option.value == "grøn") {
                stroke(0, 200, 0);
            } else if (option.value == "rød") {
                stroke(200, 0, 0);
            } else if (option.value == "orange"){
                stroke(255,165,0);
            }
            strokeWeight(w / 2);
            beginShape();
            for(let i = 0; i < path.length; i++){ 
                if(path[i].tag == `${planTegning}. sal` || path[i].tag == "stue" && planTegning == 0){
                    vertex(path[i].x, path[i].y);
                    if(i < path.length-1 && path[i].tag == `${planTegning}. sal` && path[i+1].tag != `${planTegning}. sal` || i < path.length-1 && path[i].tag == "stue" && path[i+1].tag != "stue"){
                        endShape();
                        beginShape();
                    }
                }
                if(planTegning === undefined) vertex(path[i].x, path[i].y);
            }
            endShape();
            strokeWeight(1);
            textSize(12);
            stroke(0);
            if(start != undefined) text(start.text, start.x, start.y);
            text(end.text, end.x, end.y);


            //trekant animation
            grønPil();
            


            //draw flere array, altså til at gøre det nemmere for os at tilføje lokaler
            if(keyIsDown(107)){ //key "+" numlock for add
                var tempPrompt = prompt("arrayTemp[100] = new spot(879, 474, \"tag\", \"sal\"\)\;");
                console.log("arrayTemp[" + arrayTemp.length + "] = new spot(" + round(mouseX/currentScalling, 0) + ", " + round(mouseY/currentScalling, 0) + ", " + tempPrompt + ");");
                arrayTemp[arrayTemp.length] = new spot(round(mouseX/currentScalling, 0), round(mouseY/currentScalling, 0), tempPrompt);
                // arrayTemp[6] = new spot(1000, 400, "33");
            }

            if(keyIsDown(110) || keyKomma){ //key "," for numlock for index
                keyKomma = true;
                push();
                textSize(15);
                noStroke();
                fill(0);
                for(let i = 0; i < arrayTemp.length; i++){
                    if(`${planTegning}. sal` == arrayTemp[i].tag){
                        text(i, arrayTemp[i].x, arrayTemp[i].y);
                    }else if(planTegning == 0){ 
                        if("stue" == arrayTemp[i].tag){
                            text(i, arrayTemp[i].x, arrayTemp[i].y);
                        }
                    }
                }
                pop();
            }

            if(keyIsDown(109)){ //key - for numlock for nabo
                var tempPrompt = prompt("Indtast naboer til index: " + [arrayTemp.length-1] + ". Skriv f.eks: 1, 2, 4");
                console.log("arrayTemp[" + [arrayTemp.length-1] + "].addNeighbors([" + tempPrompt + "]);")

                // arrayTemp[0].addNeighbors([1, 2]);
            } 

            
        }
    }
}


function grønPil(){
    if(triCount.fejl == false){
        if(triCount.change == true){
            triCount = {pivot:0, mindsteVærdi:[], maxVærdi:[], change:true, fejl:false};
            if(planTegning == undefined){
                triCount.mindsteVærdi[0] = 0;
                triCount.maxVærdi[0] = path.length-1;
            }else{
                for(let i = 0; i < path.length; i++){
                    if(path[ceil(i)].tag == `${planTegning}. sal` || path[ceil(i)].tag == "stue" && planTegning == 0){
                        if(triCount.change == true) {
                            triCount.mindsteVærdi[triCount.mindsteVærdi.length] = i;
                            triCount.change = false;
                        }
                        triCount.maxVærdi[triCount.mindsteVærdi.length-1] = i;
                    }else{
                        triCount.change = true;
                    }
                }
            } 
            triCount.change = false;
        }
        if(triCount.mindsteVærdi != "" ||triCount.maxVærdi != ""){

            triCount.pivot -= 0.05; //animations hastighed¨
            triCount.maxVærdi[-1] = triCount.maxVærdi[triCount.mindsteVærdi.length-1]; // lidt sketchy måde at lave arr[-1]
            for(let i = triCount.mindsteVærdi.length-1; i >= 0; i--){
                if(ceil(triCount.pivot) <= triCount.mindsteVærdi[0] && i == 0 || ceil(triCount.pivot) <= triCount.mindsteVærdi[i] && ceil(triCount.pivot) > triCount.maxVærdi[i-1]){
                    triCount.pivot = triCount.maxVærdi[i-1];
                    
                    if(i == 0){
                        triCount.pivot = triCount.maxVærdi[triCount.mindsteVærdi.length-1];
                    } 
                } 
            }

            push();
            fill(0, 255, 0);
            noStroke(); 
            // console(triCount);
            let tempPoint1_2 = createVector(path[ceil(triCount.pivot-1)].x - path[ceil(triCount.pivot)].x, path[ceil(triCount.pivot-1)].y - path[ceil(triCount.pivot)].y);
            let tempPoint2Rate = 10/sqrt(tempPoint1_2.x**2 + tempPoint1_2.y**2);
            if(path[ceil(triCount.pivot-1)].tag == `${planTegning}. sal` || planTegning == undefined || path[ceil(triCount.pivot-1)].tag == "stue" && planTegning == 0){
                triangle(
                    path[ceil(triCount.pivot)].x - tempPoint1_2.y * tempPoint2Rate,
                    path[ceil(triCount.pivot)].y + tempPoint1_2.x * tempPoint2Rate,
                    path[ceil(triCount.pivot)].x + tempPoint1_2.x * tempPoint2Rate,
                    path[ceil(triCount.pivot)].y + tempPoint1_2.y * tempPoint2Rate,
                    path[ceil(triCount.pivot)].x + tempPoint1_2.y * tempPoint2Rate,
                    path[ceil(triCount.pivot)].y - tempPoint1_2.x * tempPoint2Rate
                );
            }
            pop();
        }
    }
}


function removeFromArray(arr, elt){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == elt){
            arr.splice(i, 1);
            i--;
        }
    }
}

function heuristic(a, b){   
    try{
        var d = dist(a.x, a.y, b.x, b.y);
        if(a.text == "trappe" && b.text == "trappe") d += 50;
    }
    catch(err){
        console.log("err = " + err);
        console.log("a = " + a);
        console.log("b = " + b);
        noLoop();
    }   
    

    return d;
}

function spot(x, y, text, tag){
    this.x = x;
    this.y = y;
    this.text = text;
    this.tag = tag;
    this.f = 0;
    this.g = 0;
    this.h = 0;
    this.neighbors = [];

    this.previous = undefined;

    this.show = function(){
        fill(0);
        rect(this.x, this.y, w, h); 
    }

    this.addNeighbors = function(nn){

        for(let i = 0; i < nn.length; i++){
            this.neighbors.push(arrayTemp[nn[i]]);   

        }
        

    }


}