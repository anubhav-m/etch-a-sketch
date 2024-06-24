function gridCreator(input){
    const gridContainer = document.querySelector(".grid-container");

    for (let i = 1; i<=input; i++){
        const gridLineContainer = document.createElement("div");
        gridLineContainer.style.flex= "1 1 auto";
        gridLineContainer.style.margin= "0px";
        gridLineContainer.style.display= "flex";
        gridContainer.appendChild(gridLineContainer);
    }

    const gridLineContainer = document.querySelectorAll(".grid-container > div");

    for (let line of gridLineContainer){
        for (let i = 1; i<=input; i++){
            const box= document.createElement("div");
            box.classList.add("box");
            box.style.flex= "1 1 auto";

            line.appendChild(box);
        }
    }
}

gridCreator(16);

function randomIntGenerator(){
    return Math.floor(Math.random()*255);
}

const gridContainer = document.querySelector(".grid-container");
gridContainer.addEventListener('mouseover', function(e) {
    let red= randomIntGenerator();
    let green= randomIntGenerator();
    let blue= randomIntGenerator();
    
    let opacity=Number(e.target.style.opacity);
    console.log(opacity);
    if (opacity!=1) opacity+=0.2;
    if (e.target.classList.contains("box")){
        e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; // Change background color on hover
        e.target.style.opacity = opacity;
    }
    else return;
});

const button = document.querySelector(".new-grid button");
const input = document.querySelector(".new-grid input");
button.addEventListener("click", function(e){
    const error = document.querySelector(".new-grid div");
    error.textContent = "";
    const inputValue = Number(input.value);
    if (inputValue<=100 && inputValue>0){
        gridContainer.innerHTML="";
        gridCreator(inputValue);
    }
    else{
        const error = document.querySelector(".new-grid div");
        error.textContent= "Please Enter Values between 1 and 100!!!!";
    }
})

