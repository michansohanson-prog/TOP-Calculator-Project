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
let display = document.querySelector("#display");
getData();

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
let two = document.querySelector("#two");
two.addEventListener("click", (e) => {
	if (display.textContent.length > 18) {
		console.log("TOO LONG");
	} else {
		if (op !== "opEmpty") {
			if (num2 === "num2Empty") {
				num2 = "2";
				display.textContent = num2;
			} else {
				num2 += "2";
				display.textContent = num2;
			}
		} else if (num1 === "0") {
			num1 = "2";
			display.textContent = "2";
		} else {
			num1 += "2";
			display.textContent = num1;
		}
	}
	getData();
});
let three = document.querySelector("#three");
three.addEventListener("click", (e) => {
	if (display.textContent.length > 18) {
		console.log("TOO LONG");
	} else {
		if (op !== "opEmpty") {
			if (num2 === "num2Empty") {
				num2 = "3";
				display.textContent = num2;
			} else {
				num2 += "3";
				display.textContent = num2;
			}
		} else if (num1 === "0") {
			num1 = "3";
			display.textContent = "3";
		} else {
			num1 += "3";
			display.textContent = num1;
		}
	}
	getData();
});
let four = document.querySelector("#four");
four.addEventListener("click", (e) => {
	if (display.textContent.length > 18) {
		console.log("TOO LONG");
	} else {
		if (op !== "opEmpty") {
			if (num2 === "num2Empty") {
				num2 = "4";
				display.textContent = num2;
			} else {
				num2 += "4";
				display.textContent = num2;
			}
		} else if (num1 === "0") {
			num1 = "4";
			display.textContent = "4";
		} else {
			num1 += "4";
			display.textContent = num1;
		}
	}
	getData();
});
let five = document.querySelector("#five");
five.addEventListener("click", (e) => {
	if (display.textContent.length > 18) {
		console.log("TOO LONG");
	} else {
		if (op !== "opEmpty") {
			if (num2 === "num2Empty") {
				num2 = "5";
				display.textContent = num2;
			} else {
				num2 += "5";
				display.textContent = num2;
			}
		} else if (num1 === "0") {
			num1 = "5";
			display.textContent = "5";
		} else {
			num1 += "5";
			display.textContent = num1;
		}
	}
	getData();
});
let six = document.querySelector("#six");
six.addEventListener("click", (e) => {
	if (display.textContent.length > 18) {
		console.log("TOO LONG");
	} else {
		if (op !== "opEmpty") {
			if (num2 === "num2Empty") {
				num2 = "6";
				display.textContent = num2;
			} else {
				num2 += "6";
				display.textContent = num2;
			}
		} else if (num1 === "0") {
			num1 = "6";
			display.textContent = "6";
		} else {
			num1 += "6";
			display.textContent = num1;
		}
	}
	getData();
});
let seven = document.querySelector("#seven");
seven.addEventListener("click", (e) => {
	if (display.textContent.length > 18) {
		console.log("TOO LONG");
	} else {
		if (op !== "opEmpty") {
			if (num2 === "num2Empty") {
				num2 = "7";
				display.textContent = num2;
			} else {
				num2 += "7";
				display.textContent = num2;
			}
		} else if (num1 === "0") {
			num1 = "7";
			display.textContent = "7";
		} else {
			num1 += "7";
			display.textContent = num1;
		}
	}
	getData();
});
let eight = document.querySelector("#eight");
eight.addEventListener("click", (e) => {
	if (display.textContent.length > 18) {
		console.log("TOO LONG");
	} else {
		if (op !== "opEmpty") {
			if (num2 === "num2Empty") {
				num2 = "8";
				display.textContent = num2;
			} else {
				num2 += "8";
				display.textContent = num2;
			}
		} else if (num1 === "0") {
			num1 = "8";
			display.textContent = "8";
		} else {
			num1 += "8";
			display.textContent = num1;
		}
	}
	getData();
});
let nine = document.querySelector("#nine");
nine.addEventListener("click", (e) => {
	if (display.textContent.length > 18) {
		console.log("TOO LONG");
	} else {
		if (op !== "opEmpty") {
			if (num2 === "num2Empty") {
				num2 = "9";
				display.textContent = num2;
			} else {
				num2 += "9";
				display.textContent = num2;
			}
		} else if (num1 === "0") {
			num1 = "9";
			display.textContent = "9";
		} else {
			num1 += "9";
			display.textContent = num1;
		}
	}
	getData();
});
let zero = document.querySelector("#zero");
zero.addEventListener("click", (e) => {
	if (display.textContent.length > 18) {
		console.log("TOO LONG");
	} else {
		if (op !== "opEmpty") {
			if (num2 === "num2Empty") {
				num2 = "0";
				display.textContent = num2;
			} else {
				num2 += "0";
				display.textContent = num2;
			}
		} else if (num1 === "0") {
			num1 = "0";
			display.textContent = "0";
		} else {
			num1 += "0";
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
minus.addEventListener("click", (e) => {
	if (num2 !== "num2Empty") {
		num1 = display.textContent = total(num1, op, num2);
		num2 = "num2Empty";
	}
	op = "-";
	getData();
});

let times = document.querySelector("#times");
times.addEventListener("click", (e) => {
	if (num2 !== "num2Empty") {
		num1 = display.textContent = total(num1, op, num2);
		num2 = "num2Empty";
	}
	op = "*";
	getData();
});

let divBy = document.querySelector("#divBy");
divBy.addEventListener("click", (e) => {
	if (num2 !== "num2Empty") {
		num1 = display.textContent = total(num1, op, num2);
		num2 = "num2Empty";
	}
	op = "/";
	getData();
});

let equals = document.querySelector("#equals");
