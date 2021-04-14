var arrayTemp = [];
var openSet = [];
var closedSet = [];
var path = [];
var w, h;
var start, end;
var current;
var neighbors;
var neighbor;
var inputStart;
var inputEnd;
var setupBol = true;
var doneBol = false;




class Astar{

    
    constructor(){

    }


    loop(){
        if(inputStart != undefined && inputEnd != undefined){
            if(setupBol){ 
                setupBol = false;
                arrayTemp[0] = new spot(79, 119, "Tårnet");
                arrayTemp[1] = new spot(82, 132);
                arrayTemp[2] = new spot(241, 63, "Fysik");
                arrayTemp[3] = new spot(241, 78);
                arrayTemp[4] = new spot(300, 200);
                arrayTemp[5] = new spot(800, 400, "array nr. 5");
                arrayTemp[6] = new spot(1000, 400, "Kemi");

                arrayTemp[0].addNeighbors([1, 2]);
                arrayTemp[1].addNeighbors([0, 3]);
                arrayTemp[2].addNeighbors([0, 3]);
                arrayTemp[3].addNeighbors([1, 2, 4]);
                arrayTemp[4].addNeighbors([3, 5]);
                arrayTemp[5].addNeighbors([4, 6]);
                arrayTemp[6].addNeighbors([5]);


                openSet = [];
                closedSet = [];
                path = [];
                h = width/300;
                w = h;
                current = undefined;
                neighbors = undefined;
                neighbor = undefined;
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
                for(var i = 0; i < openSet.length; i++){
                    if(openSet[i].f < openSet[winner].f){
                        winner = i;
                    }       
                }
                
                current = openSet[winner];

                if(current == end){
                    // noLoop(); //skabe problemer
                    console.log("Done");
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
                        var tempG = current.g + heuristic(neighbor, current);

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
                console.log("fejl, noget gik galt, ikke vores skyld");
                alert("Hjælp os med at skrive en bugRapport for en bedre version, venligst skriv det ind i javascript/p5 og sig hvor vi skal paste koden ind");
                setupBol = true;
                inputEnd = undefined;
                inputStart = undefined;
                return;
            }


            // draw segment

            for(let i = 0; i < arrayTemp.length; i++){
                arrayTemp[i].show();
            }

            path = [];
            var temp = current;
            path.push(temp);
            while(temp.previous){
                path.push(temp.previous);
                temp = temp.previous;
            }


            noFill();
            stroke(255, 0, 200);
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
            text(end.text, end.x, end.y);

        } else if(end != undefined){
            noFill();
            stroke(255, 0, 200);
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
            text(end.text, end.x, end.y);


            //draw flere array
            (function keyPressed(){
                if(keyIsDown(65)){ //key a for add
                    var tempPrompt = "\"" + prompt("Indtast lokale- eller vej nr. f.eks. 33(lokale), 0(stue), 131(lokale), eller 100(1 sal)") + "\"";
                    console.log("arrayTemp[" + arrayTemp.length + "] = new spot(" + round(mouseX, 0) + ", " + round(mouseY, 0) + ", " + tempPrompt + ");");
                    arrayTemp[arrayTemp.length] = new spot(round(mouseX, 0), round(mouseY, 0), tempPrompt);
                    // arrayTemp[6] = new spot(1000, 400, "33");
                }
                push();
                stroke(255, 0, 0);
                strokeWeight(5);
                point(arrayTemp[arrayTemp.length-1].x, arrayTemp[arrayTemp.length-1].y);
                pop();

                if(keyCode === 73){ //key i for index
                    push();
                    textSize(15);
                    noStroke();
                    fill(0);
                    for(let i = 0; i < arrayTemp.length; i++){
                        text(i, arrayTemp[i].x, arrayTemp[i].y);
                    }
                    pop();
                }

                if(keyIsDown(78)){ //key n for nabo
                    var tempPrompt = prompt("Indtast naboer til index: " + [arrayTemp.length-1] + ". Skriv f.eks: 1, 2, 4");
                    console.log("arrayTemp[" + [arrayTemp.length-1] + "].addNeighbors([" + tempPrompt + "]);")

                    // arrayTemp[0].addNeighbors([1, 2]);
                } 

            })();
            
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
    var d = dist(a.x, a.y, b.x, b.y);

    return d;
}

function spot(x, y, text){
    this.x = x;
    this.y = y;
    this.text = text;

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