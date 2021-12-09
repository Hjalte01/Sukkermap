var myDropdown = document.getElementById("myDropdown");
var containerForInputs = document.getElementById("containerForInputs");
var containerForInputsKnap = document.getElementById("dropbtnForInputs");
var indexHtml;
// Close the dropdown if the user clicks outside of it
window.addEventListener("click", function (e) {
  // var myDropdown = document.getElementById("myDropdown");

  if (myDropdown.style.display != "") {
    // i index, da index både har links til andre html og knap til at åbne alle inputs/indstillinger/osv.
    if (
      myDropdown.style.display != "" &&
      !e.target.matches(".dropbtn") &&
      !e.target.matches(".dropbtn .arrow.down") &&
      !e.target.matches(".dropdown-content")
    ) {
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


function dropDownPhone(e, arr, func) {

    if(e.keyCode == arr[0] || e.keyCode == arr[1] || e.keyCode == arr[2]){
        func();
        console.log("func");
    }
}

function containerForInputsFunc() {
    if (containerForInputs.style.display == "") {
        containerForInputs.style.display = "block";
        document.querySelector(".displayContainerForInputs").style.transition = "transform 1s";
        document.querySelector(".displayContainerForInputs").style.transform = "translateY(0%)";
        document.querySelector(".dropbtnForInputs#dropbtnForInputs").style.background = "orange";


        containerForInputsBlockFunc();
    } else {
        containerForInputs.style.display = "";
        document.querySelector(".displayContainerForInputs").style.transform = "translateY(-100%)";
        document.querySelector(".dropbtnForInputs#dropbtnForInputs").style.background = "green";

        containerForInputsNothingFunc();
    }
    // document.querySelector("#focus-remove").focus();

}

function containerForInputsNothingFunc() {
  containerForInputsKnap.style.position = "relative";
  // containerForInputsKnap.style.top = "0";

  document.querySelectorAll(".down")[1].style.transform = "rotate(45deg)";
  document.querySelectorAll(".arrow")[1].style.margin = "0";
  document.querySelectorAll(".arrow")[1].style.marginBottom = "9px";
}

function containerForInputsBlockFunc() {

  containerForInputsKnap.style.position = "relative";
  // containerForInputsKnap.style.bottom = "0";
  // containerForInputsKnap.style.top = "";


  document.querySelectorAll(".down")[1].style.transform = "rotate(225deg)";
  document.querySelectorAll(".arrow")[1].style.margin = "0";
  document.querySelectorAll(".arrow")[1].style.marginTop = "9px";
}

var today = new Date();
var dateYear = today.getFullYear();
var copyrightText =
  " Copyright © Sukkermap 2020-" +
  dateYear.toString() +
  " Hjalte Bjoernstrup & Joshua Calba All Rights Reserved";
//Copyright © Sukkermap 2020 - Hjalte Bjoernstrup & Joshua Calba All Rights Reserved

document.getElementById("copyrightText").innerHTML = copyrightText;




document.querySelector(".navbar div:nth-of-type(1)").addEventListener("click", indexRefresh);




function indexRefresh() {
    document.querySelector(".navbar div:nth-of-type(1) img").style.transform = "scale(0)";
    
    if(indexHtml == true){
        window.location.href = "index.html";
    }else {
        window.location.href = "../index.html";
    }
}