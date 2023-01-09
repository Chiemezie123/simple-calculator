class Calculator {
    constructor (previousTextElement,currentTextElement){
        this.previousTextElement = previousTextElement;
        this.currentTextElement = currentTextElement;
        this.clear();
    }

    clear () {
        this.previousOperation = '';
        this.currentOperation = '';
        this.operation = undefined;
    }
    delete (){
        this.currentOperation =this.currentOperation.toString().slice(0,-1)
    }
    appendNumber (number){
        if( number === '.' && this.currentOperation.includes('.'))
            return 
                this.currentOperation = this.currentOperation.toString() + number.toString() 
    }
    chooseOperation(operation){
        if(this.currentOperation == '') return
        if(this.previousOperation !== ''){
            this.compute
        }
        this.operation = operation;
        this.previousOperation = this.currentOperation;
        this.currentOperation = '';
    }
    getdisplaynum(num){
        let floatNum = parseFloat(num)
        if(isNaN(floatNum)) return ''
        return floatNum.toLocaleString('en')
    }
    compute(){
        let computation;
        const PreviousOps = parseFloat(this.previousOperation);
        const CurrentOPs = parseFloat(this.currentOperation);
        if(isNaN(PreviousOps) || isNaN(CurrentOPs)) return;
        if(this.operation == '+'){
            computation = PreviousOps + CurrentOPs;
        } else if (this.operation == '-'){
            computation = PreviousOps - CurrentOPs;
        } else if(this.operation == '/'){
            computation = PreviousOps / CurrentOPs;   
        } else if (this.operation == '*'){
            computation = PreviousOps * CurrentOPs;
        } else{
            return
        }
        // switch(this.operation){
        //     case '+':
        //     computation = PreviousOps + CurrentOPs;
        //     break;
        //     case '-':
        //     computation = PreviousOps - CurrentOPs;
        //     break;
        //     case '/':
        //     computation = PreviousOps / CurrentOPs;
        //     break;
        //     case '*':
        //     computation = PreviousOps * CurrentOPs;
        //     break;
        //     default:
        //         return
        // }
        this.currentOperation = computation;
        this.operation = undefined;
        this.previousOperation = '';
    }
    update(){
        this.currentTextElement.innerText = this.getdisplaynum(this.currentOperation);
        if(this.operation != null){
            this.previousTextElement.innerText =`${this.getdisplaynum(this.previousOperation)} ${this.operation}` }
            else{
                this.previousTextElement.innerText = '';
            }
        
    }



}

console.log(Calculator)
const numberButton = document.querySelectorAll('[data-number]');
const operationButton = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-all-clear]');
const previousTextElement = document.querySelector('[data-previous-operation-element-text]')
const currentTextElement = document.querySelector('[data-current-operation-element-text]')

const calculator = new Calculator(previousTextElement,currentTextElement)

// previousTextElement.textContent = 1234567890
console.log()


numberButton.forEach( (button) =>{
    button.addEventListener('click', () =>{
        calculator.appendNumber(button.innerText);
        calculator.update()
    })
}

)
operationButton.forEach( (fuzzy) =>{
    fuzzy.addEventListener('click', () =>{
        calculator.chooseOperation(fuzzy.innerText);
        calculator.update()
    })
}

)
equalsButton.addEventListener('click', () =>{
    calculator.compute()
    calculator.update()
})

clearButton.addEventListener('click', () =>{
    calculator.clear()
    calculator.update()
})
deleteButton.addEventListener('click', () =>{
    calculator.delete()
    calculator.update()
})
/*------- first assignment ------*/
// const x = [x1,x2,x3,x4,x5,x6...yn]
// const Y = [y1,y2,y3,y4,y5,y6...yn]
// sum of element in x Array

// let sum = 0;
// for(let element of x){
//     sum += element;
//     return sum;
// }
// console.log(sum);
 
// or

// const sum = x.reduce((previous , current ) =>{
//     return previous + current;
// })
// console.log(sum)

const xoor = [10 ,10,10];
const yo = [5,6,7];
let summation=[];
let mesh;
function sum (){
  for(let i  of  xoor ){
    for (let j of yo){
       i + j;
      mesh = i + j;
      summation.push(mesh)
      console.log(summation);
    }
    
  }
  
}
console.log(sum())
