var myDropdown = document.getElementById("myDropdown");
var containerForInputs = document.getElementById("containerForInputs");
var containerForInputsKnap = document.getElementById("dropbtnForInputs");


// Close the dropdown if the user clicks outside of it
window.addEventListener("click", function (e) {
    // var myDropdown = document.getElementById("myDropdown");
    
     if (myDropdown.style.display != "") { // i index, da index både har links til andre html og knap til at åbne alle inputs/indstillinger/osv.
        if(myDropdown.style.display != "" && !e.target.matches(".dropbtn") && !e.target.matches(".dropbtn .arrow.down") && !e.target.matches(".dropdown-content")){
            myDropdown.style.display = "";
        }
    }
});

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {

    if (myDropdown.style.display == "") {
        myDropdown.style.display = "block";
    } else {
        myDropdown.style.display = "";
    }
}

function dropDownPhone() {

    if (containerForInputs.style.display == "") {
        containerForInputs.style.display = "block";

        containerForInputsBlockFunc();
    } else {
        containerForInputs.style.display = "";

        containerForInputsNothingFunc();
    }
}

function containerForInputsNothingFunc() {

    containerForInputsKnap.style.position = "relative";
    containerForInputsKnap.style.top = "0";
    containerForInputsKnap.style.zIndex = "0";
    document.querySelectorAll(".down")[1].style.transform = "rotate(45deg)";
    document.querySelectorAll(".arrow")[1].style.margin = "0";
    document.querySelectorAll(".arrow")[1].style.marginBottom = "9px";

}

function containerForInputsBlockFunc(){

    containerForInputsKnap.style.transition = "all 2s";

    containerForInputsKnap.style.position = "relative";    
    containerForInputsKnap.style.bottom = "0";
    containerForInputsKnap.style.zIndex = "2";
    containerForInputsKnap.style.top = "";

    document.querySelectorAll(".down")[1].style.transform = "rotate(225deg)";
    document.querySelectorAll(".arrow")[1].style.margin = "0";
    document.querySelectorAll(".arrow")[1].style.marginTop = "9px";
}

var today = new Date();
var dateYear = today.getFullYear();



if(document.getElementById("currentYear") != null) document.getElementById("currentYear").innerHTML = dateYear;


