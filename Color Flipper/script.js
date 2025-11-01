const body = document.getElementsByTagName("body")[0];

function setColor(name){
    body.style.backgroundColor = name;
}

function randomColor(){
    const yellow = Math.round(Math.random() * 255);
    const red = Math.round(Math.random() * 255);
    const orange = Math.round(Math.random() * 255);
    const color = `rgb(${yellow}, ${red}, ${orange})`;
    body.style.backgroundColor = color;
}
