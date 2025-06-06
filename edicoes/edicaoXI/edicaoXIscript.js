const imagens = ["edicaoXIassests/XI1.png", "edicaoXIassests/XI2.heic", "edicaoXIassests/XI3.jpg", "edicaoXIassests/XI4.jpg"];
let indexAtual = 0;

function abrirLightbox(indice) {
  indexAtual = indice;
  document.getElementById("imagemAtual").src = imagens[indexAtual];
  document.getElementById("lightbox").style.display = "flex";
}

function fecharLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function mudarImagem(direcao) {
  indexAtual += direcao;
  if (indexAtual < 0) indexAtual = imagens.length - 1;
  if (indexAtual >= imagens.length) indexAtual = 0;
  document.getElementById("imagemAtual").src = imagens[indexAtual];
}

function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('show');
}