const input = document.querySelector('input[type="file"]')



var fr = new FileReader();
fr.onload=function(){
  document.getElementById('form76')
  .textContent=fr.result;
}
fr.readAsText(this, files[0]);

input.addEventListener('change', function (e) {
  handleFiles(input.files)
}, false)

const btn_enviar_texto = document.getElementById('btn-enviar-texto');
const btn_escuchar = document.getElementById('btn-escuchar');
btn_escuchar.addEventListener('click', () => {
  if (btn_enviar_texto.style.display != 'none') {
    btn_enviar_texto.style.display = 'none';
  }else{
    btn_enviar_texto.style.display = 'block';
  }
}, false);