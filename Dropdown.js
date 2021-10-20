// Close the dropdown if the user clicks outside of it
window.addEventListener("click", function (e) {
    var myDropdown = document.getElementById("myDropdown");
    var containerForInputs = document.getElementById("containerForInputs");
    
    if(containerForInputs === undefined || containerForInputs === null){ // i andre html'er end index
        if(myDropdown.style.display != "" && !e.target.matches(".dropbtn") && !e.target.matches(".dropbtn .arrow.down") && !e.target.matches(".dropdown-content")){
            myDropdown.style.display = "";
        }
    } else if (containerForInputs.style.display != "" || myDropdown.style.display != "") { // i index, da index både har links til andre html og knap til at åbne alle inputs/indstillinger/osv.

        // if (containerForInputs.style.display != "" && !e.target.matches(".dropbtnForInputs") && !e.target.matches(".displayContainerForInputs")) {
        //     containerForInputs.style.display = "";
        //     containerForInputsNothingFunc();
        // } else 
        if(myDropdown.style.display != "" && !e.target.matches(".dropbtn") && !e.target.matches(".dropbtn .arrow.down") && !e.target.matches(".dropdown-content")){
            myDropdown.style.display = "";
        }
    }
});

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    var myDropdown = document.getElementById("myDropdown");

    if (myDropdown.style.display == "") {
        myDropdown.style.display = "block";
    } else {
        myDropdown.style.display = "";
    }
}

function dropDownPhone() {
    var containerForInputs = document.getElementById("containerForInputs");

    if (containerForInputs.style.display == "") {
        containerForInputs.style.display = "block";

        containerForInputsBlockFunc();
    } else {
        containerForInputs.style.display = "";

        containerForInputsNothingFunc();
    }
}

function containerForInputsNothingFunc() {
    var containerForInputsKnap = document.getElementById("dropbtnForInputs");

    containerForInputsKnap.style.position = "relative";
    containerForInputsKnap.style.top = "0";
    containerForInputsKnap.style.zIndex = "0";
    document.querySelectorAll(".down")[1].style.transform = "rotate(45deg)";
    document.querySelectorAll(".arrow")[1].style.margin = "0";
}

function containerForInputsBlockFunc(){
    var containerForInputsKnap = document.getElementById("dropbtnForInputs");

    containerForInputsKnap.style.transition = "all 2s";

    containerForInputsKnap.style.position = "absolute";    
    containerForInputsKnap.style.bottom = "0";
    containerForInputsKnap.style.zIndex = "2";
    containerForInputsKnap.style.top = "";

    document.querySelectorAll(".down")[1].style.transform = "rotate(225deg)";
    document.querySelectorAll(".arrow")[1].style.margin = "0.7rem";
}

