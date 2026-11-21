let nivelZoom = 1;
            let tamanhoFonte = 100;
document.addEventListener("DOMContentLoaded", function() {
let btnAumentarZoom = document.getElementById("btn-aumentar-zoom");
let btmDiminuirZoom = document.getElementById("btn-diminuir-zoom");
let btnContraste = document.getElementById("btn-contraste");
let btnLerVozAlta = document.getElementById("btn-ler-voz");
if (btnAumentarZoom) {
btnAumentarZoom.addEventListener("click", function() {
if (nivelZoom < 2) {
    nivelZoom = nivelZoom + 0.1;
    document.body.style.zoom =nivelZoom;
        }
        });
        }
        if (btmDiminuirZoom) {btmDiminuirZoom.addEventListener("click", function() {
    if(nivelZoom > 0.8) {
        nivelZoom = nivelZoom - 0.1;
        document.body.style.zoom = nivelZoom;
        }
        });
        }
        if (btnContraste) {
    btnContraste.addEventListener("click", function() {
        document.body.classList.toggle("alto-contraste-roxo");
        });
    }
 if (btnLerVozAlta) {
    btnLerVozAlta.addEventListener("click", function() {
        if (window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
        } else {
            if ("speechSynthesis" in window) {
                let conteudoPrincipal = document.querySelector("main") || document.body;
                let textoParaLer = conteudoPrincipal.textContent;
                let mensagem = new SpeechSynthesisUtterance(textoParaLer);
                mensagem.lang = "pt-BR";
                mensagem.rate = 1.0;
                window.speechSynthesis.speak(mensagem);
            } else {
                alert("Seu navegador não suporta a leitura em voz alta.");
            }
        }
    });        }
});