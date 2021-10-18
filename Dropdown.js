// Close the dropdown if the user clicks outside of it
window.addEventListener("click", function (e) {
    var myDropdown = document.getElementById("myDropdown");
    var containerForInputs = document.getElementById("containerForInputs");

    if (containerForInputs != "none" || myDropdown != "none") {
        if (containerForInputs != "none") {
            if (!e.target.matches("displayContainerForInputs")) {
                containerForInputs = "none";
            }
        } else {
            if (!e.target.matches("dropdown-content")) {
                myDropdown = "none";
            }
        }
    }
});

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    var myDropdown = document.getElementById("myDropdown");

    if (myDropdown.style.display == "none") {
        myDropdown.style.display = "block";
    } else {
        myDropdown.style.display = "none";
    }
}

function dropDownPhone() {
    var containerForInputs = document.getElementById("containerForInputs");

    if (containerForInputs.style.display == "none") {
        containerForInputs.style.display = "block";
    } else {
        containerForInputs.style.display = "none";
    }
}
