window.onload = alert('A página foi carregada.')

let body = document.querySelector('body')

const renderizaForm = () => {
    let form = 
    `
    <form>
        <h2>Bem vindo, digite algo e aperte "Enter"</h2>
        <input />
        <button id="submitButton" type="submit">Enviar</button>
        <button type="reset">Limpar</button>
        <p id="text"></p>
        <p id="counter"></p>
    </form>
    `

    body.innerHTML += form
}

renderizaForm()

let submitButton = document.getElementById('submitButton')
let h2 = document.querySelector('h2')
let input = document.querySelector('input')
let text = document.getElementById('text')
let counter = document.getElementById('counter')

h2.onmouseover = () => h2.style.color = 'green'
h2.onmouseout = () => h2.style.color = 'black'

submitButton.addEventListener('click', (ev) => ev.preventDefault())

let contador = 0

input.onkeyup = (ev) => {
    if(ev.keyCode === 13) {
        text.innerText = input.value
        counter.innerText = contador += 1
    }
}
