var file = document.getElementById('btn-subir-text');
file.addEventListener('change', () => {
    let txtArr = [];
    let fr = new FileReader();
    let cant_numeros = 0;
    fr.onload = function() {
        // By lines
        let lines = this.result.split('\n');
        for (let line = 0; line < lines.length; line++) {
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








const btn_enviar_texto_input = document.getElementById('btn-enviar-texto');
var btn_enviar_texto_input_status = false;
btn_enviar_texto_input.addEventListener('click', () => {
    let content_text_area_input = document.getElementById('text-area-input').value;

    let arr_text_area = [];
    let lines = content_text_area_input.split('\n');
    for (let line = 0; line < lines.length; line++) {
        arr_text_area = [...arr_text_area, ...(lines[line].split(" "))];
    }
    console.log(arr_text_area);
    document.getElementById('text-area-salida').textContent=arr_text_area.join("");
    let num_palabras_input_textarea = document.getElementById('data-release1');
    num_palabras_input_textarea.innerHTML = "Numero de palabras: "+arr_text_area.length;
    document.getElementById('data-release1').style.display = 'block';
}, false)



const btn_enviar_texto = document.getElementById('btn-enviar-texto');
// SPEECH TO TEXT WEBKIT





// var recognition = new webkitSpeechRecognition();
// recognition.continuous = true;
// recognition.interimResults = true;
// recognition.lang = "en-US";

// recognition.onerror = function(event) {
//     console.error(event);
// };

// recognition.onstart = function() {
//     console.log('Speech recognition service has started');
// };

// recognition.onend = function() {
//     console.log('Speech recognition service disconnected');
// };

// recognition.onresult = function(event) {
//     var interim_transcript = '';
//     var final_transcript = '';

//     for (var i = event.resultIndex; i < event.results.length; ++i) {
//         // Verify if the recognized text is the last with the isFinal property
//         if (event.results[i].isFinal) {
//             final_transcript += event.results[i][0].transcript;
//         } else {
//             interim_transcript += event.results[i][0].transcript;
//         }
//     }

//     // Choose which result may be useful for you

//     console.log("Interim: ", interim_transcript);

//     // console.log("Final: ",final_transcript);

//     // console.log("Simple: ", event.results[0][0].transcript);
// };

// recognition.start();



var SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
recognition = new SpeechRecognition();

recognition.onstart = function(){
    console.log('RECOGNITION START');
}
recognition.onresult = function(e){
    console.log(e);
}



const btn_escuchar = document.getElementById('btn-escuchar');
var btn_escuchar_status = false;
btn_escuchar.addEventListener('click', function(){
    if (!btn_escuchar_status) {
        btn_enviar_texto.style.display = 'none';
        recognition.start();
        btn_escuchar_status = true;
    }else {
        btn_enviar_texto.style.display = 'block';
        btn_escuchar_status = false;
    }
});




const btn_limpiar_gui = document.getElementById('btn-reset');
btn_limpiar_gui.addEventListener('click', () => {
    document.getElementById('btn-escuchar').style.display='block';
    document.getElementById('btn-enviar-texto').style.display='block';
    document.getElementById('text-area-input').value = " ";
    document.getElementById('text-area-salida').value = " "; 
    document.getElementById('btn-subir-text').value = "";
    document.getElementById('data-release1').style.display = 'none';
    document.getElementById('data-release2').style.display = 'none';
}, false)
