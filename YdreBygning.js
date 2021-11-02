let punkterlængde = [];
let parameter;
let clickArealSum = 0;

class YdreBygning {
    constructor() {
        this.centerGæt = createVector(0, 0);
        this.arealSum = 0;
        this.maxCountdown = 20;
        this.countdown = 0;
        this.xy;
        this.textPos;
    }

    ydreBygningCanvas() {
        background(kortImg);

        pathfindingAlgorithm.loop();
        //animation knap
    if(localStorage.getItem("animationSelect.områder") == "On"){
        this.områder();
    }
    }

    områder(){
        figurer[3].pointConnections([[23, 98], [114, 40], [120, 50], [187, 25], [294, 25], [295, 118], [191, 121], [78, 183]], "LINES", "rgb(0, 200, 0)", "Biografen", undefined, [125, 70, 75, 23]);
        figurer[4].pointConnections([[180, 242], [257, 244], [257, 370], [180, 370]], "LINES", "rgb(0, 200, 0)", "Kantinen", undefined, [184, 296, 68, 20]);
        figurer[5].pointConnections([[258, 238], [408, 239], [408, 379], [258, 378]], "LINES", "rgb(0, 200, 0)", "Tårnet", undefined, [307, 297, 54, 20]);
        figurer[6].pointConnections([[410, 270], [509, 270], [509, 375], [410, 375]], "LINES", "rgb(0, 200, 0)", "Træværksted", undefined, [410, 313, 99, 18]);
        figurer[7].pointConnections([[509, 270], [541, 270], [541, 375], [509, 375]], "LINES", "rgb(0, 200, 0)", "Administration", [460, 250], [408, 240, 102, 18]);
        figurer[8].pointConnections([[512, 253], [522, 253], [522, 264], [513, 264], [525, 280], [537, 264], [528, 264], [528, 248], [512, 248]], undefined, "rgb(255, 165, 0)", undefined, [450, 400]);
        figurer[9].pointConnections([[541, 344], [573, 344], [573, 375], [541, 375]], "LINES", "rgb(0, 200, 0)", "Studievejledning", [480, 400], [419, 389, 123, 21]);
        figurer[11].pointConnections([[392, 27], [635, 23], [635, 121], [394, 118]], "LINES", "rgb(0, 200, 0)", "Metalværkstedet", undefined, [452, 61, 125, 19]);
        figurer[12].pointConnections([[540, 142], [650, 142], [651, 163], [715, 163], [715, 214], [670, 214], [670, 269], [542, 269]], "LINES", "rgb(0, 200, 0)", "Lektiecafe", undefined, [605, 187, 79, 18]);
        figurer[13].pointConnections([[670, 214], [773, 214], [913, 360], [913, 376], [670, 374]], "LINES", "rgb(0, 200, 0)", "Lærerværelset", undefined, [733, 297, 110, 19]);
        figurer[14].pointConnections([[541, 375], [919, 376], [1016, 446], [541, 447]], "LINES", "rgb(0, 200, 0)", "Atriumgården", undefined, [703, 401, 102, 20]);
        figurer[15].pointConnections([[540, 448], [1015, 446], [1102, 508], [1101, 535], [540, 535]], "LINES", "rgb(0, 200, 0)", "Fysik/Kemi/Biologi/Auditorium", [820, 493], [712, 482, 216, 21]); 
        figurer[10].pointConnections([[544, 397], [554, 397], [554, 386], [545, 386], [557, 370], [569, 386], [560, 386], [560, 402], [544, 402]], undefined, "rgb(255, 165, 0)", undefined, [450, 400]);

    }
    /*
    Når man kalder denne metode, så kan man give den punkter, som danner en figur. Derefter kan man specifikkere figuren
    ved det næste argument, f.eks. er "LINES" en figur med kun linjer i stedet for at fylde figuren ud, som den gør, hvis der står undefined.
    Det næste argument er igen et array, hvor det første element viser linjer mellem centergæt og punkterne. 
    Det andet element viser fra mus pos. til punkterne. 
    f.eks - variable.pointConnections([punkt0], [punkt1], [punkt2], ext.], LINES/undefined, farve(rgb), text)
    */
    pointConnections(xy, fyld, fillFarve, texts, textPos, rectPos) {
        // this.visuelt = visuelt; //viser visuelt, hvis true
        if(this.textPos == undefined) this.textPos = textPos;
        if (this.xy == undefined) this.xy = xy;
        push();
        stroke(fillFarve); //fillFarve: farve
        strokeWeight(width / 500);
        fill(fillFarve);

        if (this.centerGæt.x == 0 && this.centerGæt.y == 0) {
            for (let i = 0; i < this.xy.length; i++) {
                this.centerGæt.x += this.xy[i][0];
                this.centerGæt.y += this.xy[i][1];
            }

            this.centerGæt.x = this.centerGæt.x / this.xy.length; //laver et gæt på midten af figuren
            this.centerGæt.y = this.centerGæt.y / this.xy.length;
        }

        if (fyld == undefined) beginShape(); // fyld gør at man enten ser linjer, eller en figur
        if (fyld == "LINES") beginShape(LINES);

        for (let i = 0; i < this.xy.length; i++) {
            //danner figuren
            if (fyld == "LINES" && i > 0) {
                vertex(this.xy[i][0], this.xy[i][1]);
            }
            vertex(this.xy[i][0], this.xy[i][1]);
        }
        vertex(this.xy[0][0], this.xy[0][1]);
        endShape();


        fill(0);
        if(rectPos != undefined) rect(rectPos[0], rectPos[1], rectPos[2], rectPos[3]);

        fill(255);
        noStroke();
        // stroke(255, 0, 0);
        // strokeWeight(1);
        textSize(16);



        textAlign(CENTER, CENTER);
        if (texts != undefined) {
            if(textPos){
                text(texts, this.textPos[0], this.textPos[1]);
            }else {
                text(texts, this.centerGæt.x, this.centerGæt.y);
            }
        }

        pop();

        if (this.countdown <= 0 || this.countdown == undefined) {
            if (keyCode === 38 || keyCode === 40)
                this.countdown = this.maxCountdown;
            if (mouseIsPressed && this.xy.length >= 3) {
                //hvis man klikker på figuren
                this.countdown = this.maxCountdown;
                clickArealSum = 0;

                if (this.arealSum == 0)
                    for (let i = 0; i < this.xy.length; i++) {
                        punkterlængde[0] = sqrt(
                            pow(this.centerGæt.x - this.xy[i][0], 2) +
                                pow(this.centerGæt.y - this.xy[i][1], 2)
                        );
                        punkterlængde[1] = sqrt(
                            pow(
                                this.xy[i][0] -
                                    this.xy[(i + 1) % this.xy.length][0],
                                2
                            ) +
                                pow(
                                    this.xy[i][1] -
                                        this.xy[(i + 1) % this.xy.length][1],
                                    2
                                )
                        );
                        punkterlængde[2] = sqrt(
                            pow(
                                this.xy[(i + 1) % this.xy.length][0] -
                                    this.centerGæt.x,
                                2
                            ) +
                                pow(
                                    this.xy[(i + 1) % this.xy.length][1] -
                                        this.centerGæt.y,
                                    2
                                )
                        );
                        parameter =
                            (punkterlængde[0] +
                                punkterlængde[1] +
                                punkterlængde[2]) /
                            2;
                        this.arealSum += sqrt(
                            parameter *
                                (parameter - punkterlængde[0]) *
                                (parameter - punkterlængde[1]) *
                                (parameter - punkterlængde[2])
                        );
                    }

                this.arealSum = round(this.arealSum / 100) * 100;
                // console.log(`this.arealSum = ${this.arealSum}`);

                for (let i = 0; i < this.xy.length; i++) {
                    punkterlængde[0] = sqrt(
                        pow(mouseX - this.xy[i][0], 2) +
                            pow(mouseY - this.xy[i][1], 2)
                    );
                    punkterlængde[1] = sqrt(
                        pow(
                            this.xy[i][0] -
                                this.xy[(i + 1) % this.xy.length][0],
                            2
                        ) +
                            pow(
                                this.xy[i][1] -
                                    this.xy[(i + 1) % this.xy.length][1],
                                2
                            )
                    );
                    punkterlængde[2] = sqrt(
                        pow(this.xy[(i + 1) % this.xy.length][0] - mouseX, 2) +
                            pow(
                                this.xy[(i + 1) % this.xy.length][1] - mouseY,
                                2
                            )
                    );
                    parameter =
                        (punkterlængde[0] +
                            punkterlængde[1] +
                            punkterlængde[2]) /
                        2;
                    clickArealSum += sqrt(
                        parameter *
                            (parameter - punkterlængde[0]) *
                            (parameter - punkterlængde[1]) *
                            (parameter - punkterlængde[2])
                    );
                }
                clickArealSum = round(clickArealSum / 100) * 100;
                // console.log(`clickarealSum = ${clickArealSum}`);

                if (clickArealSum - 100 <= this.arealSum) return true; //Der blev klikket på figuren
            }
        } else if (this.countdown > 0) this.countdown--;
    }
}



// kordinatter på x og y til at danne flere områder med func pointConnections
// let i = [];
// window.onclick = function(){
//     i.push(`[${floor(mouseX, 0)}, ${floor(mouseY, 0)}], `);   
//     for(let index = 0; index < i.length; index++){
//         console.log(JSON.stringify(i));
//     }
// }



