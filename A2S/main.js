let escolhaUsuario = 0
let escolhaBot = 0
let pontuacaoUsuario = 0
let pontuacaoBot = 0

const papel = (escolhaUsuario, escolhaBot) => {
    switch (escolhaUsuario === 1) {
        case escolhaBot === 1:
            alert('a rodada empatou')
            break;
        case escolhaBot === 2:
            alert('o bot ganhou a rodada')
            pontuacaoBot += 1
            break;
        case escolhaBot === 3:
            alert('o usuário ganhou a rodada')
            pontuacaoUsuario += 1
            break;
        default:
            break;
    }

}

const tesoura = (escolhaUsuario, escolhaBot) => {
    switch (escolhaUsuario === 2) {
        case escolhaBot === 1:
            alert('o usuário ganhou a rodada')
            pontuacaoUsuario += 1
            break;
        case escolhaBot === 2:
            alert('a rodada empatou')
            break;
        case escolhaBot === 3:
            alert('o bot ganhou a rodada')
            pontuacaoBot += 1
            break;
        default:
            break;
    }

}

const pedra = (escolhaUsuario, escolhaBot) => {
    switch (escolhaUsuario === 3) {
        case escolhaBot === 1:
            alert('o bot ganhou a rodada')
            break;
        case escolhaBot === 2:
            alert('o usuário ganhou a rodada')
            pontuacaoUsuario += 1
            break;
        case escolhaBot === 3:
            alert('a rodada empatou')
            pontuacaoBot += 1
            break;
        default:
            break;
    }

}

const rodada = (escolhaUsuario, escolhaBot) => {
    if (escolhaUsuario === 1) {
        papel(escolhaUsuario, escolhaBot)
    } else if (escolhaUsuario === 2) {
        tesoura(escolhaUsuario, escolhaBot)
    } else if (escolhaUsuario === 3) {
        pedra(escolhaUsuario, escolhaBot)
    }
}

while (pontuacaoUsuario < 2 && pontuacaoBot < 2) {
    escolhaUsuario = parseInt(prompt('1 - Papel, 2 - Tesoura, 3 - Pedra'))
    escolhaBot = parseInt(Math.random() * 3 + 1)
    rodada(escolhaUsuario, escolhaBot)
}

const decideVencedor = (pontuacaoUsuario, pontuacaoBot) => {
    if (pontuacaoUsuario === 2) {
        alert('o usuário ganhou o jogo')
    } else if (pontuacaoBot === 2) {
        alert('o bot ganhou o jogo')
    }
}

decideVencedor(pontuacaoUsuario, pontuacaoBot)
