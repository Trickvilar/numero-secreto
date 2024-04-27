const menorValor = 0;
const maiorValor = 100;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * maiorValor + 1);
}
const elementoMaiorValor = document.getElementById("maior-valor");
const elementoMenorValor = document.getElementById("menor-valor");
elementoMenorValor.textContent = menorValor;
elementoMaiorValor.textContent = maiorValor;

console.log(numeroSecreto);
