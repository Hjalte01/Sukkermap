var popupBox = document.getElementById("popupBox");

var btnOpen = document.getElementById("btnOpen");

var xClose = document.getElementById("xBtn");

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

// function update() {
//     var select = document.getElementById('farveRute');
//     var option = select.options[select.selectedIndex];

//     // document.getElementById('value').value = option.value;
//     // document.getElementById('text').value = option.text;

//     console.log(option.value);


// }

// update();