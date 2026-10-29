let num1;
let num2;
let op;

let data = [num1, op, num2];

let calc;

let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let zero = document.querySelector("#zero");
let dot = document.querySelector("#dot");

let clear = document.querySelector("#clear");
clear.addEventListener("mousedown", (e) => {
	clear.style.backgroundColor = "black";
});
clear.addEventListener("mouseup", (e) => {
	clear.style.backgroundColor = "white";
});
clear.addEventListener("mouseleave", (e) => {
	clear.style.backgroundColor = "white";
});
clear.addEventListener("click", (e) => {
	display.textContent = "0";
});

let back = document.querySelector("#back");

let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let times = document.querySelector("#times");
let divBy = document.querySelector("#divBy");

let equals = document.querySelector("#equals");

let display = document.querySelector("#display");
