let bottomDigital = document.querySelector(`.bottomDigital`);

let buttonArr = [];
for (let i = 0; i <= 9; i++) {
  const button = document.querySelector(`#but${i}`);
  buttonArr.push(button);
  buttonArr;
}

let numbers = [];
let singleNumber = [];
let digitNumber;

function createSingleNumber() {
  for (let i = 0; i < buttonArr.length; i++) {
    buttonArr[i].addEventListener("click", () => {
      if (singleNumber.length > 10) {
        return;
      } else {
        singleNumber.push(`${i}`);
        digitNumber = Number(singleNumber.join(""));
        bottomDigital.innerHTML = digitNumber;
      }
    });
  }
}

//addEventListener for every key
addEventListener("keydown", (event) => {
  console.log(event.key);
});

function createSingleNumber() {
  for (let i = 0; i < buttonArr.length; i++) {
    buttonArr[i].addEventListener("click", () => {
      if (singleNumber.length > 10) {
        return;
      } else {
        singleNumber.push(`${i}`);
        digitNumber = Number(singleNumber.join(""));
        bottomDigital.innerHTML = digitNumber;
      }
    });
  }
}

function deleteNumber() {
  const deletButton = document.querySelector("#butCE");
  deletButton.addEventListener("click", () => {
    singleNumber = [];
    bottomDigital.innerHTML = 0;
  });
}

function addNumbers() {
  const plusButton = document.querySelector(`#butPlus`);
  plusButton.addEventListener("click", topDigitPlus);
}

const topStringArr = [];

function topDigitPlus() {
  let topDigital = document.querySelector(".topDigital");
  topStringArr.push(digitNumber);
  topDigital.innerHTML = topStringArr.join("+");
  singleNumber = [];
  bottomDigital.innerHTML = 0;
}

function equal() {}

createSingleNumber();
deleteNumber();
addNumbers();
