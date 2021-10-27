var popupBoxContainer = document.getElementById("popupBox");
var btnOpen = document.getElementById("btnOpen");
var xClose = document.getElementsByClassName("xClose")[0];
var tilbageBtn = document.getElementById("arrowBtn");
var hjælpBtn = document.getElementsByClassName("content-divider-sections hjælpBtn")[0];
var hjælpereNavigation = document.getElementById("hjælpereNavigation");
var hjælpereContainer = document.getElementById("hjælpereContainer");
var hjælperekoordinater = document.getElementById("hjælperekoordinater");
var hastighedPil = document.getElementById("hastighedPil").value / 500;
document.getElementById("hastighedPilLabel").textContent = hastighedPil * 500 + "%";

var gridContainer = {
    selectoren: document.getElementsByClassName("grid-container one")[0],
    farverOgHastigheder: document.getElementsByClassName("grid-container two farverOgHastigheder")[0],
    animation: document.getElementsByClassName("grid-container two animation")[0],
}
// farve/hastighed selectoren
var farveSelect = {
    farverOgHastigheder: document.getElementsByClassName("content-divider-sections farverOgHastigheder")[0],
    rute:  document.getElementById("farveRute"),
    ruteOption: document.getElementById("farveRute").options[document.getElementById("farveRute").selectedIndex],
    vejledningsPil: document.getElementById("farveVejledningsPil"),
    vejledningsPilOption: document.getElementById("farveVejledningsPil").options[document.getElementById("farveVejledningsPil").selectedIndex],
    etagePil: document.getElementById("farveEtagePil"),
    etagePilOption: document.getElementById("farveEtagePil").options[document.getElementById("farveEtagePil").selectedIndex],
}
var farveInp = {
    rute: "rgb(255,0,0)",
    vejledningsPil: "rgb(0, 255, 0)",
    etagePil: "rgba(255, 0, 0, 0.5)",
}
var andetFarveInp = {
    rute: document.getElementById("farveRute").parentNode.querySelector("#colorInp"),
    vejledningsPil: document.getElementById("farveVejledningsPil").parentNode.querySelector("#colorInp"),
    etagePil: document.getElementById("farveEtagePil").parentNode.querySelector("#colorInp"),
    
}
// animation selectoren
var animationSelect = {
    animation: document.getElementsByClassName("content-divider-sections animation")[0],
    navbarProject: document.getElementsByClassName("containerForCheckbox navbarProject")[0],
}

window.onload = function(){
    animationSelect.navbarProject.onclick(localStorage.getItem("animationSelect.navbarProject"));
}


//Indstiling boxen
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

tilbageBtn.onclick = function(){
    Object.values(gridContainer).forEach(val => {
        if(val.style.display != "none" && val.style.display != ""){
            val.style.display = "none";
            gridContainer.selectoren.style.display = "grid";
            tilbageBtn.style.visibility = "hidden";
        }
    });


}

//FARVE OG HASTIGHED --- SELECTOREN --- 
farveSelect.farverOgHastigheder.onclick = function() {
    gridContainer.selectoren.style.display = "none";
    gridContainer.farverOgHastigheder.style.display = "grid";
    tilbageBtn.style.visibility = "visible";
}

// Hastighed på vejlednings - pilen
document.getElementById("hastighedPil").oninput = function () {
    hastighedPil = document.getElementById("hastighedPil").value / 500;
    document.getElementById("hastighedPilLabel").textContent = hastighedPil * 500 + "%";
};


// skifter farve på ruten iforhold til select
farveSelect.rute.onchange = function () {
    farveSelect.ruteOption = farveSelect.rute.options[farveSelect.rute.selectedIndex];

    if (farveSelect.ruteOption.value == "pink") {
        farveInp.rute = "rgb(255, 0, 200)";
    } else if (farveSelect.ruteOption.value == "blå") {
        farveInp.rute = "rgb(0, 0, 200)";
    } else if (farveSelect.ruteOption.value == "grøn") {
        farveInp.rute = "rgb(0, 200, 0)";
    } else if (farveSelect.ruteOption.value == "rød") {
        farveInp.rute = "rgb(200, 0, 0)";
    } else if (farveSelect.ruteOption.value == "orange") {
        farveInp.rute = "rgb(255,165,0)";
    } else if (farveSelect.ruteOption.value == "anden farve") {
        andetFarveInp.rute.click();
    }
};
//skifter farve iforhold til inputtet "anden farve"
andetFarveInp.rute.onchange = function () {
    farveInp.rute = andetFarveInp.rute.value;
};

