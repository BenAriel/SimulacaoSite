function reloadPage() {
    location.reload(true);
}
function lerTexto() {
    
    var textoDigitado = document.getElementById("meuInput").value;


    alert("Texto Digitado: " + textoDigitado);
}
const slides = document.querySelector('.slides');
const slideList = document.querySelectorAll('.slide');
let index = 0;

function avancarSlide() {
    index = (index + 1) % slideList.length;
    atualizarSlide();
}

function atualizarSlide() {
    slides.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(avancarSlide, 5000); // Avança para o próximo slide a cada 5 segundos
function mostrarComentario() {
    var select = document.getElementById("selectFinalidade");
    var comentario = document.getElementById("comentario");

    // Verifica se a opção "outros" está selecionada
    if (select.value === "outros") {
      comentario.style.display = "block"; // Mostra a área de comentários
    } else {
      comentario.style.display = "none"; // Oculta a área de comentários
    }
  }
