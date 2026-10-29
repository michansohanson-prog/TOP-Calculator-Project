/*=======
Need to update state logic:
when a number is finalized into num1 with an operator, the new display needs to take the next numbers and update the display to = num2.

So, you need to register the variable first, then update the display, not the other way around.

Use "total" alongside the data array, or add it to the array. 

SO - refacor each button to update display based on the var.  each click needs to add to the num1 string, etc.

Probably a good idea to think about consolidating even listeners?
 ==========*/

let num1 = 0;
let num2 = "num2Clear";
let op = "opClear";
let total;
let showDisplay;

// let data = [num1, op, num2];

function getData() {
	console.log([
		`num1 ${num1}, op ${op}, num2 ${num2}, showDisplay ${showDisplay}`,
	]);
}

function calc(n1, op, n2) {
	let numA = Number(n1);
	let numB = Number(n2);

	switch (op) {
		case "+":
			return numA + numB;
		case "-":
			return numA - numB;
		case "*":
			return numA * numB;
		case "/":
			if (numB === 0) {
				return "Inconceivable!";
			}
			return numA / numB;
		default:
			return numB;
	}
}

let one = document.querySelector("#one");
one.addEventListener("click", (e) => {
	if (display.textContent.length > 18) {
		console.log("TOO LONG");
	} else {
		if (display.textContent === "0") {
			showDisplay = display.textContent = "1";
		} else {
			showDisplay = display.textContent += "1";
		}
	}
	num1 = display.textContent;
	getData();
});

let two = document.querySelector("#two");
two.addEventListener("click", (e) => {
	if (display.textContent.length > 18) {
		console.log("TOO LONG");
	} else {
		if (display.textContent === "0") {
			showDisplay = display.textContent = "2";
		} else {
			showDisplay = display.textContent += "2";
		}
	}
	num1 = display.textContent;
	getData();
});

let three = document.querySelector("#three");
three.addEventListener("click", (e) => {
	if (display.textContent.length > 18) {
		console.log("TOO LONG");
	} else {
		if (display.textContent === "0") {
			showDisplay = display.textContent = "3";
		} else {
			showDisplay = display.textContent += "3";
		}
	}
	num1 = display.textContent;
	getData();
});

let four = document.querySelector("#four");
four.addEventListener("click", (e) => {
	if (display.textContent.length > 18) {
		console.log("TOO LONG");
	} else {
		if (display.textContent === "0") {
			showDisplay = display.textContent = "4";
		} else {
			showDisplay = display.textContent += "4";
		}
	}
	num1 = display.textContent;
	getData();
});

let five = document.querySelector("#five");
five.addEventListener("click", (e) => {
	if (display.textContent.length > 18) {
		console.log("TOO LONG");
	} else {
		if (display.textContent === "0") {
			showDisplay = display.textContent = "5";
		} else {
			showDisplay = display.textContent += "5";
		}
	}
	num1 = display.textContent;
	getData();
});

let six = document.querySelector("#six");
six.addEventListener("click", (e) => {
	if (display.textContent.length > 18) {
		console.log("TOO LONG");
	} else {
		if (display.textContent === "0") {
			showDisplay = display.textContent = "6";
		} else {
			showDisplay = display.textContent += "6";
		}
	}
	num1 = display.textContent;
	getData();
});

let seven = document.querySelector("#seven");
seven.addEventListener("click", (e) => {
	if (display.textContent.length > 18) {
		console.log("TOO LONG");
	} else {
		if (display.textContent === "0") {
			showDisplay = display.textContent = "7";
		} else {
			showDisplay = display.textContent += "7";
		}
	}
	num1 = display.textContent;
	getData();
});

let eight = document.querySelector("#eight");
eight.addEventListener("click", (e) => {
	if (display.textContent.length > 18) {
		console.log("TOO LONG");
	} else {
		if (display.textContent === "0") {
			showDisplay = display.textContent = "8";
		} else {
			showDisplay = display.textContent += "8";
		}
	}
	num1 = display.textContent;
	getData();
});

let nine = document.querySelector("#nine");
nine.addEventListener("click", (e) => {
	if (display.textContent.length > 18) {
		console.log("TOO LONG");
	} else {
		if (display.textContent === "0") {
			showDisplay = display.textContent = "9";
		} else {
			showDisplay = display.textContent += "9";
		}
	}
	num1 = display.textContent;
	getData();
});

let zero = document.querySelector("#zero");
zero.addEventListener("click", (e) => {
	if (display.textContent.length > 18) {
		console.log("TOO LONG");
	} else {
		if (display.textContent === "0") {
			showDisplay = display.textContent = "0";
		} else {
			showDisplay = display.textContent += "0";
		}
	}
	num1 = display.textContent;
	getData();
});

let dot = document.querySelector("#dot");
dot.addEventListener("click", (e) => {
	if (display.textContent.length > 18) {
		console.log("TOO LONG");
	} else {
		if (display.textContent.includes(".")) {
			console.log("ALREADY HAVE A DOT");
		} else {
			showDisplay = display.textContent += ".";
		}
	}
	num1 = display.textContent;
	getData();
});

let clear = document.querySelector("#clear");
clear.addEventListener("click", (e) => {
	display.textContent = "0";
	num1 = 0;
	showDisplay = 0;
	getData();
});

let back = document.querySelector("#back");

let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let times = document.querySelector("#times");
let divBy = document.querySelector("#divBy");

let equals = document.querySelector("#equals");

let display = document.querySelector("#display");
