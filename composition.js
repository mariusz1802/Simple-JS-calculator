let digital = document.querySelector(`.digital`);

let buttonArr = [];
for (let i = 0; i <= 9; i++) {
  const button = document.querySelector(`#but${i}`);
  buttonArr.push(button);
}

let numbers = [];
let singleNumber = [];

const creatableSingleNumber = (state) => ({
  create: () => {
    for (let i = 0; i < buttonArr.length; i++) {
      buttonArr[i].addEventListener("click", () => {
        if (singleNumber.length > 10) {
          return;
        } else {
          singleNumber.push(`${i}`);
          const digitNumber = Number(singleNumber.join(""));
          digital.innerHTML = digitNumber;
        }
      });
    }
  },
});

const deletableNumber = (state) => ({
  deleteFunc: () => {
    const deletButton = document.querySelector("#butCE");
    deletButton.addEventListener("click", () => {
      console.log("CE");
      singleNumber = [];
      digital.innerHTML = 0;
    });
  },
});

const calculate = (name) => {
  const state = {
    name: name,
    createNumber: createNumber,
    deletNumber: deleteNumber,
  };

  return Object.assign({}, creatableSingleNumber(), deletableNumber());
};
