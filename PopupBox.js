var popupBox = document.getElementById("popupBox");
var btnOpen = document.getElementById("btnOpen");
var xClose = document.getElementById("xBtn");
var colorInp = document.getElementById("colorInp");

var farveInp = "rgb(255, 0, 0)";
var farveSelect = document.getElementById('farveRute');
var option;


farveSelect.onchange = function(){
    farveSelect = document.getElementById('farveRute');
    option = farveSelect.options[farveSelect.selectedIndex];

    console.log(option.value);
    if (option.value == "pink") {
        farveInp = "rgb(255, 0, 200)";
    } else if (option.value == "blå") {
        farveInp = "rgb(0, 0, 200)";
    } else if (option.value == "grøn") {
        farveInp = "rgb(0, 200, 0)";
    } else if (option.value == "rød") {
        farveInp = "rgb(200, 0, 0)";
    } else if (option.value == "orange"){
        farveInp = "rgb(255,165,0)";
    }
}


colorInp.onchange = function(){
    farveInp = colorInp.value;
    console.log("change");
}



//Hvis man trykker på indstilling ikonet, så kommer der en popup box
btnOpen.onclick = function() {
    popupBox.style.display = "block";
}

//Hvis man klikker på kryds ikonet, så lukker den
xClose.onclick = function() {
    popupBox.style.display = "none";
}

// Hvis man klikker udenfor popup Boxen, så lukker den
window.onclick = function(event) {
    if (event.target == popupBox){
        popupBox.style.display = "none";
    }
}
