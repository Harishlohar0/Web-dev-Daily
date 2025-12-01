let btn = document.querySelector("button");
let section = document.querySelector("section");
let teams = [
    {
        name: "VIRAT KOHLI",
        team: "RCB",
        trophy: "1 TROPHY",
        bg: "rcbbg.png",
        img: "virat-removebg-preview.png",
        color: "rgba(216, 0, 0, 1)"
    },
    {
        name: "ROHIT SHARMA",
        team: "MI",
        trophy: "5 TROPHY",
        bg: "mibg.png",
        img: "rohit.png",
        color: "rgba(0, 76, 255, 1)"
    },
    {
        name: "DHONI",
        team: "CSK",
        trophy: "5 TROPHY",
        bg: "cskbg.png",
        img: "dhoni.png",
        color: "rgba(255, 225, 0, 1)"
    },
    {
        name: "RISHABH PANT",
        team: "LSG",
        trophy: "0 TROPHY",
        bg: "lsgbg.png",
        img: "virat-removebg-preview.png",
        color: "rgba(8, 68, 117, 1)"
    },
    {
        name: "AJINKYA RAHANE",
        team: "KKR",
        trophy: "3 TROPHY",
        bg: "kkrbg.png",
        img: "virat-removebg-preview.png",
        color: "rgba(136, 0, 255, 1)"
    },
    {
        name: "SANJU SAMSON",
        team: "RR",
        trophy: "1 TROPHY",
        bg: "rrbg.png",
        img: "virat-removebg-preview.png",
        color: "rgba(248, 47, 255, 1)"
    },
    {
        name: "PAT CUMMINS",
        team: "SRH",
        trophy: "1 TROPHY",
        bg: "hydrabadbg.png",
        img: "pat.png",
        color: "rgba(216, 83, 0, 1)"
    },
    {
        name: "AKSHAR PATEL",
        team: "DC",
        trophy: "0 TROPHY",
        bg: "delhibg.png",
        img: "virat-removebg-preview.png",
        color: "rgba(255, 0, 0, 1)"
    },
    {
        name: "SHUBHMAN GILL",
        team: "GT",
        trophy: "2 TROPHY",
        bg: "gujjubg.png",
        img: "virat-removebg-preview.png",
        color: "rgba(11, 45, 125, 1)"
    },
    {
        name: "SHREYASH IYER",
        team: "PBKS",
        trophy: "0 TROPHY",
        bg: "pbksbg.png",
        img: "virat-removebg-preview.png",
        color: "rgba(255, 82, 82, 1)"
    }
]

function loadPlayer() {
    let winner = teams[Math.floor(Math.random() * teams.length)];
    section.style.backgroundImage = `url(${winner.bg})`;
    section.innerHTML =
        ` <div class="txt animate" >
            <h1>${winner.team}</h1>
            <h1 style="color:${winner.color}">${winner.name}</h1>
            <h1>${winner.trophy}</h1>
        </div>
        <div class="captain">
            <img class="animate" src=${winner.img} alt="">
        </div>`
};
loadPlayer()

btn.addEventListener("click", function () {
    loadPlayer();
});