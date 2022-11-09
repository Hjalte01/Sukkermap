indexHtml = true
let kortImg
var planTegningImg
let canvasHeightDiff = 0.4933
var arraySetup
var ydreTing
var indreTing
var planTegning = undefined
var figurer = []
var søgefelt
var indreBygninger = []
var ellipseCord = {
	x: undefined,
	y: undefined
}
var GpsInterval
var scrollGap
var arraySetup = new Arrays().aStarArray();


function setup() {
	myCanvas = createCanvas(1500 * 0.75, 1500 * 0.4933 * 0.75)
	myCanvas.parent("canvasErHer")

	for (let i = 0; i <= 15; i++) {
		//tilføj en figur
		figurer[i] = new YdreBygning() //personlig countdown lav en ny figur, uden argument for ingen countdown
	}

	ydreTing = new YdreBygning()
	indreTing = new IndreBygning()
	arraySetup = new Arrays()
	indreBygninger = [indreTing.stue, indreTing.sal1, indreTing.sal2, indreTing.sal3]
	søgefelt = new Søg()
}

function draw() {
	clear()
	canvasZoom = screen.width

	if (planTegning != undefined) {
		indreTing.indreBygningCanvas()
	} else {
		ydreTing.ydreBygningCanvas()
	}

	søgefelt.inputfelt()

	if (localStorage.getItem("animationSelect.Gps") === "On" && ellipseCord.x != undefined && ellipseCord.y != undefined) {
		drawingCord()
	}
}

function preload() {
	kortImg = loadImage("img/sukkertoppen.jpg") //kortet
	stueImg = loadImage("img/stue.png") //stue
	sal1Img = loadImage("img/1.sal.png") //1.sal
	sal2Img = loadImage("img/2.sal.png") //2.sal
	sal3Img = loadImage("img/3.sal.png") //3.sal
	planTegningImg = loadImage("img/plantegningIcon.png")
}

function drawingCord() {
	push()
	fill(0, 128, 255)
	strokeWeight(2)
	rotate((53 * PI) / 180)
	for (let i = 14; i >= 0; i -= 13) {
		ellipse(ellipseCord.x, ellipseCord.y, i, i)
	}
	pop()
}

function cordLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.watchPosition(showPosition, error, options) //, error, options
	} else {
		console.log("Geolocation is not supported by this browser.")
	}
}

var options = {
	enableHighAccuracy: true,
	timeout: Number.POSITIVE_INFINITY,
	maximumAge: Number.POSITIVE_INFINITY
}

function error(err) {
	console.warn(`ERROR(${err.code}): ${err.message}`)
}

function showPosition(position) {
	var cord = {
		startX: 55.654655,
		startY: 12.515207,
		slutX: 55.653053,
		slutY: 12.516776,
		width: 0,
		height: 0
	}
	cord.width = (cord.startX - cord.slutX) * 1000000
	cord.height = (cord.startY - cord.slutY) * 1000000

	//           0: bio oppe hjørne      1: bio venstre hjørn    2: bio nedre hjørne    3: bio højre hjørne      4: indgang midte       5: canvas start              6: canvas slut
	// var test = [
	// 	[55.654509, 12.515428],
	// 	[55.654489, 12.51511],
	// 	[55.65431, 12.515137],
	// 	[55.654308, 12.515463],
	// 	[55.654026, 12.515952],
	// 	[cord.startX, cord.startY],
	// 	[cord.slutX, cord.slutY]
	// ]

	testX = position.coords.latitude
	testY = position.coords.longitude

	var cordAspectRatio = {
		x: width / cord.width,
		y: height / cord.height
	}

	ellipseCord.x = (cord.startX - testX) * 1000000 * cordAspectRatio.x
	ellipseCord.y = (testY - cord.startY) * 1000000 * cordAspectRatio.y

	// console.log(ellipseCord.x.toFixed(0) + ", " + ellipseCord.y.toFixed(0));
}

animationSelect.Gps.children[0].onchange = function () {
	if (localStorage.getItem("animationSelect.Gps") === "On") {
		GpsInterval = setInterval(function () {
			cordLocation()
		}, 4000)
	} else {
		clearInterval(GpsInterval)
	}
}

var _0xde15 = ["\x74\x65\x73\x74\x63\x65\x6E\x74\x65\x72"]
var easterEgg = _0xde15[0]