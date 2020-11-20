//How to store the numbers clicked via previous and current operands:
class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement,
        this.currentOperandTextElement = currentOperandTextElement
    }

    clear(){
        //if cleared returned this:
        this.currentOperand = '',
        this.previousOperand = ''
    }

    delete(){

    }

    appendNumber(number){
        //click no. and add to screen
    }

    chooseOperation(operation){
        //selection of operation: +, *, / & -:

    }

    compute(){
        //compute values and produce single value
    }

    updateDisplay(){

    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


