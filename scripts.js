//Andrea's Calculator

var currentInput = "0";
var total = 0;
var firstNumber = "0";
var secondNumber = "0";
var operator = null;

//Print what user clicks
$(".number").on("click", function(event){
	var buttonPressed = $( this ).text();
	console.log(buttonPressed);

	if (currentInput === "0" ||  operator != null) { 
		currentInput = buttonPressed;
	} else {
		currentInput = currentInput + buttonPressed;
	}
	$("#display").html(currentInput);
});

//Clear the screen
$("#clear").on("click", function(event) {
	currentInput = "0";
	$("#display").html(currentInput);
});

//Capture operator and define firstNumber
$(".operator").on("click", function(event) {
	operator = $( this ).text();
	console.log("The operator is" + operator);
	if(firstNumber === "0") {
		firstNumber = currentInput;
		console.log("firstNumber is " + firstNumber);
	} else {
		console.log("It's broken")
	}
});

//Make decimal point work

//Print total
$(".equals").on("click", function(event) {
	secondNumber = currentInput;
	total = doMath();
	console.log("The total is " + total);
	$("#display").html(total);
});

//Calculate total
function doMath() {
	var a = parseFloat(firstNumber);
	var b = parseFloat(secondNumber);
	if(operator === "+") {
		return a + b;
	} else if(operator === "-") {
		return a - b;
	} else if(operator === "*") {
		return a * b;
	} else if(operator === "/") {
		return a / b;
	}
}







