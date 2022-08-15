import iniciarJogo from './modules/requisicao.js';
import {
  desabilitarEhabilitar,
  placar,
  validarInput,
} from './modules/aviso.js';
import initNovaPartida from './modules/nova-partida.js';

let numeroSistema;
export async function setup() {
  numeroSistema = await iniciarJogo();
  if (numeroSistema.StatusCode) {
    placar(numeroSistema.StatusCode, 'Erro', 'numero-errado');
    desabilitarEhabilitar(true);
    initNovaPartida();
  }
  initCompararNumeros(numeroSistema);
}

setup();
const aviso = document.querySelector('[data-aviso]');
const enviar = document.querySelector('[data-botao="enviar"]');
export const input = document.querySelector('[data-input]');
const palpite = document.querySelector('[data-numero]');

function initCompararNumeros() {
  if (!enviar.hasAttribute('data-outside')) {
    enviar.setAttribute('data-outside', '');
    enviar.addEventListener('click', compararNumeros);
  }
  validarInput();

  function compararNumeros() {
    const numeroDigitado = +input.value;

    let numeroValue = numeroSistema.value;

    if (numeroDigitado === numeroValue) {
      placar(numeroDigitado, 'Você acertou!!!', 'acerto');
      aviso.classList.remove('numero-errado');
      desabilitarEhabilitar(true);
      initNovaPartida();
    } else if (numeroDigitado >= 1 && numeroDigitado < numeroValue) {
      placar(numeroDigitado, 'É maior', 'numero-errado');
    } else if (numeroDigitado > numeroValue) {
      placar(numeroDigitado, 'É menor', 'numero-errado');
    }
  }

  function placar(numeroDigitado, placar, classe) {
    palpite.innerText = numeroDigitado;
    aviso.innerText = placar;
    aviso.classList.add(classe);
    input.value = '';

    if (placar === 'Você acertou!!!') palpite.classList.add(classe);
  }
}
