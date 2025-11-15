const buttons = document.querySelectorAll('.Number');
const output = document.getElementById('Output');
const clear = document.getElementById('Clear');
const back = document.getElementById('Delete');
const operator = document.querySelectorAll('.Operator');
const equal = document.getElementById('Equal');
const decimal = document.getElementById('Decimal');
const plusMinus = document.getElementById('PlusAndMinus');
const lastAnswer = document.getElementById('LastAnswer');
//const history = document.getElementById('HistoryPanel');//

let currentNum = [];
let calcArr = [];

buttons.forEach(button => {
    button.addEventListener('click', function(){
        const num = this.getAttribute('data-number');
        if(currentNum.length === 0){
            if(num === "0"){
                currentNum.push("0");
                calcArr.push("0");
                output.textContent = "0";
                return;
            }

            currentNum.push(num);
            calcArr.push(num);
            output.textContent = currentNum.join('');
            return;
        }

        if(currentNum.length === 1 && currentNum[0] === "0"){
            if(num === "0"){
                return
            }
            if(num !== "."){
                currentNum[0] = num;
                calcArr[0] = num;
                output.textContent = num;
                return;
            }
        }

        currentNum.push(num);
        calcArr.push(num);
        output.textContent = currentNum.join('');

    });
});

function getCurrentNumber(currentNum) {
    let ops = ["+", "x", "/", "%"];
    let lastOps = -1;
    
    for(let i = currentNum.length - 1; i >= 0; i--){
        if(ops.includes(currentNum[i])){
            lastOps = i;
            break;
        }
    }

    return {
        num: currentNum.slice(lastOps + 1).join(''),
        index: lastOps + 1
    };
}

decimal.addEventListener('click', function(){
    let curr = getCurrentNumber(currentNum);

    if(curr.num.includes(".")) return;
    if(currentNum.length === 0 || ["+", "-", "x", "/", "%"].includes(currentNum.at(-1))){
        currentNum.push("0");
        calcArr.push("0");
    }

    currentNum.push(".");
    calcArr.push(".");
    output.textContent = currentNum.join('');
});

plusMinus.addEventListener('click', function(){
    if(currentNum.length === 0) return;
    let{num, index } = getCurrentNumber(currentNum);
    if(num === "") return;

    if(num.startsWith("-")){
        currentNum.splice(index, 1);
        calcArr.splice(index, 1);
    } else {
        currentNum.splice(index, 0, "-");
        calcArr.splice(index, 0, "-");
    }

    output.textContent = currentNum.join('');
});

operator.forEach(button => {
    button.addEventListener('click', function(){
        const op = this.getAttribute('data-operator');
        
        if(currentNum.length === 0) return;
        if(["+", "-", "x", "/", "%"].includes(currentNum.at(-1))) return;
        
        let displayOp = op;
        let calcOp = op;

        if(op === "x"){
            calcOp = "*";
        }

        currentNum.push(displayOp);
        calcArr.push(calcOp);

        output.textContent = currentNum.join(''); 
    });
});

document.addEventListener('keydown', function(e){
    const key = e.key;

    if(/^[0-9]$/.test(key)){
        currentNum.push(key);
        calcArr.push(key);
        output.textContent = currentNum.join('');
    }

    if(["+", "-", "*", "/", "%"].includes(key)){
        if(key === "-" && ["+", "x", "/", "%"].includes(currentNum.at(-1))){
            plusMinus.click();
            return;
        }
    
        if(["+", "-", "x", "/", "%"].includes(currentNum.at(-1))){
            return;
        }
    
        document.querySelector(`[data-operator="${key === "*" ? "x" : key}"]`)?.click();
    }
    

    if(key === "."){
        decimal.click();
    }

    if(key === "Enter"){
        equal.click();
    }

    if(key === "Backspace"){
        back.click();
    }
});

clear.addEventListener('click', function(){
    currentNum = [];
    calcArr = [];
    output.textContent = 0;
});

back.addEventListener('click', function(){
        currentNum.pop();
        calcArr.pop();
        output.textContent = currentNum.join('') || 0;
});

equal.addEventListener('click', function(){
    try {
        let expression = calcArr.join('');
        expression = expression.replace('%', '/100');

        let result = eval(expression);

        lastAnswer.textContent = "Previous answer = " + result;

        //history.innerHTML += `<div>${calcArr.join('')} = <strong>${result}</strong></div>`;//
        //history.scrollTop = history.scrollHeight;//

        output.textContent = result;
        currentNum = [result];
        calcArr = [result];
    }
    catch {
        output.textContent = "Error";
        currentNum = [];
        calcArr = [];
    }
});
