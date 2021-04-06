function respostaCerta() {
    document.querySelector("#conteudo").innerHTML = "<div id='resposta'><img src='https://i.pinimg.com/564x/06/5e/91/065e912c6cfb614a9de0f669de2fb5f2.jpg'><button type='submit' value='Voltar' onclick='voltar()'>Voltar</button></div>"
}

function respostaErrada() {
    document.querySelector("#conteudo").innerHTML = "<div id='resposta'><img src='https://dbriefing.com.br/blog/wp-content/uploads/2018/10/errou-faustao-gif.gif'><button type='submit' value='Voltar' onclick='voltar()'>Voltar</button></div>"
}

function voltar() {
    window.location.href = window.location.href;
}


// <img src='https://dbriefing.com.br/blog/wp-content/uploads/2018/10/errou-faustao-gif.gif'>