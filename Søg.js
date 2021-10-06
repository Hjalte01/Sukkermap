var advInput1;
var advInput2
var tempAdvInput1;
var tempAdvInput2;
var valgArray1;
var optionsLength;
var kortEllerPlan = document.getElementById("kortEllerPlanKnap");




class Søg {

    inputfelt(){  //input felterne
        
        
        advInput1 = document.getElementById("listInput1").value.toLowerCase(); //tager id fra datalist i html filen, 
        advInput2 = document.getElementById("listInput2").value.toLowerCase(); //som er de to inputs i venstre hjørne når koden kører

        //scaler input og paragraph
        document.getElementById("listInput1").style.width = (156.8).toString() + "px";
        document.getElementById("listInput1").style.height = (16).toString()+"px" + "px";
        document.getElementById("listInput2").style.width = (156.8).toString() + "px";
        document.getElementById("listInput2").style.height = (16).toString()+"px" + "px";
        document.getElementById("fra").style.fontSize = (100).toString()+"%";
        document.getElementById("til").style.fontSize = (100).toString()+"%";
        //position input og paragraph
        document.getElementById("listInput2").style.top = "400px";


        
        optionsLength = document.getElementById("valgList1").options.length; //længden af hvor mange option der er i vores inputliste

        if(valgArray1 == undefined){
            valgArray1 = [];
            for(let i = 0; i < optionsLength; i++){
                valgArray1.push(document.getElementById(i).value.toLowerCase()); // Laver et arrat i javascript, fra optionsne i html filen
            }
        }


        for(let i = 0; i < valgArray1.length; i ++){
            if(advInput1 == valgArray1[i] && tempAdvInput1 != advInput1 || advInput1 == valgArray1[i] && tempAdvInput2 != advInput2){
                inputStart = advInput1;
                tempAdvInput1 = advInput1;
                setupBol = true;
            } 
            if(advInput2 == valgArray1[i] && tempAdvInput1 != advInput1 || advInput2 == valgArray1[i] && tempAdvInput2 != advInput2){
                inputEnd = advInput2;
                tempAdvInput2 = advInput2;
                setupBol = true;
            }  
        } 
        
        
        
        



    }
}

function kortEllerPlanSwitch(){
    if(kortEllerPlan.checked == false){
        planTegning = undefined;
    } else{
        planTegning = 0;
        triCount.changed = true;
    }
}