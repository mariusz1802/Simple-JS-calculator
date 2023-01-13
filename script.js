let bottomDigital = document.querySelector(`.bottomDigital`);
let topDigital = document.querySelector(".topDigital");
let buttonArr = [];
let singleNumber = [];
let digitNumber = 0;
let topStringArr = [];

for (let i = 0; i <= 9; i++) {
  const button = document.querySelector(`#but${i}`);
  buttonArr.push(button);
}

function createSingleNumberbyMouseClick() {
  for (let i = 0; i < buttonArr.length; i++) {
    buttonArr[i].addEventListener("click", () => {
      addNumber(i);
    });
  }
}

function createSingleNumberbyKeydown() {
  document.addEventListener("keydown", (event) => {
    if (!isNaN(event.key)) {
      addNumber(event.key);
    } else {
      return;
    }
  });
}

function addNumber(i) {
  singleNumber.push(i);
  digitNumber = Number(singleNumber.join(""));
  bottomDigital.innerHTML = digitNumber;
}

function clearDigit() {
    bottomDigital.innerHTML = "0"
    topDigital.innerHTML = ""
    singleNumber = [];
    topStringArr= [];

}

function deleteNumber() {
  const deletButton = document.querySelector("#butCE");
  deletButton.addEventListener("click", clearDigit);
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
  topStringArr.push(digitNumber);
  if (topStringArr.length == 1) {
    topDigital.innerHTML = digitNumber + "+";
  } else {
    topDigital.innerHTML = topStringArr.join("+");
  }
  singleNumber = [];

}

function plusKeyboardBtn() {
  document.addEventListener("keydown", (event) => {
    if (event.key === "+") {
      topDigitPlus();
    }
  });
}

//we need to total abount with equal or enter button our calc+ulator
function summary() {
   topStringArr.push(digitNumber)
  console.log(topStringArr)
  const ergebnise = topStringArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  console.log(ergebnise)
  bottomDigital.innerHTML = ergebnise;
}








function equalButton() {
  document.addEventListener("keydown", (event) => {
    if (event.key === "=" || event.key === "Enter") {
      summary();
    }
  });
}

createSingleNumberbyMouseClick();
createSingleNumberbyKeydown();
deleteNumber();
addNumbers();
plusKeyboardBtn();
equalButton();
