// Grupo 02: Mozarth Martini, João Bosco, Hebert Silva, Anderson Silva, Henrique Arantes, Iago Mendes


let modeButtonReference = document.querySelector("#mode");
let bodyReference = document.querySelector("body");
let tituloReference = document.querySelector("h1");
let itensReference = document.querySelectorAll(".item");
let paragrafosReference = document.querySelectorAll("p");
let subtitulosReference = document.querySelectorAll("h2");

function toggleMode() {
    
    bodyReference.classList.toggle("dark");
    
    tituloReference.classList.toggle("dark");
    
    for (item of itensReference) {
        item.classList.toggle("dark");
    }
    
    for (paragrafo of paragrafosReference) {
        paragrafo.classList.toggle("dark");
    }
    
    for (subtitulo of subtitulosReference) {
        subtitulo.classList.toggle("dark");
    }
    
    bodyReference.classList.contains("dark") ? modeButtonReference.innerHTML = "Modo claro" : modeButtonReference.innerHTML = "Modo escuro";
}

modeButtonReference.onclick = toggleMode;