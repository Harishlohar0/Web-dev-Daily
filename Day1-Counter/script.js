let display=document.querySelector("#display");
let plus=document.querySelector("#plus");
let minus=document.querySelector("#minus");

let count=0;

plus.addEventListener("click",function(){
    count++;
    display.innerHTML=count;
});
minus.addEventListener("click",function(){
    count--;
    display.innerHTML=count;
});