// skifter farve på vejledsnings-pilen iforhold til select
farveSelect.vejledningsPil.onchange = function () {
    farveSelect.vejledningsPilOption = farveSelect.vejledningsPil.options[farveSelect.vejledningsPil.selectedIndex];

    if (farveSelect.vejledningsPilOption.value == "pink") {
        farveInp.vejledningsPil = "rgb(255, 0, 200)";
    } else if (farveSelect.vejledningsPilOption.value == "blå") {
        farveInp.vejledningsPil = "rgb(0, 0, 200)";
    } else if (farveSelect.vejledningsPilOption.value == "grøn") {
        farveInp.vejledningsPil = "rgb(0, 200, 0)";
    } else if (farveSelect.vejledningsPilOption.value == "rød") {
        farveInp.vejledningsPil = "rgb(200, 0, 0)";
    } else if (farveSelect.vejledningsPilOption.value == "orange") {
        farveInp.vejledningsPil = "rgb(255,165,0)";
    } 
    else if (farveSelect.vejledningsPilOption.value == "anden farve") {
        andetFarveInp.vejledningsPil.click();
    }
}
//skifter farve iforhold til inputtet "anden farve"
andetFarveInp.vejledningsPil.onchange = function () {
    farveInp.vejledningsPil = andetFarveInp.vejledningsPil.value;
};

// skifter farve på etage-pilene iforhold til select
farveSelect.etagePil.onchange = function () {
    farveSelect.etagePilOption = farveSelect.etagePil.options[farveSelect.etagePil.selectedIndex];

    if (farveSelect.etagePilOption.value == "pink") {
        farveInp.etagePil = "rgba(255, 0, 200, 0.5)";
    } else if (farveSelect.etagePilOption.value == "blå") {
        farveInp.etagePil = "rgba(0, 0, 200, 0.5)";
    } else if (farveSelect.etagePilOption.value == "grøn") {
        farveInp.etagePil = "rgba(0, 200, 0, 0.5)";
    } else if (farveSelect.etagePilOption.value == "rød") {
        farveInp.etagePil = "rgba(200, 0, 0, 0.5)";
    } else if (farveSelect.etagePilOption.value == "orange") {
        farveInp.etagePil = "rgba(255, 165 ,0 , 0.5)";
    } 
    else if (farveSelect.etagePilOption.value == "anden farve") {
        andetFarveInp.etagePil.click();
    }
}
//skifter farve iforhold til inputtet "anden farve"
andetFarveInp.etagePil.onchange = function () {
    farveInp.etagePil = andetFarveInp.etagePil.value + "75";
};



//ANIMATION SELECTOREN --- SELECTOREN --- 
animationSelect.animation.onclick = function() {
    gridContainer.selectoren.style.display = "none";
    gridContainer.animation.style.display = "grid";
    tilbageBtn.style.visibility = "visible";
}
// on/off animation på navbar i om projectet
animationSelect.navbarProject.onclick = function(localStorageContent) {

    if(localStorageContent == "Off" || animationSelect.navbarProject.children[0].textContent == "On" && typeof localStorageContent !== "string"){
        animationSelect.navbarProject.children[0].textContent = "Off";
        animationSelect.navbarProject.style.background = "red";
    }else{
        animationSelect.navbarProject.children[0].textContent = "On";
        animationSelect.navbarProject.style.background = "green";
    }
    localStorage.setItem("animationSelect.navbarProject", animationSelect.navbarProject.children[0].textContent);
}



//HjÆLP SELECTOREN
//Knap for indstillinger til hjælp med kordinatter
hjælpBtn.onclick = function () {
    popupBoxContainer.style.display = "";
    hjælpereNavigation.style.display = "block";
    containerForInputs.style.display = "";
};
//Sender en over til sheet formel, som hjælper os
hjælpereNavigation.onclick = function () {
    hjælpereNavigation.style.display = "";
    document.body.style.overflow = "unset";
    window.open(
        "https://docs.google.com/forms/d/e/1FAIpQLSep8enf79hcOt7ceU7cjjck3FUsWZuqNVXYul5Xf5ZrG9XI3g/viewform?usp=pp_url&entry.1017160509=" +
            `Koordinater(${floor(mouseX)}, ${floor(mouseY)})`,
        "_blank"
    );
};

