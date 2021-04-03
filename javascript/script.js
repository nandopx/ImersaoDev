function Sobre() {
    var sobre = document.getElementById('container')
    var texto = "Meu nome é Jessé Fernando, nascido em janeiro de 1983, sou de Duque de Caxias, Rio de Janeiro." +
        " Amante da tecnologia, atualmente trabalhando na área de infraestrutura e suporte em TI e, desde o início" +
        " de 2020, venho estudando programação afim de migrar para esta área. Me graduei em ADS na Universidade Estácio" +
        " de Sá em 2018 onde aprendi sobre lógica de programação, projetos de banco de dados relacionais a criei projetos" +
        " na linguagem C++. Hoje, estou estudando a plataforma .Net desde os fundamentos, Orientação a Objetos e" +
        " frameworks com ASP NET Core, EF Core e os diversos frameworks da plataforma. Pois, tenho como objetivo" +
        " atuar na carreira backend. Porém, também preciso saber andar sozinho no front  e por isso, aproveitei a" +
        " #imersaodev, da Alura, para dar um mergulho em HTML, CSS e Javascript. Está imersão foi muito importante para dar" +
        " meus primeiros passos com a linguagem Javascript."
    sobre.textContent = texto
}

function Contato() {
    var contato = document.getElementById('container')
    var elemento = "<p>Nome: Jessé Fernando</p>" +
        "<p>Email: <a href='mailto:nandopox@gmail.com' target='_blank'>nandopox@gmail.com</a></p>" +
        "<p>WhatsApp: <span><a href='https://api.whatsapp.com/send?phone=5521982718028&text=Ol%C3%A1!%20Vi%20seu%20n%C3%BAmero%20no%20Certificard%20da%20imers%C3%A3o%20dev%20da%20Alura' target='_blank'>(21) 982718028</a></span></p>"
    contato.innerHTML = elemento
}