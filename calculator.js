
let num = document.querySelector("#num");
let number = document.querySelector("#number");
let addBtn = document.querySelector("#addBtn");
let subBtn =document.querySelector("#subtractBtn");
let multBtn =document.querySelector("#multiplyBtn");
let divideBtn =document.querySelector("#divideBtn");
let clearBtn =document.querySelector("#clearBtn ")
let result = document.querySelector("#result");

addBtn.addEventListener("click", function () {

    let first = Number(num.value);
    let second = Number(number.value);
    let total = first + second;
    result.innerText = "Result: " + total;
});
subBtn.addEventListener("click",function(){
    let first = Number(num.value)
    let second = Number (number.value)
    let total = first - second;
    result.innerText="Result: "+ total;
});
multBtn.addEventListener("click",function(){
    let first = Number(num.value)
    let second = Number (number.value)
    let total = first * second;
    result.innerText="Result: "+ total;
});
divideBtn.addEventListener("click",function(){
    let first = Number(num.value)
    let second = Number (number.value)
    let total = first / second;
    result.innerText="Result: "+ total;
});
clearBtn.addEventListener("click",function(){
    num.value = "";
    number.value="";
     result.innerText="";
})