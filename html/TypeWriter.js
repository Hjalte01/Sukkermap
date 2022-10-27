//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_typewriter
var i = 0
var ii = 0
var txt = "Kontakt os via vores email:"
var emailTxt = " sukkermapnext@gmail.com"
var speed = 30

window.onload = function typeWriter() {
	if (i < txt.length) {
		document.getElementById("typeWriter1").innerHTML += txt.charAt(i)

		i++
		setTimeout(typeWriter, speed)
	} else if (ii < emailTxt.length) {
		document.getElementById("email").innerHTML += emailTxt.charAt(ii)
		ii++
		setTimeout(typeWriter, speed)
	}
}
