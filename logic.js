let numsBtn = document.querySelectorAll(".num");
let operators = document.querySelectorAll(".operator");
let equ = document.querySelector(".equal");
let del = document.querySelector(".delete");
let clr = document.querySelector(".clear");
let decimal = document.querySelector(".decimal");
let currentValue = document.querySelector(".current");
let previousValue = document.querySelector(".previous");

let operator = null;
let current; 
let previous ;


function add(){
    return previous + current;
}

function subtract(){
    return previous - current;
}

function divide(){
    if(current == 0){
        return "Cannot divide by zero";
    }
    return previous / current;
}

function multiply(){
    return previous * current;
}


numsBtn.forEach(btn => btn.addEventListener('click',()=>{
    
    
    if(currentValue.textContent == 0){
        
        currentValue.textContent = btn.textContent;
        
    }else{
        currentValue.textContent += btn.textContent;
    }
    
}));




clr.addEventListener('click',()=>{
    currentValue.textContent = "";
    previousValue.textContent = "";
});

del.addEventListener('click',()=>{
    if(currentValue.textContent =""){
        previousValue.textContent =previousValue.textContent.slice(0,previousValue.textContent.length-1);
        return
    }
    currentValue.textContent =currentValue.textContent.slice(0,currentValue.textContent.length-1);
});


decimal.addEventListener('click',()=>{
    if(currentValue.textContent == " " ){
        return;
    }
    if(currentValue.textContent.includes(".")){
        return;
    }
    currentValue.textContent += decimal.textContent;
});


function operate (){
    if(operator == null) return

    if(operator === "+"){
       return add();
        
    }

    if(operator === "-"){
       return subtract();

    }
    
    if(operator === "*"){
       return multiply();
    }

    if(operator === "÷"){
     
      return divide();
    }
    
}

operators.forEach(btn => btn.addEventListener('click',()=>{
        if(operator === null){
            previous = parseFloat(currentValue.textContent);
            operator = btn.textContent;
            previousValue.textContent = `${currentValue.textContent} ${operator}`;
            currentValue.textContent = "";
        }

        calculate();
        
        
        
}));



 equ.addEventListener('click',()=>{
    calculate();
 })    
    


function calculate (){
    if(currentValue.textContent === "" |previousValue.textContent === "") return
    current = parseFloat(currentValue.textContent);
    previousValue.textContent = `  ${previousValue.textContent} ${currentValue.textContent} =`;
    let solution = operate();
    currentValue.textContent = solution ;
    operator = null;
}