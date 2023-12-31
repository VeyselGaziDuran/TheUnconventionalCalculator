const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
    const usrInput = document.getElementById('input-number');
    return parseInt(usrInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) { 
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription)
 }

function add(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber; 
    createAndWriteOutput('+', initialResult, enteredNumber);
}

function substrack(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber; 
    createAndWriteOutput('-', initialResult, enteredNumber);
}


function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber; 
    createAndWriteOutput('*', initialResult, enteredNumber);
}

function divide(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber; 
    createAndWriteOutput('/', initialResult, enteredNumber);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substrack);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


