var popupBoxContainer = document.getElementById("popupBox");
var btnOpen = document.getElementById("btnOpen");
var xClose = document.getElementById("xBtn");
var hjælpBtn = document.getElementById("hjælpBtn");
var hjælpereNavigation = document.getElementById("hjælpereNavigation");
var hjælpereContainer = document.getElementById("hjælpereContainer");
var hjælperekoordinater = document.getElementById("hjælperekoordinater");
var hastighedPil = document.getElementById("hastighedPil").value / 500;
document.getElementById("hastighedPilLabel").textContent = hastighedPil * 500 + "%";
var farveInp = {
    rute: "rgb(255,0,0)",
    pil: "rgb(0, 255, 0)"
}
var farveSelect = {
    rute:  document.getElementById("farveRute"),
    pil: document.getElementById("farvePil")
}
var option = {
    rute: farveSelect.rute.options[farveSelect.rute.selectedIndex],
    pil: farveSelect.pil.options[farveSelect.pil.selectedIndex]
}
var andetFarveInp = {
    rute: document.getElementById("farveRute").parentNode.querySelector("#colorInp"),
    pil: document.getElementById("farvePil").parentNode.querySelector("#colorInp")
}


// Hastighed på pilen
document.getElementById("hastighedPil").oninput = function () {
    hastighedPil = document.getElementById("hastighedPil").value / 500;
    document.getElementById("hastighedPilLabel").textContent = hastighedPil * 500 + "%";
};

// skifter farve på ruten iforhold til select
farveSelect.rute.onchange = function () {
    option.rute = farveSelect.rute.options[farveSelect.rute.selectedIndex];

    if (option.rute.value == "pink") {
        farveInp.rute = "rgb(255, 0, 200)";
    } else if (option.rute.value == "blå") {
        farveInp.rute = "rgb(0, 0, 200)";
    } else if (option.rute.value == "grøn") {
        farveInp.rute = "rgb(0, 200, 0)";
    } else if (option.rute.value == "rød") {
        farveInp.rute = "rgb(200, 0, 0)";
    } else if (option.rute.value == "orange") {
        farveInp.rute = "rgb(255,165,0)";
    } else if (option.rute.value == "anden farve") {
        andetFarveInp.rute.click();
    }
};

farveSelect.pil.onchange = function () {
    option.pil = farveSelect.pil.options[farveSelect.pil.selectedIndex];

    if (option.pil.value == "pink") {
        farveInp.pil = "rgb(255, 0, 200)";
    } else if (option.pil.value == "blå") {
        farveInp.pil = "rgb(0, 0, 200)";
    } else if (option.pil.value == "grøn") {
        farveInp.pil = "rgb(0, 200, 0)";
    } else if (option.pil.value == "rød") {
        farveInp.pil = "rgb(200, 0, 0)";
    } else if (option.pil.value == "orange") {
        farveInp.pil = "rgb(255,165,0)";
    } 
    else if (option.pil.value == "anden farve") {
        andetFarveInp.pil.click();
    }
}

//skifter farve iforhold til inputtet anden farve
andetFarveInp.rute.onchange = function () {
    farveInp.rute = andetFarveInp.rute.value;
};
andetFarveInp.pil.onchange = function () {
    farveInp.pil = andetFarveInp.pil.value;
};



//Hvis man trykker på indstilling ikonet, så kommer der en popup box
btnOpen.onclick = function () {
    popupBoxContainer.style.display = "flex";
    document.body.style.overflow = "hidden";
};

//Hvis man klikker på kryds ikonet, så lukker den
xClose.onclick = function () {
    popupBoxContainer.style.display = "";
    document.body.style.overflow = "unset";
};

// Hvis man klikker udenfor popup Boxen, så lukker den
window.onclick = function (event) {
    if (event.target == popupBoxContainer) {
        popupBoxContainer.style.display = "";
        document.body.style.overflow = "unset";
    } else if (event.target == hjælpereContainer) {
        hjælpereContainer.style.display = "";
        document.body.style.overflow = "unset";
    }
};

//Knap for indstillinger til hjælp med kordinatter
hjælpBtn.onclick = function () {
    popupBoxContainer.style.display = "";
    hjælpereNavigation.style.display = "block";
    containerForInputs.style.display = "";
};

hjælpereNavigation.onclick = function () {
    hjælpereNavigation.style.display = "";
    document.body.style.overflow = "unset";
    window.open(
        "https://docs.google.com/forms/d/e/1FAIpQLSep8enf79hcOt7ceU7cjjck3FUsWZuqNVXYul5Xf5ZrG9XI3g/viewform?usp=pp_url&entry.1017160509=" +
            `Koordinater(${floor(mouseX)}, ${floor(mouseY)})`,
        "_blank"
    );
};
