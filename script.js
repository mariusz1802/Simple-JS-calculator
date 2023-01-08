let bottomDigital = document.querySelector(`.bottomDigital`);

let buttonArr = [];
for (let i = 0; i <= 9; i++) {
  const button = document.querySelector(`#but${i}`);
  buttonArr.push(button);
}

let numbers = [];
let singleNumber = [];

function createSingleNumber() {
  for (let i = 0; i < buttonArr.length; i++) {
    buttonArr[i].addEventListener("click", () => {
      if (singleNumber.length > 10) {
        return;
      } else {
        singleNumber.push(`${i}`);
        const digitNumber = Number(singleNumber.join(""));
        bottomDigital.innerHTML = digitNumber;
      }
    });
  }
}

function deletNumber() {
  const deletButton = document.querySelector("#butCE");
  deletButton.addEventListener("click", () => {
    console.log("CE");
    singleNumber = [];
    bottomDigital.innerHTML = 0;
  });
}

function addNumbers() {
  const plusButton = document.querySelector(`#butPlus`);
  let topDigital = document.querySelector(".topDigital");
  plusButton.addEventListener("click", () => {
    numbers.push(bottomDigital);
    topDigital.innerHTML = bottomDigital.innerHTML + "+";
    singleNumber = [];
    bottomDigital.innerHTML = 0;
  });
}

createSingleNumber();
deletNumber();
addNumbers();
