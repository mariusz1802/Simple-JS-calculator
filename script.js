let bottomDigital = document.querySelector(`.bottomDigital`);
let topDigital = document.querySelector(".topDigital");
let buttonArr = [];
let initSingleBottomNumberArray = [];
let singleBottomNumber;
let topNumberArr = [];
let plusActive = false;
let equalActive = false;

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
    topDigital.innerHTML = topNumberArr + '+';
    bottomDigital.innerHTML = 0;
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
function summary  () {
  plusActive = false;
  topNumberArr.push(singleBottomNumber);
  const ergebnise = topNumberArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  bottomDigital.innerHTML = ergebnise;
  topDigital.innerHTML = "";
  initSingleBottomNumberArray = [];
  topNumberArr=[ergebnise];
  singleBottomNumber = 0;
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


function multiply(){
  const multiplyBtn = document.querySelector("#butMultiply");

  multiplyBtn.addEventListener("click", ()=> {
    
  })
}


function sumOfArray(){
  const multiplyBtn = document.querySelector("#butMultiply");
  const plusBtn = document.querySelector(`#butPlus`);


  plusBtn.addEventListener("click" , ()=> {finish("+")})
  multiplyBtn.addEventListener("click" , ()=> {finish("*")})

}


function finish(sign){
  topNumberArr.push(singleBottomNumber);
  if(sign === "+"){
    
  }
}



singleNumberMouse();
singleNumberKeyboard();
deleteNumber();
addNumbers();
plusKeyboardBtn();
equalButton();
multiply();
