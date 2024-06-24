const gridContainer = document.querySelector(".grid-container");

for (let i = 1; i<=16; i++){
    const gridLineContainer = document.createElement("div");
    gridLineContainer.style.flex= "1 1 auto";
    gridLineContainer.style.margin= "0px";
    gridLineContainer.style.display= "flex";
    gridContainer.appendChild(gridLineContainer);
}

const gridLineContainer = document.querySelectorAll(".grid-container > div");

for (let line of gridLineContainer){
    for (let i = 1; i<=16; i++){
        const box= document.createElement("div");
        box.classList.add("box");
        box.style.flex= "1 1 auto";

        line.appendChild(box);
    }
}

function randomIntGenerator(){
    return Math.floor(Math.random()*255);
}



gridContainer.addEventListener('mouseover', function(e) {
    let red= randomIntGenerator();
    let green= randomIntGenerator();
    let blue= randomIntGenerator();
    
    let opacity=Number(e.target.style.opacity);
    console.log(opacity);
    if (opacity!=1) opacity+=0.1;
    if (e.target.classList.contains("box")){
        e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; // Change background color on hover
        e.target.style.opacity = opacity;
    }
    else return;
    
});

