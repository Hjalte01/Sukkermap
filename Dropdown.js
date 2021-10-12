var boolInput = true;
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.addEventListener("click", function (e) {
    if (!e.target.matches(".dropbtn") && !e.target.matches(".arrow")) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains("show")) {
            myDropdown.classList.remove("show");
        }
    } else if (
        !e.target.matches(".dropbtnForInputs") &&
        !e.target.matches(".arrow")
    ) {
        var myDropdown = document.getElementById("containerForInputs");
        if (myDropdown.classList.contains("show")) {
            myDropdown.classList.remove("show");
        }
    }
});

function dropDownPhone() {
    if (boolInput) {
        // document.getElementById("containerForInputs").classList.toggle("show");
        document.getElementById("containerForInputs").style.display = "block";
        boolInput = false;
    } else {
        document.getElementById("containerForInputs").style.display = "none";
        boolInput = true;
    }
}
