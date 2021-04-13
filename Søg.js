var advInput;
var inputArray = [
'Administrationen', 
'Atriumgården',
'Auditoriet', 
'Biografen',
'Biologi', 
'Fysik', 
'Kemi',
'Metalværstedet',
'Studievejledning',
'Træværkstedet',
'Tårnet'] 



class Søg {

    inputfelt(){
     advInput = document.getElementById("listInput") //tager id fra datalist i html filen
    // for(let i = 0; inputArray.length > i; i++){ // Kører array igennem ved hjælp af loop
    // kan ikke se hvad loopet gør, men man kunne bruge det ved at indtaste i inputArray[i]
    // Dog skal man lave en if statement for, hvad plantegningen er lig med, ved ikke om det
    // er den dur du er ude efter.

    var qqqq =document.getElementById("valgList").options.length; //længden af hvor mange option der er i vores inputliste

      for(let qqq = 0; qqq < qqqq; qqq++){

      var advInputArray = document.getElementById(qqq).value; //Den her loop kører alle value af datalisten igenne

      // Hvis du kigger i html filen, så kan du se at jeg har skrevet en id som er mummre i hver option value

      console.log(advInputArray); // output alle datalisten
      // Det var det nemmeste løsning jeg kunne finde indtil videre. Du kan selvfølgelig ændre navne på variablerne, der jeg bare doven til at give dem et godt navn
        // Håber det vil hjælpe lidt :)
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