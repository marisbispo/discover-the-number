import { input } from '../main.js';

const aviso = document.querySelector('[data-aviso]');
const palpite = document.querySelector('[data-numero]');
const enviar = document.querySelector('[data-botao="enviar"]');

export function placar(numeroDigitado, placar, classe) {
  palpite.innerText = numeroDigitado;
  aviso.innerText = placar;
  aviso.classList.add(classe);
  if (numeroDigitado == '502') palpite.classList.add('numero-errado');
}

export function limparAviso() {
  input.value = '';
  aviso.innerText = '';
  palpite.innerText = 0;
  palpite.classList.remove('acerto');
  palpite.classList.remove('numero-errado');
  palpite.classList.remove('erro');
  aviso.classList.remove('acerto');
  aviso.classList.remove('numero-errado');
}

export function desabilitarEhabilitar(desativo) {
  input.disabled = desativo;
  enviar.disabled = desativo;
  if (desativo === true) {
    input.classList.add('botao-desativado');
    enviar.classList.add('botao-desativado');
  } else {
    input.classList.remove('botao-desativado');
    enviar.classList.remove('botao-desativado');
  }
}

export function validarInput() {
  if (!input.hasAttribute('data-validacao')) {
    input.setAttribute('data-validacao', '');
    input.addEventListener('input', validacao);
  }

  function validacao() {
    if (input.value.length > 3) {
      input.value = input.value.substr(1, 3);
    } else if (!input.value || input.value == 0) {
      input.value = '';
    }
  }
}
