let follow=document.querySelector("h3");
let cursor=document.querySelector("#cursor");
let main=document.querySelector("main");

let click=0;

follow.addEventListener("click",function(){
    if(click===0){
        follow.innerHTML="Following"
        follow.style.backgroundColor="gray"
        click=1;
    }
    else{
        follow.innerHTML="Follow"
        follow.style.backgroundColor="rgb(34, 162, 248)"
        click=0;
    }
});

main.addEventListener("mousemove",function(d){
    cursor.style.left=d.x+"px";
    cursor.style.top=d.y+"px";
});
main.addEventListener("click",function(d){
        cursor.style.scale="0.4"
    setTimeout(() => {
        cursor.style.scale="1"
    }, 200);
});