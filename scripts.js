//How to store the numbers clicked via previous and current operands:
class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement,
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()//to clear all inputs when calculator is loaded
    }

    clear(){
        //if cleared returned this:
        this.currentOperand = '',
        this.previousOperand = '',
        this.operation = undefined
    }

    delete(){

    }

    appendNumber(number){
        //click no. and add to screen not add more than one decimal:
        if(number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation){
        //selection of operation: +, *, / & -:
        if (this.currentOperand === '') return
        if(this.previousOperand !== ''){
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = '' // to clear and enter a new value

    }

    compute(){
        //compute values and produce single value
        let computation 
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        //check if user doesnt click anything/equal
        if(isNaN(prev) || isNaN(current)) return
        switch(this.operation){
            case '+': 
                computation = prev + current
                break
            case '*':
                computation = prev * current
                break
            case "-":
                computation = prev - current
                break
            case "÷":
                computation = prev ÷ current
                break
        }
    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand
        this.previousOperandTextElement.innerText = this.previousOperand

    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

//event listener for click of number buttons:
numberButtons.forEach(button => button.addEventListener('click', ()=>{
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
}))
//event listener for click of operation buttons:
operationButtons.forEach(button => button.addEventListener('click', ()=>{
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
}))

equalsButton.addEventListener('click', button =>{
    calculator.compute()
    calculator.updateDisplay()
})