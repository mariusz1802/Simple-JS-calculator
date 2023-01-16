let bottomDigital = document.querySelector(`.bottomDigital`);
let topDigital = document.querySelector(".topDigital");
let buttonArr = [];
let initSingleBottomNumberArray = [];
let singleBottomNumber;
let topNumberArr = [];
let plusActive = false;

for (let i = 0; i <= 9; i++) {
  const button = document.querySelector(`#but${i}`);
  buttonArr.push(button);
}
//Create single numbers by clicking mouse or keyboard
function singleNumberMouse() {
  for (let i = 0; i < buttonArr.length; i++) {
    buttonArr[i].addEventListener("click", () => {
      plusActive = false;

      addNumber(i);
    });
  }
}

function singleNumberKeyboard() {
  plusActive = false;
  document.addEventListener("keydown", (event) => {
    if (!isNaN(event.key)) {
      plusActive = false;
      addNumber(event.key);
    } else {
      return;
    }
  });
}

function addNumber(i) {
  initSingleBottomNumberArray.push(i);
  singleBottomNumber = Number(initSingleBottomNumberArray.join(""));
  bottomDigital.innerHTML = singleBottomNumber;
}

function clearDigit() {
  bottomDigital.innerHTML = "0";
  topDigital.innerHTML = "";
  initSingleBottomNumberArray = [];
  topNumberArr = [];
}

function deleteNumber() {
  const deletButton = document.querySelector("#butCE");
  deletButton.addEventListener("mousedown", () => {
    clearDigit();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Delete" || event.key === "Backspace") {
      clearDigit();
    }
  });
}

function addNumbers() {
  const plusButton = document.querySelector(`#butPlus`);
  plusButton.addEventListener("click", topDigitPlus);
}

function topDigitPlus() {
  if (plusActive === true || singleBottomNumber == 0) {
    return;
  } else {
    topNumberArr.push(singleBottomNumber);
    topDigital.innerHTML = topNumberArr.join("+") + "+";

    bottomDigital.innerHTML = 0;
    initSingleBottomNumberArray = [];
  }

  plusActive = true;
}

function plusKeyboardBtn() {
  document.addEventListener("keydown", (event) => {
    if (event.key === "+") {
      topDigitPlus();
    }
  });
}

//we need to total abount with equal or enter button our calc+ulator
const summary = () => {
  plusActive = false;

  topNumberArr.push(singleBottomNumber);
  const ergebnise = topNumberArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  console.log(singleBottomNumber)
  console.log(topNumberArr);
  bottomDigital.innerHTML = ergebnise;
  topDigital.innerHTML = "";
  topNumberArr = [ergebnise];
  initSingleBottomNumberArray = [];
  return ergebnise;
};

function equalButton() {
  const eqaulBtn = document.querySelector("#equal");
  eqaulBtn.addEventListener("click", () => {
    summary();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key == "=" || event.key == "Enter") {
      summary();
    }
  });
}

singleNumberMouse();
singleNumberKeyboard();
deleteNumber();
addNumbers();
plusKeyboardBtn();
equalButton();
