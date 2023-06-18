let num1 = 0;
let num2;
let operand;
let total = 0;

let display;
let clearBtn;

function Clear() {
    total = 0;
    num1 = 0;
    num2 = undefined;
    operand = undefined;
    display.innerText = total;
    clearBtn.innerText = "AC";
}

function ChangeSign() {
    total *= -1;
    display.innerText = total;
}

function ToPercent() {
    total /= 100;
    display.innerText = total;
}

function Operand(op) {
    if(total === 0) {
        total = num1;
        operand = op;
    }
}

function Number(num) {
    if(num1 != 0) {
        display.innerText += num;
        num1 = parseFloat(display.innerText);
        console.log("2FUCK");
    }
    else {
        display.innerText = num;
        num1 = parseFloat(display.innerText);
        console.log("FUCK");
    }
    clearBtn.innerText = "C";
    console.log(num1);
}

function main() {
    display = document.getElementById("calc-result-text");
    clearBtn = document.getElementById("clear-btn");
    display.innerText = total;
}

main();
