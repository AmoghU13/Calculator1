let num1=document.querySelector("#num1");
let num2=document.querySelector("#num2");
let result=document.querySelector("#result");

document.querySelector("#add").onclick=function(){
    let n1=+num1.value;
    let n2=+num2.value;
    result.innerText=(n1+n2);
};
document.querySelector("#minus").onclick=function(){
    let n1=+num1.value;
    let n2=+num2.value;
    result.innerText=(n1-n2);
};
document.querySelector("#mul").onclick=function(){
    let n1=+num1.value;
    let n2=+num2.value;
    result.innerText=(n1*n2);
};
document.querySelector("#div").onclick=function(){
    let n1=+num1.value;
    let n2=+num2.value;
    result.innerText=(n1/n2);
};
document.querySelector('#resetBtn').onclick=function(){
    num1.value="";
    num2.value="";
    result.innerText="Result ";

};
