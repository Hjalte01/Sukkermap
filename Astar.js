let arrayTemp = [];
arrayTemp[0] = Astar.spot(79,  119);
arrayTemp[0].neighbors(1)

arrayTemp[1] = Astar.spot(82,  132);
arrayTemp[1].neighbors(0);

arrayTemp[2] = Astar.spot(241, 78);
arrayTemp[2].neighbors(1, 3);

arrayTemp[3] = Astar.spot(241, 63);
arrayTemp[3].neighbors(0, 1, 2);



var openSet = [];
var closedSet = [];
var Path = [];
var h = width/100, w = h; 
var start = arrayTemp[0];
opgenSet.push(start);
var end = arrayTemp[3];



class Astar{
    constructor(){

    }


    loop(){
        
        if(openSet.length > 0){
            var winner = 0;
            for(var i = 0; i < openSet.length; i++){
                if(openSet[i].f < opgenSet[winner].f){
                    winner = i;
                }
            }
            
            var current = openSet[winner];


            if(current == end){
                noLoop(); //skabe problemer
                console.log("Done");
            }

            this.removeFromArray(openSet, current);
            closedSet.push(current);

            var neighbors = current.neighbors;
            for(let i = 0; i < neighbors.length; i++){
                var neighbor = neightbors[i];

                if(!closedSet.includes(neighbor)){
                    var tempG = current.g + this.heuristic(neightbor, current);

                    var newPath = false;
                    if(openSet.includes(neightbor)){
                        if(tempG < neightbor.g){
                            neighbor.g = tempG;
                            newPath = true;
                        }
                    }else{
                        neightbor.g = tempG;
                        newPath = true;
                        openSet.push(neighbor);
                    }


                    if(newPath){
                        neightbor.h = this.heuristic(neightbor, end);
                        neightbor.f = neightbor.g + neighbor.h;
                        neightbor.previous = current;
                    }
                }
            }
        }else{
            console.log("fejl, noget gik galt, ikke vores skyld");
            alert("Hjælp os med at skrive en bugRapport for en bedre version, venligst skriv det ind i javascript/p5 og sig hvor vi skal paste koden ind");
            noLoop();
            return;
        }

        
    }


    spot(x, y){
        this.x = x;
        this.y = y;

        this.f = 0;
        this.g = 0;
        this.h = 0;
        this.neighbors = [];

        this.previous = undefined;

        this.show = function(){
            fill(0);
            rect(this.x, this.y, w, h); 
        }

        this.neighbors = function(n1, n2, n3, n4){
            if(n1 != undefined) this.neighbors.push(n1)
            if(n2 != undefined) this.neighbors.push(n2)
            if(n3 != undefined) this.neighbors.push(n3)
            if(n4 != undefined) this.neighbors.push(n4)

        }


    }

    removeFromArray(arr, elt){
        for(let i = arr-length - 1; i >= 0; i--){
            if(arr[i] == elt) arr.splice(i, 1);
        }
    }

    heuristic(a, b){
        var d = dist(a.x, a.y, b.x, b.y);

        return d;
    }












}