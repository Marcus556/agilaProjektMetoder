import utils from './utils.js'
// elements //
const display = document.querySelector(".display");
const equalsBtn = document.getElementById("equalsButton");
const allClearBtn = document.getElementById("allClearBtn");
const entryClearBtn = document.getElementById("entryClearBtn");
const timerBtn = document.getElementById('timerBtn');
const storeBtn = document.getElementById("storeBtn");
const buttons = document.querySelector('.buttons');
const MathOperatorButtons = document.querySelectorAll('.math-operator-button')
const timerStopBtn = document.querySelector('.timerStopBtn')

// EventListeners //
equalsBtn.addEventListener("click", equalFunc);
allClearBtn.addEventListener("click", clearFunc);
entryClearBtn.addEventListener("click", entryClear);
timerBtn.addEventListener('click', startTimer);
timerStopBtn.addEventListener('click', stopTimer)
storeBtn.addEventListener("click", storeValue);
MathOperatorButtons.forEach((item) => {
    item.addEventListener('click', mathButtonFunc)
})

// Variables and consts //
let storage = [0, 0, 0, 0]
let timerActive = false;
let timerSeconds = 0o0;
let timerMinutes = 0o0;
let timer;
let calc = {
    ShowingValue: '',
    valueOne: "",
    operator: '',
    secondValue: false,
    result: false
};

// functions //
// clear everything
function clearFunc() {
    calc.ShowingValue = '',
        calc.valueOne = "",
        calc.operator = '',
        calc.secondValue = false,
        calc.result = false

    updateDisplay();
}
// 'sudda' funktion
function entryClear() {
    calc.ShowingValue = calc.ShowingValue.slice(0, -1);
    updateDisplay;
}

// update the display
function updateDisplay() {
    display.value = calc.ShowingValue;
}

function numberInput(button) {
    const { ShowingValue } = calc;
    calc.ShowingValue = ShowingValue === '0' ? button : ShowingValue + button;
    updateDisplay()
}
// timer funktionalitet
function startTimer() {
    if (timerActive == false) {
        timerActive = true;
        timerBtn.innerText = "0" + timerMinutes + ":" + "0" + timerSeconds;
        timer = setInterval(function () {
            timerSeconds++;
            // Slicar bort nollan när variablerna blir tvåsiffriga.
            timerBtn.innerText = ("0" + timerMinutes).slice(-2) + ":" + ("0" + timerSeconds).slice(-2);

            if (timerSeconds == 59) {
                timerSeconds = -1;
                timerMinutes++;
            }
            if (timerMinutes == 60) {
                timerActive = false;
                clearInterval(timer);
                timerSeconds = 0o0;
                timerMinutes = 0o0;
                timerBtn.innerText = "time's up! 60min passed!";
            }
            // 1000ms = 1sek.
        }, 1000)
    }
}
// stoppa och resetta timer
function stopTimer() {
    clearInterval(timer);
    timerActive = false;
    timerSeconds = 0;
    timerMinutes = 0;
    timerBtn.innerText = "timer";
}

//funktionalitet för att lagra ett tal
// addar eventlistener till a,b,c,d button när man trycker på save.
// lagrar aktuellt tal i array.
function storeValue() {
    let valueToBeStored = calc.ShowingValue;
    buttons.addEventListener("click", function storageAppend(event) {
        switch (event.target.id) {
            case "storageBtnA":
                storage = utils.addToStorageArray(storage, 0, Number(valueToBeStored))
                buttons.removeEventListener("click", storageAppend);
                break;

            case "storageBtnB":
                storage = utils.addToStorageArray(storage, 1, Number(valueToBeStored))
                buttons.removeEventListener("click", storageAppend);
                break;

            case "storageBtnC":
                storage = utils.addToStorageArray(storage, 2, Number(valueToBeStored))
                buttons.removeEventListener("click", storageAppend);
                break;

            case "storageBtnD":
                storage = utils.addToStorageArray(storage, 3, Number(valueToBeStored))
                buttons.removeEventListener("click", storageAppend);
                break;
        }
    })
}

// visar lagrat tal
buttons.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) {
        return;
    }
    else {
        updateDisplay(numberInput(target.value))
    }
    switch (target.id) {
        case "storageBtnA":
            if (storage[0] > 0) {
                calc.ShowingValue = storage[0]
                updateDisplay();
                break;
            } else {
                break;
            }
        case "storageBtnB":
            if (storage[1] > 0) {
                calc.ShowingValue = storage[1]
                updateDisplay();
                break;
            } else {
                break;
            }
        case "storageBtnC":
            if (storage[2] > 0) {
                calc.ShowingValue = storage[2]
                updateDisplay();
                break;
            } else {
                break;
            }
        case "storageBtnD":
            if (storage[3] > 0) {
                calc.ShowingValue = storage[3]
                updateDisplay();
                break;
            } else {
                break;
            }

    }
})

function mathButtonFunc(event) {
    if (!calc.secondValue) {
        calc.secondValue = true;
        calc.valueOne = calc.ShowingValue;
        calc.operator = event.target.dataset.operator
        calc.ShowingValue = 0;
    }
    if (calc.result) {
        calc.valueOne = calc.ShowingValue;
        calc.operator = event.target.dataset.operator
        calc.ShowingValue = 0;
    }
    else {
        return
    }

}

function sum(x, y, o) {
    const firstNumber = Number(x)
    const secondNumber = Number(y)
    if (calc.secondValue) {
        if (o === '*') return utils.multiply(firstNumber, secondNumber);
        if (o === '/') return utils.divide(firstNumber, secondNumber);
        if (o === '-') return utils.subtract(firstNumber, secondNumber);
        if (o === '+') return utils.add(firstNumber, secondNumber);
    }
}
function equalFunc() {
    calc.ShowingValue = sum(calc.ShowingValue, calc.valueOne, calc.operator);
    calc.result = true;
    updateDisplay()
}

updateDisplay()

















