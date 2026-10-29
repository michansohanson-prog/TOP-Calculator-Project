[DISPLAY 19 DIGITS]
[7] [8] [9] [/] [Back]
[4] [5] [6] [*]
[1] [2] [3] [-]
[0] [.] [C] [+] [=]

# Variables

- data (stores num1, num2, and op)
- calc - runs the calculation in data; fills total; copies total to num1, clears num2
- total - is fed from calc

- num1 - stores number
- num2 - stores number
- op - stores operator

- one - if (!op): add to num1; if (op): add to num2
- two
- three
- four
- five
- six
- seven
- eight
- nine
- zero
- dot - only works when entering a number; and only once

- clear - starts over; num1 = 0
- back - only works when entering num1 or num2

- plus - adds to array; if array is full; runs calc, displays total, moves total to num1
- minus - adds to array; if array is full; runs calc, displays total, moves total to num1
- times - adds to array; if array is full; runs calc, displays total, moves total to num1
- divBy - adds to array; if array is full; runs calc, displays total, moves total to num1
- equals - only works if array is full; runs calc, displays total, moves total to num1

## Other Functionality

- =========================
  However, if you want to keep your current HTML exactly as it is, you can absolutely still use Event Delegation! Instead of checking if an element matches "button", we can check if it has a specific attribute or class.
  The cleanest way to handle this without changing your structural layout is to use HTML5 data-\* attributes.

🛠️ Step 1: Add data-type and data-value to your HTML

By adding these attributes, your JavaScript instantly knows exactly what kind of element was clicked and what math value it carries, without needing to check 16 different IDs.
html

<div id="nums">
    <!-- Numbers get data-type="num" and their actual numeric value -->
    <h1 id="seven" data-type="num" data-value="7">7</h1>
    <h1 id="eight" data-type="num" data-value="8">8</h1>
    <h1 id="nine" data-type="num" data-value="9">9</h1>
    <!-- Operators get data-type="op" and their operator symbol -->
    <h1 id="divBy" data-type="op" data-value="/">/</h1>
    
    <h1 id="four" data-type="num" data-value="4">4</h1>
    <h1 id="five" data-type="num" data-value="5">5</h1>
    <h1 id="six" data-type="num" data-value="6">6</h1>
    <h1 id="times" data-type="op" data-value="*">*</h1>
    
    <h1 id="one" data-type="num" data-value="1">1</h1>
    <h1 id="two" data-type="num" data-value="2">2</h1>
    <h1 id="three" data-type="num" data-value="3">3</h1>
    <h1 id="minus" data-type="op" data-value="-">-</h1>
    
    <h1 id="zero" data-type="num" data-value="0">0</h1>
    <h1 id="dot" data-type="num" data-value=".">.</h1>
    <!-- Utilities get data-type="util" -->
    <h1 id="clear" data-type="util" data-value="clear">C</h1>
    <h1 id="plus" data-type="op" data-value="+">+</h1>
</div>
<div id="funcs">
    <h3 id="back" data-type="util" data-value="back"><----Back</h3>
    <h1 id="equals" data-type="util" data-value="equals">=</h1>
</div>
Use code with caution.

🚀 Step 2: Write One Listener for Everything

Now, instead of selecting every h1 and h3, you only need to select their parent container (#calc). When a user clicks anywhere inside the calculator, the click bubbles up, and we can read the data-type attribute.
javascript
let num1 = "";
let num2 = "";
let op = "";
let clearOnNextInput = false; // Helps clear the screen after pressing equals

const display = document.querySelector("#display");
const calcContainer = document.querySelector("#calc");

// One single event listener to rule them all
calcContainer.addEventListener("click", (e) => {
const target = e.target;

// If they clicked the gap/background container instead of a key, ignore it
if (!target.dataset.type) return;

const type = target.dataset.type;
const value = target.dataset.value;

// 1. HANDLE NUMBERS & DECIMAL
if (type === "num") {
if (display.textContent === "0" || clearOnNextInput) {
display.textContent = "";
clearOnNextInput = false;
}

    // Prevent multiple decimals in a single number sequence
    if (value === "." && display.textContent.includes(".")) return;

    display.textContent += value;

}

// 2. HANDLE OPERATORS (+, -, \*, /)
if (type === "op") {
num1 = display.textContent;
op = value;
clearOnNextInput = true; // Next number typed clears the screen for num2
console.log(`Saved num1: ${num1}, Operator: ${op}`);
}

// 3. HANDLE UTILITIES (Clear, Back, Equals)
if (type === "util") {
if (value === "clear") {
num1 = "";
num2 = "";
op = "";
display.textContent = "0";
}

    else if (value === "back") {
      // Remove the last character, fallback to "0" if empty
      display.textContent = display.textContent.slice(0, -1) || "0";
    }

    else if (value === "equals") {
      if (!num1 || !op) return;
      num2 = display.textContent;

      // Call your core math execution function here
      // let result = operate(op, Number(num1), Number(num2));
      // display.textContent = result;

      clearOnNextInput = true;
    }

}
});
Use code with caution.

🎨 What about the CSS active colors?

Since you are using h1 and h3 tags, you can target them all smoothly in your style.css using their parent wrapper and the :active pseudo-class.
css
/_ Grabs all h1 and h3 tags inside your calculator _/
#calc h1, #calc h3 {
background-color: white;
color: black;
cursor: pointer; /_ Makes it feel like a button _/
user-select: none; /_ Prevents text from highlighting on double clicks _/
transition: background 0.1s ease;
}

/_ Replaces your mousedown/mouseup JS logic completely _/
#calc h1:active, #calc h3:active {
background-color: black;
color: white;
}
