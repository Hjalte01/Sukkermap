var advInput1;
var advInput2
var valgArray1;
var optionsLength;



class Søg {

    inputfelt(){
        advInput1 = document.getElementById("listInput1").value; //tager id fra datalist i html filen, 
        advInput2 = document.getElementById("listInput2").value; //som er de to inputs i venstre hjørne når koden kører
        
        optionsLength = document.getElementById("valgList1").options.length; //længden af hvor mange option der er i vores inputliste

        if(valgArray1 == undefined){
            valgArray1 = [];
            for(let i = 0; i < optionsLength; i++){
                valgArray1.push(document.getElementById(i).value); // Laver et arrat i javascript, fra optionsne i html filen
            }
        }


        for(let i = 0; i < valgArray1.length; i ++){
        if(advInput1 == valgArray1[i]) inputStart = advInput1;
        if(advInput2 == valgArray1[i]) inputEnd = advInput2;
        if(inputStart != undefined && inputEnd != undefined){
        document.getElementById("listInput1").value = "";
        document.getElementById("listInput2").value = "";
        } 
        }   

    }

}