const input = document.querySelector('input[type="file"]')


const btn_enviar_texto = document.getElementById('btn-enviar-texto');
const btn_escuchar = document.getElementById('btn-escuchar');
btn_escuchar.addEventListener('click', () => {
  if (btn_enviar_texto.style.display != 'none') {
    btn_enviar_texto.style.display = 'none';
  }else{
    btn_enviar_texto.style.display = 'block';
  }
}, false);