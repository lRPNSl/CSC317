const buttons = document.querySelectorAll('.Number');
const output = document.getElementById('Output');
const clear = document.getElementById('Clear');
const back = document.getElementById('Delete');
const decimal = document.getElementById('Decimal');
const operator = document.querySelectorAll('.Operator');
const equal = document.getElementById('Equal');
const answer = document.getElementById('Answer');

let currentNum = '';
let totalNum = 0

buttons.forEach(button => {
    button.addEventListener('click', function(){
        const num = Number(this.getAttribute('data-number'));
        if(num === 0 && currentNum === ''){
            currentNum = '';
        }else{
            currentNum += num;
            output.textContent = currentNum;
        }

    })
})

decimal.addEventListener('click', function(){
    if(currentNum === ''){
        currentNum = '0.';
        output.textContent = currentNum;
    }else if(currentNum.slice(-1) === '.' || currentNum.slice(-1) === '+' || currentNum.slice(-1) === '-' || currentNum.slice(-1) === 'x' || currentNum.slice(-1) === '/' || currentNum.slice(-1) === '%'){
        currentNum += '';
    }else{
        currentNum += '.';
        output.textContent = currentNum;
    }
})

operator.forEach(button => {
    button.addEventListener('click', function(){
        if(currentNum === ''){
            output.textContent = 0;
        }else if(currentNum.slice(-1) === '+' || currentNum.slice(-1) === '-' || currentNum.slice(-1) === 'x' || currentNum.slice(-1) === '/' || currentNum.slice(-1) === '%'){
            currentNum += '';
        }else if(this.getAttribute('data-operator') === '+'){
            currentNum += '+';
            output.textContent = currentNum; 
        }else if(this.getAttribute('data-operator') === '-'){
            currentNum += '-';
            output.textContent = currentNum;
        }else if(this.getAttribute('data-operator') === 'x'){
            currentNum += 'x';
            output.textContent = currentNum;
        }else if(this.getAttribute('data-operator') === '/'){
            currentNum += '/';
            output.textContent = currentNum;
        }else if(this.getAttribute('data-operator') === '%'){
            currentNum += '%';
            output.textContent = currentNum;
        }else{

        }

    })
})

/*equal.addEventListener('click', function(){
    answer.textContent = totalNum;
})*/

clear.addEventListener('click', function(){
    currentNum = '';
    output.textContent = 0;
})

back.addEventListener('click', function(){
        currentNum = currentNum.slice(0, -1);
        output.textContent = currentNum;
})
