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
let calculated;
getData();

function getData() {
	console.log([`${num1}, ${op}, ${num2},`]);
}

function cleanResult(num) {
	if (!isFinite(num)) return "Error";
	if (
		Math.abs(num) > 999999999999999 ||
		(Math.abs(num) < 0.000001 && num !== 0)
	) {
		return String(Number(num.toPrecision(10)));
	}
	let fixed = Number(num.toFixed(10));

	return String(fixed);
}
const total = function calc(n1, ops, n2) {
	let numA = Number(n1);
	let numB = Number(n2);
	let result;

	switch (ops) {
		case "+":
			result = numA + numB;
			break;
		case "-":
			result = numA - numB;
			break;
		case "*":
			result = numA * numB;
			break;
		case "/":
			if (numB === 0) {
				op = "opEmpty";
				num2 = "num2Empty";
				num1 = "0";
				return "Inconceivable!";
			}
			result = numA / numB;
			break;
		default:
			return "0";
	}
	return cleanResult(result);
};

let one = document.querySelector("#one");
one.addEventListener("click", (e) => {
	if (display.textContent.length > 15) {
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
			if (calculated === "yes") {
				num1 = "1";
				display.textContent = num1;
				calculated = "no";
			} else {
				num1 += "1";
				display.textContent = num1;
			}
		}
	}
	getData();
});

let two = document.querySelector("#two");
two.addEventListener("click", (e) => {
	if (display.textContent.length > 15) {
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
			if (calculated === "yes") {
				num1 = "2";
				display.textContent = num1;
				calculated = "no";
			} else {
				num1 += "2";
				display.textContent = num1;
			}
		}
	}
	getData();
});

let three = document.querySelector("#three");
three.addEventListener("click", (e) => {
	if (display.textContent.length > 15) {
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
			if (calculated === "yes") {
				num1 = "3";
				display.textContent = num1;
				calculated = "no";
			} else {
				num1 += "3";
				display.textContent = num1;
			}
		}
	}
	getData();
});

let four = document.querySelector("#four");
four.addEventListener("click", (e) => {
	if (display.textContent.length > 15) {
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
			if (calculated === "yes") {
				num1 = "4";
				display.textContent = num1;
				calculated = "no";
			} else {
				num1 += "4";
				display.textContent = num1;
			}
		}
	}
	getData();
});
let five = document.querySelector("#five");
five.addEventListener("click", (e) => {
	if (display.textContent.length > 15) {
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
			if (calculated === "yes") {
				num1 = "5";
				display.textContent = num1;
				calculated = "no";
			} else {
				num1 += "5";
				display.textContent = num1;
			}
		}
	}
	getData();
});
let six = document.querySelector("#six");
six.addEventListener("click", (e) => {
	if (display.textContent.length > 15) {
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
			if (calculated === "yes") {
				num1 = "6";
				display.textContent = num1;
				calculated = "no";
			} else {
				num1 += "6";
				display.textContent = num1;
			}
		}
	}
	getData();
});
let seven = document.querySelector("#seven");
seven.addEventListener("click", (e) => {
	if (display.textContent.length > 15) {
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
			if (calculated === "yes") {
				num1 = "7";
				display.textContent = num1;
				calculated = "no";
			} else {
				num1 += "7";
				display.textContent = num1;
			}
		}
	}
	getData();
});
let eight = document.querySelector("#eight");
eight.addEventListener("click", (e) => {
	if (display.textContent.length > 15) {
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
			if (calculated === "yes") {
				num1 = "8";
				display.textContent = num1;
				calculated = "no";
			} else {
				num1 += "8";
				display.textContent = num1;
			}
		}
	}
	getData();
});
let nine = document.querySelector("#nine");
nine.addEventListener("click", (e) => {
	if (display.textContent.length > 15) {
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
			if (calculated === "yes") {
				num1 = "9";
				display.textContent = num1;
				calculated = "no";
			} else {
				num1 += "9";
				display.textContent = num1;
			}
		}
	}
	getData();
});
let zero = document.querySelector("#zero");
zero.addEventListener("click", (e) => {
	if (display.textContent.length > 15) {
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
			if (calculated === "yes") {
				num1 = "0";
				display.textContent = num1;
				calculated = "no";
			} else {
				num1 += "0";
				display.textContent = num1;
			}
		}
	}
	getData();
});

