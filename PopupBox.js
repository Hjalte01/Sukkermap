var popupBoxContainer = document.getElementById("popupBox");
var btnOpen = document.getElementById("btnOpen");
var xClose = document.getElementsByClassName("xClose")[0];
var tilbageBtn = document.getElementById("arrowBtn");
var defaultBtn = document.getElementsByClassName("content-divider-sections defaultBtn")[0];
var hjælpereNavigation = document.getElementById("hjælpereNavigation");
var hjælpereContainer = document.getElementById("hjælpereContainer");
var hjælperekoordinater = document.getElementById("hjælperekoordinater");
var hastighedPil = document.getElementById("hastighedPil").value / 500;
document.getElementById("hastighedPilLabel").textContent = hastighedPil * 500 + "%";

var gridContainer = {
    selectoren: document.getElementsByClassName("grid-container one")[0],
    farverOgHastigheder: document.getElementsByClassName("grid-container two farverOgHastigheder")[0],
    animation: document.getElementsByClassName("grid-container two animation")[0],
    hjælp: document.getElementsByClassName("grid-container one hjælp")[0],
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
    områder: document.getElementsByClassName("containerForCheckbox områder")[0],
}
// hjælp selectoren
var hjælpSelect = {
    hjælp: document.getElementsByClassName("content-divider-sections hjælp")[0],
    forbedringer: document.getElementsByClassName("content-divider-sections forbedringerBtn")[0],
    koordinater: document.getElementsByClassName("content-divider-sections koordinaterBtn")[0],
}



// local storage
window.onload = function(){
    animationSelect.navbarProject.onclick();
    animationSelect.områder.onclick();
    farveSelect.rute.onchange(localStorage.getItem("farveInp.rute"));
    farveSelect.vejledningsPil.onchange(localStorage.getItem("farveInp.vejledningsPil"));
    farveSelect.etagePil.onchange(localStorage.getItem("farveInp.etagePil"));
    document.getElementById("hastighedPil").oninput(localStorage.getItem("hastighedPil"));

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

// skifter farve på ruten iforhold til select
farveSelect.rute.onchange = function (localStorageContent) {
    if(typeof localStorageContent === "string") farveSelect.rute.selectedIndex = localStorage.getItem("farveSelect.rute.selectedIndex");

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
        if(localStorage.getItem("farveSelect.rute.selectedIndex") != 5){
            andetFarveInp.rute.click();
        } else {
            farveInp.rute = localStorage.getItem("farveInp.rute");
        }
    }
    localStorage.setItem("farveSelect.rute.selectedIndex", farveSelect.rute.selectedIndex);
    localStorage.setItem("farveInp.rute", farveInp.rute);
    
};
//skifter farve iforhold til inputtet "anden farve"
andetFarveInp.rute.onchange = function () {
    farveInp.rute = andetFarveInp.rute.value;
    localStorage.setItem("farveInp.rute", farveInp.rute);
};

// skifter farve på vejledsnings-pilen iforhold til select
farveSelect.vejledningsPil.onchange = function (localStorageContent) {
    if(typeof localStorageContent === "string") farveSelect.vejledningsPil.selectedIndex = localStorage.getItem("farveSelect.vejledningsPil.selectedIndex");

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
        if(localStorage.getItem("farveSelect.vejledningsPil.selectedIndex") != 5){
            andetFarveInp.vejledningsPil.click();
        } else {
            farveInp.vejledningsPil = localStorage.getItem("farveInp.vejledningsPil");
        }
    }
    localStorage.setItem("farveSelect.vejledningsPil.selectedIndex", farveSelect.vejledningsPil.selectedIndex);
    localStorage.setItem("farveInp.vejledningsPil", farveInp.vejledningsPil);

}
//skifter farve iforhold til inputtet "anden farve"
andetFarveInp.vejledningsPil.onchange = function () {
    farveInp.vejledningsPil = andetFarveInp.vejledningsPil.value;
    localStorage.setItem("farveInp.vejledningsPil", farveInp.vejledningsPil);
};

// skifter farve på etage-pilene iforhold til select
farveSelect.etagePil.onchange = function (localStorageContent) {
    if(typeof localStorageContent === "string") farveSelect.etagePil.selectedIndex = localStorage.getItem("farveSelect.etagePil.selectedIndex");

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
        if(localStorage.getItem("farveSelect.etagePil.selectedIndex") != 5){
            andetFarveInp.etagePil.click();
        } else {
            farveInp.etagePil = localStorage.getItem("farveInp.etagePil");
        }
    }
    localStorage.setItem("farveSelect.etagePil.selectedIndex", farveSelect.etagePil.selectedIndex);
    localStorage.setItem("farveInp.etagePil", farveInp.etagePil);
}
//skifter farve iforhold til inputtet "anden farve"
andetFarveInp.etagePil.onchange = function () {
    farveInp.etagePil = andetFarveInp.etagePil.value + "75";
    localStorage.setItem("farveInp.etagePil", farveInp.etagePil);
};

