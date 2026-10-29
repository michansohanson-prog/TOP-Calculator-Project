/*=======
Need to update state logic:
when a number is finalized into num1 with an operator, the new display needs to take the next numbers and update the display to = num2.

So, you need to register the variable first, then update the display, not the other way around.

Use "total" alongside the data array, or add it to the array. 

SO - refacor each button to update display based on the var.  each click needs to add to the num1 string, etc.

Probably a good idea to think about consolidating even listeners?
 ==========*/

let num1 = "0";
let num2 = "num2Empty";
let op = "opEmpty";
getData();
// let data = [num1, op, num2];

function getData() {
	console.log([`${num1}, ${op}, ${num2},`]);
}

const total = function calc(n1, op, n2) {
	let numA = Number(n1);
	let numB = Number(n2);

	switch (op) {
		case "+":
			return String(numA + numB);
		case "-":
			return String(numA - numB);
		case "*":
			return String(numA * numB);
		case "/":
			if (numB === 0) {
				return "Inconceivable!";
			}
			return String(numA / numB);
		// default:
		// 	return numB;
	}
};

let one = document.querySelector("#one");

one.addEventListener("click", (e) => {
	if (display.textContent.length > 18) {
		console.log("TOO LONG");
	} else {
		if (op !== "opEmpty") {
			if (num2 === "num2Empty") {
				num2 = "1";
				display.textContent = num2;
			} else {
				num2 += "1";
				display.textContent = num2;
			}
		} else if (num1 === "0") {
			num1 = "1";
			display.textContent = "1";
		} else {
			num1 += "1";
			display.textContent = num1;
		}
	}
	getData();
});

let dot = document.querySelector("#dot");
dot.addEventListener("click", (e) => {
	if (display.textContent.length > 18) {
		console.log("TOO LONG");
	} else if (num2.includes(".")) {
		console.log("ALREADY HAVE A DOT");
	} else if (op !== "opEmpty" && num2 === "num2Empty") {
		num2 = "0.";
		display.textContent = num2;
	} else if (op !== "opEmpty") {
		num2 += ".";
		display.textContent = num2;
	} else if (num1.includes(".")) {
		console.log("ALREADY HAVE A DOT");
	} else if (num1 === "0") {
		num1 = "0.";
		display.textContent = num1;
	} else {
		num1 += ".";
		display.textContent = num1;
	}

	getData();
});

let clear = document.querySelector("#clear");
clear.addEventListener("click", (e) => {
	display.textContent = "0";
	num1 = "0";
	op = "opEmpty";
	num2 = "num2Empty";
	display.textContent = num1;
	getData();
});

let back = document.querySelector("#back");

let plus = document.querySelector("#plus");
plus.addEventListener("click", (e) => {
	if (num2 !== "num2Empty") {
		num1 = display.textContent = total(num1, op, num2);
		num2 = "num2Empty";
	}
	op = "+";
	getData();
});

let minus = document.querySelector("#minus");
let times = document.querySelector("#times");
let divBy = document.querySelector("#divBy");

let equals = document.querySelector("#equals");

let display = document.querySelector("#display");
