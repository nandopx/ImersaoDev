function respostaCerta() {
    document.querySelector(".conteudo").innerHTML = "<div id='resposta'><img class='resposta-imagem' src='https://i.pinimg.com/564x/06/5e/91/065e912c6cfb614a9de0f669de2fb5f2.jpg'><input type='submit' class='responder' value='Voltar' onclick='voltar()'></div>"
}

function respostaErrada() {
    document.querySelector(".conteudo").innerHTML = "<div id='resposta'><img class='resposta-imagem' src='https://dbriefing.com.br/blog/wp-content/uploads/2018/10/errou-faustao-gif.gif'><input type='submit' class='responder' value='Voltar' onclick='voltar()'></div>"
}

function voltar() {
    window.location.href = window.location.href;
}