// Hastighed på vejlednings - pilen
document.getElementById("hastighedPil").oninput = function (localStorageContent) {
    if(typeof localStorageContent === "string") {
        hastighedPil = localStorageContent;
        document.getElementById("hastighedPil").value = hastighedPil * 500;
    }else{
       hastighedPil = document.getElementById("hastighedPil").value / 500; 
    }
    

    document.getElementById("hastighedPilLabel").textContent = hastighedPil * 500 + "%";
    localStorage.setItem("hastighedPil", hastighedPil);
};




//ANIMATION SELECTOREN --- SELECTOREN --- 
animationSelect.animation.onclick = function() {
    gridContainer.selectoren.style.display = "none";
    gridContainer.animation.style.display = "grid";
    tilbageBtn.style.visibility = "visible";
}
// on/off animation på navbar i om projectet.js
animationSelect.navbarProject.onclick = function() {
    if(typeof localStorage.getItem("animationSelect.navbarProject") !== "string") {
        animationSelect.navbarProject.children[0].textContent = "On";
    } else if(animationSelect.navbarProject.children[0].textContent == "start"){
        animationSelect.navbarProject.children[0].textContent = localStorage.getItem("animationSelect.navbarProject");
    } else if(localStorage.getItem("animationSelect.navbarProject") == "On"){
        animationSelect.navbarProject.children[0].textContent = "Off";
    } else if(localStorage.getItem("animationSelect.navbarProject") == "Off"){
        animationSelect.navbarProject.children[0].textContent = "On";
    } 


    if(animationSelect.navbarProject.children[0].textContent == "On"){
        animationSelect.navbarProject.style.background = "green";
    } else {
        animationSelect.navbarProject.style.background = "red"
    }
    localStorage.setItem("animationSelect.navbarProject", animationSelect.navbarProject.children[0].textContent);
}

// on/off animation på områder i index.js
animationSelect.områder.onclick = function() {
    if(typeof localStorage.getItem("animationSelect.områder") !== "string") {
        animationSelect.områder.children[0].textContent = "On";
    } else if(animationSelect.områder.children[0].textContent == "start"){
        animationSelect.områder.children[0].textContent = localStorage.getItem("animationSelect.områder");
    } else if(localStorage.getItem("animationSelect.områder") == "On"){
        animationSelect.områder.children[0].textContent = "Off";
    } else if(localStorage.getItem("animationSelect.områder") == "Off"){
        animationSelect.områder.children[0].textContent = "On";
    } 


    if(animationSelect.områder.children[0].textContent == "On"){
        animationSelect.områder.style.background = "green";
    } else {
        animationSelect.områder.style.background = "red"
    }
    localStorage.setItem("animationSelect.områder", animationSelect.områder.children[0].textContent);
}

//HjÆLP SELECTOREN
//Knap for indstillinger til hjælp med kordinatter
hjælpSelect.hjælp.onclick = function() {
    gridContainer.selectoren.style.display = "none";
    gridContainer.hjælp.style.display = "grid";
    tilbageBtn.style.visibility = "visible";
}
// forbedringer knap
hjælpSelect.forbedringer.onclick = function () {
    popupBoxContainer.style.display = "";
    containerForInputs.style.display = "";
    window.open(
        "https://docs.google.com/forms/d/e/1FAIpQLSep8enf79hcOt7ceU7cjjck3FUsWZuqNVXYul5Xf5ZrG9XI3g/viewform?usp=pp_url&entry.1017160509=",
        "_blank"
    );
};
//tilføj lokaler knap
hjælpSelect.koordinater.onclick = function () {
    popupBoxContainer.style.display = "";
    containerForInputs.style.display = "";
    hjælpereNavigation.style.display = "block";
};
//Sender en over til sheet formel med koordinater på ens tryk
hjælpereNavigation.onclick = function () {
    hjælpereNavigation.style.display = "";
    document.body.style.overflow = "unset";
    window.open(
        "https://docs.google.com/forms/d/e/1FAIpQLSep8enf79hcOt7ceU7cjjck3FUsWZuqNVXYul5Xf5ZrG9XI3g/viewform?usp=pp_url&entry.1017160509=" +
            `Koordinater(${floor(mouseX)}, ${floor(mouseY)})`,
        "_blank"
    );
};


// DEFAULT SELECTOREN
defaultBtn.onclick = function() {
    localStorage.clear();
    location.reload();
    return false;
};

