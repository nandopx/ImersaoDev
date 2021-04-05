function converterParaReal() {

    /*
  Abaixo, na variavel 'dollarParaReal', utilizei a função 'toLocaleString' 
  para formatar o valor exibido em Real separando os milésimos por ponto(.) 
  e separando as decimais por virgula (,) ao inves do ponto (.). 
  Para isto, pesquisei na web e usei como referencia um artigo da Alura e a página W3Schools
  */

    var valorEmDollar = parseFloat(
        document.getElementById('dollarToReal').value.replace(',', '.')).toFixed(2)

    const cotacaoDollar = 5.52

    var dollarParaReal = (valorEmDollar * cotacaoDollar).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    document.getElementById('resultadoMoeda').innerHTML = "Esta conversão resulta o valor de " + dollarParaReal

    // alert("$ " + valorEmDollar + " convertido em Real é igual a " + dollarParaReal)
}

function CelciusParaFahrenheit() {
    var valorEmCelsius = parseInt(document.getElementById("CelsiusToFar").value)

    var valorEmFahrenheit = (valorEmCelsius * 1.8 + 32).toFixed(1)

    document.getElementById('resultadoTemperatura').innerHTML = "Esta conversão resulta o valor de " + valorEmFahrenheit + " °F"

    // alert(valorEmCelsius + " Celcius é igual a " + valorEmFahrenheit + " Fahrenheit")
}

function AnosLuzParaKM() {
    var valorEmAnozLuz = parseFloat(document.getElementById("anosLuzToKm").value)
    const anosLuzToKm = 9460730472580.80
    var valorEmKM = parseFloat(anosLuzToKm * valorEmAnozLuz).toLocaleString("pt-BR")

    document.getElementById('resultadoDistancia').innerHTML = "Esta conversão resulta o valor de " + valorEmKM + " Km"

    // alert(valorEmAnozLuz + " anos-luz é igual a " + valorEmKM + " Km")
}