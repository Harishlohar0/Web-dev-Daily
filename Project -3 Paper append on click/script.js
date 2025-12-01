let main = document.querySelector(".main");
let button = document.querySelector("button");

for(let i=1;i<5;i++){

button.addEventListener("click", function () {
    let paper = document.createElement("div");

    let hw = Math.floor(Math.random() * 8) + 2; 
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let x = Math.floor(Math.random() * 100);
    let y = Math.floor(Math.random() * 100);

    let rotate = Math.floor(Math.random() * 361);

    paper.classList.add("paper-square"); // class add ki

    paper.style.height = `${hw}rem`;
    paper.style.width = `${hw}rem`;
    paper.style.position = "absolute";
    paper.style.backgroundColor = `rgb(${r},${g},${b})`;
    paper.style.left = `${x}%`;
    paper.style.top = `${y}%`;
    paper.style.rotate = `${rotate}deg`;

    main.appendChild(paper);
});
}


document.addEventListener("mousemove", (e) => {
    const squares = document.querySelectorAll(".paper-square");

    squares.forEach(square => {
        const rect = square.getBoundingClientRect();


        let sqX = rect.left + rect.width / 2;
        let sqY = rect.top + rect.height / 2;

        let dx = sqX - e.clientX;
        let dy = sqY - e.clientY;
        let distance = Math.sqrt(dx * dx + dy * dy);

        let pushRadius = 150;   
        let pushForce = 60;     

        if (distance < pushRadius) {
            let angle = Math.atan2(dy, dx);
            let moveX = Math.cos(angle) * pushForce;
            let moveY = Math.sin(angle) * pushForce;

            square.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
            square.style.transform = "translate(0px, 0px)";
        }
    });
});
