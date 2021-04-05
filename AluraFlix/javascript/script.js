function adicionarFilme() {
    var valorRecebido = document.querySelector('#filme')
    var filme = valorRecebido.value
    var filmeArray = [filme.substring(0, 24), filme.substring(32)]
    valorRecebido.value = ""
    console.clear()
    validaFilme(filmeArray)
}

function listarFilmesNaTela(filme) {
    console.log("Recebi o filme para listar")
    var listaFilmes = document.querySelector('#listaFilmes')
        // var elementoFilme = "<img src=" + filme + ">"
    var elementoFilme = "<iframe width='280' height='220' src='" + filme[0] + "embed/" + filme[1] + "' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
    listaFilmes.innerHTML += elementoFilme
    console.log("Listei o filme")
}

function validaFilme(filme) {
    console.log("Recebi o filme para validar")
    if (filme[0].startsWith("https://www.youtube.com/")) {
        console.log("Validei o filme")
        listarFilmesNaTela(filme)
    } else {
        alert("Dados inválidos! Entre com um endereço correto")
    }
}