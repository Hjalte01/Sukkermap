var tempAdvInput1;
var tempAdvInput2;
var valgArray1 = [];
var kortEllerPlan = document.getElementById("kortEllerPlanKnap");
let etageP = document.getElementById("etage");
// var advInput1 = document.getElementById("listInput1").value.toLowerCase(); //tager id fra datalist i html filen,
var advInput1 = document.getElementById("listInput1"); //tager id fra datalist i html filen,
var advInput2 = document.getElementById("listInput2"); //som er de to inputs i venstre hjørne når koden kører

var advInput1Value = advInput1.value.toLowerCase(); //tager id fra datalist i html filen,
var advInput2Value = advInput2.value.toLowerCase(); //som er de to inputs i venstre hjørne når koden kører

var optionsLength = document.getElementById("valgList1").options.length; //længden af hvor mange option der er i vores inputliste


//option i html til javascript
(function(){
    for (let i = 0; i < optionsLength; i++) {
        valgArray1.push(document.getElementById(i).value.toLowerCase()); // Laver et arrat i javascript, fra optionsne i html filen
    }
})();


advInput1.oninput = function(){
    advInput1Value = advInput1.value.toLowerCase(); 
     
    for (let i = 0; i < valgArray1.length; i++) {
        if (advInput1Value == valgArray1[i] || advInput1Value === easterEgg) {
            inputStart = advInput1Value;
            if(inputEnd === undefined && advInput2Value != "") inputEnd = advInput2Value;
            setupBol = true;
        }
        
    }
};

advInput2.oninput = function(){
    advInput2Value = advInput2.value.toLowerCase();

    // if (advInput2Value == "testcenter")

    for (let i = 0; i < valgArray1.length; i++) {
        if (advInput2Value == valgArray1[i] || advInput2Value === easterEgg ){
            inputEnd = advInput2Value;
            if(inputStart === undefined && advInput1Value != "") inputStart = advInput1Value;
            setupBol = true;
        }
    }
};

if(advInput1Value != "") advInput1.oninput();
if(advInput2Value != "") advInput2.oninput();




class Søg {
    inputfelt() {

        if (planTegning == undefined) {
            etageP.textContent = "";
        } else if (planTegning == 0) {
            etageP.textContent = "Stue";
        } else {
            etageP.textContent = planTegning + ". Sal";
        }
    }
}

function kortEllerPlanSwitch() {
    if (kortEllerPlan.checked == false) {
        planTegning = undefined;
    } else {
        planTegning = 0;
        triCount.changed = true;
    }
}



// skal kun bruges i index, ellers ville jeg sætte den i dropdown.js
document.querySelector(".dropbtnForInputs#dropbtnForInputs").addEventListener("click", containerForInputsFunc);
