var file = document.getElementById('btn-subir-text');

file.addEventListener('change', () => {
    var txtArr = [];
    var fr = new FileReader();
    var cant_numeros = 0;
    fr.onload = function() {
        // By lines
        var lines = this.result.split('\n');
        for (var line = 0; line < lines.length; line++) {
            txtArr = [...txtArr, ...(lines[line].split(" "))];
        }
    }
    fr.onloadend = function() {
        console.log(txtArr);
        document.getElementById('text-area-salida').textContent=txtArr.join("");
        var num_palabras = document.getElementById('data-release1');
        num_palabras.innerHTML = "Numero de palabras: "+txtArr.length;
        document.getElementById('data-release1').style.display = 'block';

        var num_palabras = document.getElementById('data-release2');
        num_palabras.innerHTML = "Cantidad de numeros: "+cant_numeros;
        document.getElementById('data-release2').style.display = 'block';

    }

    fr.readAsText(file.files[0]);
});


const btn_enviar_texto = document.getElementById('btn-enviar-texto');
const btn_escuchar = document.getElementById('btn-escuchar');
btn_escuchar.addEventListener('click', () => {
  if (btn_enviar_texto.style.display != 'none') {
    btn_enviar_texto.style.display = 'none';
  }else{
    btn_enviar_texto.style.display = 'block';
  }
}, false);