let dot = document.querySelector("#dot");
dot.addEventListener("click", (e) => {
	if (display.textContent.length > 15) {
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
		if (calculated === "yes") {
			num1 = ".";
			display.textContent = num1;
			calculated = "no";
		} else {
			num1 += ".";
			display.textContent = num1;
		}
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
back.addEventListener("click", (e) => {
	if (calculated === "yes") {
		return;
	}
	if (op !== "opEmpty" && num2 !== "num2Empty") {
		num2 = num2.slice(0, -1);
		if (num2 === "") {
			num2 = "num2Empty";
			display.textContent = num1;
		} else {
			display.textContent = num2;
		}
	} else if (op === "opEmpty") {
		num1 = num1.slice(0, -1);
		if (num1 === "") {
			num1 = "0";
		}
		display.textContent = num1;
	} else {
		console.log("Cannot backspace an active operator state.");
	}
	getData();
});

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
equals.addEventListener("click", (e) => {
	if (num2 === "num2Empty") {
		op = "opEmpty";
		equals.removeEventListener("click", (e) => {
			console.log("Nothing to calculate.");
		});
	} else {
		num1 = display.textContent = total(num1, op, num2);
		num2 = "num2Empty";
		calculated = "yes";
		op = "opEmpty";
	}
	getData();
});

document.addEventListener("keydown", (e) => {
	if (e.key === "1") {
		if (display.textContent.length > 15) {
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
				if (calculated === "yes") {
					num1 = "1";
					display.textContent = num1;
					calculated = "no";
				} else {
					num1 += "1";
					display.textContent = num1;
				}
			}
		}
	}
});
document.addEventListener("keydown", (e) => {
	if (e.key === "2") {
		if (display.textContent.length > 15) {
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
				if (calculated === "yes") {
					num1 = "2";
					display.textContent = num1;
					calculated = "no";
				} else {
					num1 += "2";
					display.textContent = num1;
				}
			}
		}
	}
});
document.addEventListener("keydown", (e) => {
	if (e.key === "3") {
		if (display.textContent.length > 15) {
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
				if (calculated === "yes") {
					num1 = "3";
					display.textContent = num1;
					calculated = "no";
				} else {
					num1 += "3";
					display.textContent = num1;
				}
			}
		}
	}
});
document.addEventListener("keydown", (e) => {
	if (e.key === "4") {
		if (display.textContent.length > 15) {
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
				if (calculated === "yes") {
					num1 = "4";
					display.textContent = num1;
					calculated = "no";
				} else {
					num1 += "4";
					display.textContent = num1;
				}
			}
		}
	}
});
document.addEventListener("keydown", (e) => {
	if (e.key === "5") {
		if (display.textContent.length > 15) {
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
				if (calculated === "yes") {
					num1 = "5";
					display.textContent = num1;
					calculated = "no";
				} else {
					num1 += "5";
					display.textContent = num1;
				}
			}
		}
	}
});
document.addEventListener("keydown", (e) => {
	if (e.key === "6") {
		if (display.textContent.length > 15) {
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
				if (calculated === "yes") {
					num1 = "6";
					display.textContent = num1;
					calculated = "no";
				} else {
					num1 += "6";
					display.textContent = num1;
				}
			}
		}
	}
});
document.addEventListener("keydown", (e) => {
	if (e.key === "7") {
		if (display.textContent.length > 15) {
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
				if (calculated === "yes") {
					num1 = "7";
					display.textContent = num1;
					calculated = "no";
				} else {
					num1 += "7";
					display.textContent = num1;
				}
			}
		}
	}
});
document.addEventListener("keydown", (e) => {
	if (e.key === "8") {
		if (display.textContent.length > 15) {
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
				if (calculated === "yes") {
					num1 = "8";
					display.textContent = num1;
					calculated = "no";
				} else {
					num1 += "8";
					display.textContent = num1;
				}
			}
		}
	}
});
document.addEventListener("keydown", (e) => {
	if (e.key === "9") {
		if (display.textContent.length > 15) {
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
				if (calculated === "yes") {
					num1 = "9";
					display.textContent = num1;
					calculated = "no";
				} else {
					num1 += "9";
					display.textContent = num1;
				}
			}
		}
	}
});
document.addEventListener("keydown", (e) => {
	if (e.key === "0") {
		if (display.textContent.length > 15) {
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
				if (calculated === "yes") {
					num1 = "0";
					display.textContent = num1;
					calculated = "no";
				} else {
					num1 += "0";
					display.textContent = num1;
				}
			}
		}

		getData();
	}
});

document.addEventListener("keydown", (e) => {
	if (e.key === ".") {
		if (display.textContent.length > 15) {
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
			if (calculated === "yes") {
				num1 = ".";
				display.textContent = num1;
				calculated = "no";
			} else {
				num1 += ".";
				display.textContent = num1;
			}
		}
		getData();
	}
});

document.addEventListener("keydown", (e) => {
	if (e.key === "Delete" || e.key === "Escape") {
		display.textContent = "0";
		num1 = "0";
		op = "opEmpty";
		num2 = "num2Empty";
		display.textContent = num1;
		getData();
	}
});

document.addEventListener("keydown", (e) => {
	if (e.key === "Backspace") {
		if (calculated === "yes") {
			return;
		}
		if (op !== "opEmpty" && num2 !== "num2Empty") {
			num2 = num2.slice(0, -1);
			if (num2 === "") {
				num2 = "num2Empty";
				display.textContent = num1;
			} else {
				display.textContent = num2;
			}
		} else if (op === "opEmpty") {
			num1 = num1.slice(0, -1);
			if (num1 === "") {
				num1 = "0";
			}
			display.textContent = num1;
		} else {
			console.log("Cannot backspace an active operator state.");
		}
		getData();
	}
});

document.addEventListener("keydown", (e) => {
	if (e.key === "+") {
		if (num2 !== "num2Empty") {
			num1 = display.textContent = total(num1, op, num2);
			num2 = "num2Empty";
		}
		op = "+";
		getData();
	}
});

document.addEventListener("keydown", (e) => {
	if (e.key === "-") {
		if (num2 !== "num2Empty") {
			num1 = display.textContent = total(num1, op, num2);
			num2 = "num2Empty";
		}
		op = "-";
		getData();
	}
});

document.addEventListener("keydown", (e) => {
	if (e.key === "*") {
		if (num2 !== "num2Empty") {
			num1 = display.textContent = total(num1, op, num2);
			num2 = "num2Empty";
		}
		op = "*";
		getData();
	}
});

document.addEventListener("keydown", (e) => {
	if (e.key === "/") {
		if (num2 !== "num2Empty") {
			num1 = display.textContent = total(num1, op, num2);
			num2 = "num2Empty";
		}
		op = "/";
		getData();
	}
});

document.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		if (num2 === "num2Empty") {
			op = "opEmpty";
			equals.removeEventListener("click", (e) => {
				console.log("Nothing to calculate.");
			});
		} else {
			num1 = display.textContent = total(num1, op, num2);
			num2 = "num2Empty";
			calculated = "yes";
			op = "opEmpty";
		}
		getData();
	}
});
