let num1 = 0;
let operand;
let value = 0;

let display;
let clearBtn;

function Clear() {
  value = 0;
  num1 = 0;
  operand = "";
  display.innerText = value;
  clearBtn.innerText = "AC";
}

function ChangeSign() {
  value *= -1;
  display.innerText = value;
}

function ToPercent() {
  value /= 100;
  display.innerText = value;
}

function Operand(op) {
  if (operand == op) {
    return;
  }
  operand = op;
  num1 = value;
  value = 0;
}

function Equals() {
  if (operand === "") {
    return;
  }
  switch (operand) {
    case "+":
      value = num1 + value;
      break;
    case "-":
      value = num1 - value;
      break;
    case "x":
      value = num1 * value;
      break;
    case "÷":
      value = num1 / value;
      break;
  }

  num1 = value;
  display.innerText = value;
  operand = "";
}

function Number(num) {
  if (value != 0) {
    display.innerText += num;
    value = parseFloat(display.innerText);
  } else {
    value = parseFloat(num);
    display.innerText = value;
  }
  clearBtn.innerText = "C";
}

function Add() {}

function main() {
  display = document.getElementById("calc-result-text");
  clearBtn = document.getElementById("clear-btn");
  display.innerText = value;
}

main();
