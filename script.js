let digital = document.querySelector(`.digital`);

let buttonArr = [];
for (let i = 0; i <= 9; i++) {
  const button = document.querySelector(`#but${i}`);
  buttonArr.push(button);
}

let numbers = [];
let singleNumber = [];

function createSingleNumber() {
  for (let i = 0; i < buttonArr.length; i++) {
    while (singleNumber.length < 12) {
      buttonArr[i].addEventListener("click", () => {
        singleNumber.push(`${i}`);
        const digitNumber = Number(singleNumber.join(""));
        digital.innerHTML = digitNumber;
      });
    }
  }
}

createSingleNumber();
