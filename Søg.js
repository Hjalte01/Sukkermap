var advInput;
var inputArray = [
'Kortet',
'Stuen',
'1. sal',      
'2. sal',
'3. sal',
'Administrationen', //5
'Atriumgården',
'Auditoriet', 
'Biografen',
'Biologi', 
'Fysik', //10
'Kemi',
'Metalværstedet',
'Studievejledning',
'Træværkstedet',
'Tårnet'] //15

class Søg {

    inputfelt(){

    advInput = document.getElementById("listInput"); //tager id fra datalist i html filen

    // for(let i = 0; inputArray.length > i; i++){ // Kører array igennem ved hjælp af loop
    // kan ikke se hvad loopet gør, men man kunne bruge det ved at indtaste i inputArray[i]
    // Dog skal man lave en if statement for, hvad plantegningen er lig med, ved ikke om det
    // er den dur du er ude efter.
  if(advInput.value == inputArray[1]){  

    planTegning = 0;  //Stuen

  } else if(advInput.value == inputArray[2]) {

    planTegning = 1  //1. sal
    
    } else if(advInput.value == inputArray[3]){

    planTegning = 2; //2. sal
    
    } else if(advInput.value == inputArray[4]){

    planTegning = 3; //3. sal
    
    } 

    // }

    }

}