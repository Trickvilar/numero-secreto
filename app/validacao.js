function validarChute(chute) {
  const numero = +chute;

  if (chuteInvalido(numero)) {
    elementoChute.innerHTML += `<div>Valor invalido</div>`;
    return;
  }

  if (numero > maiorValor || numero < menorValor) {
    elementoChute.innerHTML += `<div>Valor Inválido, fale um numero entre ${menorValor} e ${maiorValor}</div>`;
    return;
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `<h2> Você Acertou!</h2>
    <h3> O numero secreto era ${numeroSecreto}<h3>`;
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
    <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
    `;
  } else {
    elementoChute.innerHTML += `
    <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
    `;
  }
}

function chuteInvalido(numero) {
  return Number.isNaN(numero);
}
