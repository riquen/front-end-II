let nome = document.getElementById('nome')
let sobrenome = document.getElementById('sobrenome')
let button = document.getElementById('submit')
let body = document.querySelector('body')

button.addEventListener('click', (ev) => {
    ev.preventDefault()

    let nomeValue = nome.value
    let sobrenomeValue = sobrenome.value

    let upperCase = 
    `
        <h2>Uppercase: ${nomeValue.toUpperCase().trim()} ${sobrenomeValue.toUpperCase().trim()}</h2>
    `
    body.innerHTML += upperCase

    let lowerCase = 
    `
        <h2>Lowercase: ${nomeValue.toLowerCase().trim()} ${sobrenomeValue.toLowerCase().trim()}</h2>
    `
    body.innerHTML += lowerCase

    let concat = 
    `
        <h2>Concat: ${nomeValue.trim().concat(sobrenomeValue.trim())}</h2>
    `
    body.innerHTML += concat

    let replace = 
    `
        <h2>Replace: ${nomeValue.trim().replaceAll('a', '@').replaceAll('e', '3').replaceAll('A', '@').replaceAll('E', '3')} ${sobrenomeValue.trim().replaceAll('a', '@').replaceAll('e', '3').replaceAll('A', '@').replaceAll('E', '3')}</h2>
    `
    body.innerHTML += replace

})