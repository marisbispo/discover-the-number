import { limparAviso, desabilitarEhabilitar } from './aviso.js';
import { setup } from '../main.js';

export default function initNovaPartida() {
  const novaPartida = document.querySelector('[data-botao="tentar-novamente"]');
  novaPartida.classList.add('botao-ativo');

  novaPartida.addEventListener('click', tentarNovamente);

  function tentarNovamente() {
    novaPartida.classList.remove('botao-ativo');
    limparAviso();
    desabilitarEhabilitar(false);
    setup();
    removerEvent();
  }

  function removerEvent() {
    novaPartida.removeEventListener('click', tentarNovamente);
  }
}
