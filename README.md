# TOP-Calculator-Project

TOP Foundations final project: Calculator

## Almost done

I just realized I didn't add keyboard functionality.

### ToDo:

- keyboard functionality
- add color and other styling
- maybe another mini screen showing the active operator currently being used and/or display the num1 and num2 values.

## Must contain:

- add
- subtract
- multiply
- divide
- numbers 0 through 9
- a **dot**
- an **equals** button
- a **clear** button
- a **backspace** button
- a **Display** (set max chars; fill with dummy at first)
- **keyboard support**

## Functionality

**Number,** **Operator,** **Number**

- (Create 3 variables for this)

**Function**

- takes the numbers and does the math
- **equals** button displays the result
- _Maybe the initial clear state and the dispaly on **equals** should be set to num1_
- only 2 numbers at a time
- num1 + op + num2 {if another op is pressed, display the total, which becomes num1}
- if a result is displayed; pressing a number should clear the data and start fresh
- if pressing **equals** at the wrong time, ensure it doesn't break
- if pressing consecutive operators, just change the stored operation
- if pressing operator other weird time, ensure it's ok.
- Math.round to a max number of digits (to avoid overflowing the display)
- functions that update the **Number** variables when clicked (or typed on keyboard)
- display should also update with each keypress
- **clear** button should clear all data and start fresh
- if divide by 0; display a snarky message and then reset the calc
- ensure the **dot** can only be entered once per number
- ensure the **backspace** button only works when entering a number

## Hardest part:

- store all of the values and call the operate function

### TOP directions from website:

Your calculator is going to contain functions for all of the basic math operators you typically find on calculators, so start by creating functions for the following items and testing them in your browser’s console:
add
subtract
multiply
divide
A calculator operation will consist of a number, an operator, and another number. For example, 3 + 5. Create three variables, one for each part of the operation. You’ll use these variables to update your display later.
Create a new function operate that takes an operator and two numbers and then calls one of the above functions on the numbers.
Create a basic HTML calculator with buttons for each digit and operator (including =).
Don’t worry about making them functional just yet.
There should also be a display for the calculator. Go ahead and fill it with some dummy numbers so it looks correct.
Add a “clear” button.
Create the functions that update one of your number variables when the calculator’s digit buttons are clicked. Your calculator’s display should also update to reflect the value of that number variable.
Make the calculator work! You’ll need to store the first and second numbers input by the user and then operate() on them when the user presses the = button, according to the operator that was selected between the numbers.
You should already have the code that can populate the display, so once operate has been called, update the display with the result of the operation.
This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.
Gotchas: watch out for and fix these bugs if they show up in your code:
Your calculator should not evaluate more than a single pair of numbers at a time. For example, this is how your calculator should function:
Enter a number (12).
Enter an operator (+).
Enter a second number (7).
Enter a second operator (-). At this point, it should evaluate the initial pair of numbers (12 + 7), then display the result (19).
Enter another number (1).
Enter another operator or equals sign (=). At this point, it should use the previous result (19) as the first number, the operator (-), and the new number (1) to calculate the new equation 19 - 1. You should see the result (18) on the display.
To see what this looks like in action, feel free to input the equation we just explained 12 + 7 - 1 = into this online calculator.
You should round answers with long decimals so that they don’t overflow the display.
Pressing = before entering all of the numbers or an operator could cause problems!
Pressing “clear” should wipe out any existing data. Make sure the user is really starting fresh after pressing “clear”.
Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!
Make sure that your calculator only runs an operation when supplied with two numbers and an operator by the user. Example: you enter a number (2), followed by an operator button (+). You press the operator button (+) a second consecutive time. Your calculator should not evaluate this as (2 + 2) and should not display the result (4). If consecutive operator buttons are pressed, your calculator should not run any evaluations, it should only take the last operator entered to be used for the next operation.
When a result is displayed, pressing a new digit should clear the result and start a new calculation instead of appending the digit to the existing result. Check whether this is the case on your calculator!
Extra credit
Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though, like: 12.3.56.5. Disable the . button if there’s already a decimal separator in the display.
Add a “backspace” button, so the user can undo their last input if they click the wrong number.
Add keyboard support!
