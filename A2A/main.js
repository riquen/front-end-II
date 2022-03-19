let idade = parseInt(prompt('Introduza sua idade'))

while (isNaN(idade)) {
    alert('Idade inválida')
    idade = parseInt(prompt('Introduza sua idade'))
}

if (idade >= 18) {
    console.log('É maior de idade')
} else {
    console.log('É menor de idade')
}