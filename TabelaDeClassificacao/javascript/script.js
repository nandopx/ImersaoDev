var jogadores = []

exibirJogadoresNaTela(jogadores)

function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos
}

function exibirJogadoresNaTela(jogadores) {
    var html = ""
    for (var i = 0; i < jogadores.length; i++) {
        html += "<tr><td><img src=" + jogadores[i].imagem + " class='imagem-jogador'></td>"
        html += "<td>" + jogadores[i].nome + "</td>"
        html += "<td>" + jogadores[i].vitorias + "</td>"
        html += "<td>" + jogadores[i].empates + "</td>"
        html += "<td>" + jogadores[i].derrotas + "</td>"
        html += "<td>" + jogadores[i].pontos + "</td>"
        html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
    }
    var tabelaJogadores = document.getElementById('tabelaJogadores')
    tabelaJogadores.innerHTML = html
}

function adicionarVitoria(i) {
    var jogador = jogadores[i]
    if (jogadores.length > 1) {
        if (i == 0) {
            jogadores[i + 1].derrotas++
                jogador.vitorias++
        } else {
            jogadores[i - 1].derrotas++
                jogador.vitorias++
        }
    } else {
        alert("Só existe um jogador na partida!")
    }
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate(i) {
    var jogador = ""

    /*
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
    */

    // Função corrigida com o 'for' que acrescenta empate ao outro jogador
    if (jogadores.length > 1) {
        for (var i = 0; i < jogadores.length; i++) {
            jogador = jogadores[i]
            jogador.empates++
                jogador.pontos = calculaPontos(jogador)
            exibirJogadoresNaTela(jogadores)
        }
    } else {
        alert("Só existe um jogador na partida!")
    }
}

function adicionarDerrota(i) {
    var jogador = jogadores[i]
    var vencedor

    if (jogadores.length > 1) {
        if (i == 0) {
            jogador.derrotas++
                vencedor = jogadores[i + 1]
            vencedor.vitorias++
                vencedor.pontos = calculaPontos(vencedor)
        } else {
            jogador.derrotas++
                vencedor = jogadores[i - 1]
            vencedor.vitorias++
                vencedor.pontos = calculaPontos(vencedor)
        }
    } else {
        alert("Só existe um jogador na partida!")
    }

    exibirJogadoresNaTela(jogadores)
}

function adicionarJogador() {
    var nomeJogador = prompt("Digite o nome do jogador:")
    var imagemJogador = prompt("Endereço da imagem:")
    var novoJogador = {
        imagem: imagemJogador,
        nome: nomeJogador,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0
    }
    jogadores.push(novoJogador)
    console.log(jogadores.length)
    exibirJogadoresNaTela(jogadores)
}