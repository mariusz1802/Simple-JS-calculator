class Calculator{
  constructor(actualNumber, previousNumber){
    this.actualNumber = actualNumber;
    this.previousNumber = previousNumber;
  }
    

clear(){}

delete(){
}


appendNumeber(number){

}

choseOperation(operation){

}


compute(){
  
}

}




const numberButtons = document.querySelectorAll('[data-number]');







console.log(numberButtons)

numberButtons.forEach(button=> {
  button.addEventListener('click', ()=> {
    console.log(button.innerText);
  })
})