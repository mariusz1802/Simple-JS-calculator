let bottomDigital = document.querySelector(`.bottomDigital`);
let topDigital = document.querySelector(".topDigital");
let buttonArr = [];
let numbers = [];
let singleNumber = [];
let digitNumber;

for (let i = 0; i <= 9; i++) {
  const button = document.querySelector(`#but${i}`);
  buttonArr.push(button);
  buttonArr;
}

function createSingleNumberbyMouseClick() {
  for (let i = 0; i < buttonArr.length; i++) {
    buttonArr[i].addEventListener("click", ()=> {addNumber(i)} );
  }
}

function createSingleNumberbyKeydown(){
  addEventListener("keydown", (event) => {
if(!isNaN(event.key)){
  addNumber(event.key)
}else{
  return;
}
  });
}

function addNumber(i){
    if (singleNumber.length > 10) {
      return;
    } else {
      singleNumber.push(`${i}`);
      digitNumber = Number(singleNumber.join(""));
      bottomDigital.innerHTML = digitNumber;
    } 
}

function deleteNumber() {
  const deletButton = document.querySelector("#butCE");
  deletButton.addEventListener("click", () => {
    singleNumber = [];
    topStringArr=[];
    bottomDigital.innerHTML = 0;
    topDigital.innerHTML = "";
  });
}


function addNumbers() {
  const plusButton = document.querySelector(`#butPlus`);
  plusButton.addEventListener("click", topDigitPlus);
}
let topStringArr = [];


function topDigitPlus() {
  topStringArr.push(digitNumber);
  if(topStringArr.length  == 1){
    topDigital.innerHTML = digitNumber + "+";
  }
  else{
    topDigital.innerHTML = topStringArr.join("+");
  }
  singleNumber = [];
  bottomDigital.innerHTML = 0;
}



createSingleNumberbyMouseClick();
createSingleNumberbyKeydown();
deleteNumber();
addNumbers();
