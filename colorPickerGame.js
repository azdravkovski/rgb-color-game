var colors = generateColors(numSquares);
var numSquares = 6;
var squares = document.querySelectorAll(".square");
var chosenColor = chooseColor();
var colorDisplay = document.getElementById("colorDisp");
var msg = document.getElementById("msg");
var h1 = document.querySelector("h1");
var resetBtn = document.getElementById("reset");
var easyBtn = document.getElementById("easy");
var hardBtn = document.getElementById("hard");

function init() {
	setup();
	reset();
	colorDisplay.textContent = chosenColor;
}

init();

easyBtn.addEventListener("click", function () {
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateColors(numSquares);
	chosenColor = chooseColor();
	colorDisplay.textContent = chosenColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.background = colors[i]
		} else {
			squares[i].style.display = "none";
		}
	}
})

hardBtn.addEventListener("click", function () {
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateColors(numSquares);
	chosenColor = chooseColor();
	colorDisplay.textContent = chosenColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i]
		squares[i].style.display = "block";
	}
})

function reset() {
	//	generate new colors
	colors = generateColors(numSquares);
	//pick new random color
	chosenColor = chooseColor();
	//change colorDisplay to match chosenColor
	colorDisplay.textContent = chosenColor;
	this.textContent = "New Colors";
	msg.textContent = "";
	//change square colors
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
}

resetBtn.addEventListener("click", reset);


function setup() {
	for (var i = 0; i < squares.length; i++) {
		//initial color (hardcoded)
		squares[i].style.background = colors[i];
		//click listeners to squares
		squares[i].addEventListener("click", function () {
			//store color of clicked square0
			var clicked = this.style.background;
			if (clicked === chosenColor) {
				msg.textContent = "Correct!"
				resetBtn.textContent = "Another round?";
				changeColors(chosenColor);
				h1.style.background = chosenColor;
			} else {
				this.style.background = "#323232";
				msg.textContent = "Wrong!";
			}
		});
	}
}

function changeColors(color) {
	//loop through all squares
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.background = color;
	}
}

function chooseColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateColors(num) {
	//make an array
	var arr = [];
	//repeat num times
	for (var i = 0; i < num; i++) {
		//get random color and push to arr
		arr.push(randomColor()); //since function returns value, it is pushed to array
	}
	//return array
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}
