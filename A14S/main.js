let divReference = document.getElementById('div')
let inputReference = document.getElementById('text')
let buttonReference = document.getElementById('submit')
let comentarios = []

buttonReference.addEventListener('click', ev => {
    ev.preventDefault()
    renderizaP()
})

const renderizaP = () => {
    comentarios.push(inputReference.value)
    localStorage.setItem('comentarios', JSON.stringify(comentarios))

    let listaComentarios = JSON.parse(localStorage.getItem('comentarios'))

    let comentario =
    `
    <p>${listaComentarios[listaComentarios.length - 1]}</p>
    `

    divReference.innerHTML += comentario
}

const renderizaLocalStorage = () => {
    let listaComentarios = JSON.parse(localStorage.getItem('comentarios'))

    if (listaComentarios) {
        listaComentarios.forEach((el) => {
            let comentario =
            `
            <p>${el}</p>
            `
        
            divReference.innerHTML += comentario    
        })
    }
}

renderizaLocalStorage()