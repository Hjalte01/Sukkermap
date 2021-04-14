var advInput1;
var advInput2
var valgArray1;
var optionsLength;



class Søg {

    inputfelt(){
    advInput1 = document.getElementById("listInput1").value; //tager id fra datalist i html filen
    advInput2 = document.getElementById("listInput2").value;
    // for(let i = 0; inputArray.length > i; i++){ // Kører array igennem ved hjælp af loop
    // kan ikke se hvad loopet gør, men man kunne bruge det ved at indtaste i inputArray[i]
    // Dog skal man lave en if statement for, hvad plantegningen er lig med, ved ikke om det
    // er den dur du er ude efter.
    optionsLength = document.getElementById("valgList1").options.length; //længden af hvor mange option der er i vores inputliste
    // var valgArray2 = document.getElementById("valgList1").options.length;
      if(valgArray1 == undefined){
          valgArray1 = [];

          for(let i = 0; i < optionsLength; i++){
              valgArray1.push(document.getElementById(i).value);
          }
      }  //Den her loop kører alle value af datalisten igenne
      // Hvis du kigger i html filen, så kan du se at jeg har skrevet en id som er mummre i hver option value

      // console.log(advInputArray); // output alle datalisten
      // Det var det nemmeste løsning jeg kunne finde indtil videre. Du kan selvfølgelig ændre navne på variablerne, der jeg bare doven til at give dem et godt navn
        // Håber det vil hjælpe lidt :)
      

  for(let i = 0; i < valgArray1.length; i ++){
            if(advInput1 == valgArray1[i]) inputStart = advInput1;
            if(advInput2 == valgArray1[i]) inputEnd = advInput2;
            if(inputStart != undefined && inputEnd != undefined){
              document.getElementById("listInput1").value = "";
              document.getElementById("listInput2").value = "";
            } 
  }


  // if(advInput.value == inputArray[1]){  

  //   planTegning = 0;  //Stuen

  // } else if(advInput.value == inputArray[2]) {

  //   planTegning = 1  //1. sal
    
  //   } else if(advInput.value == inputArray[3]){

  //   planTegning = 2; //2. sal
    
  //   } else if(advInput.value == inputArray[4]){

  //   planTegning = 3; //3. sal
    
  //   } 

  //   // }

     }

}