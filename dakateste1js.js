
function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('show');
}

function iniciarContadorRegressivo(dataAlvoISO) {
  // Converte a string ISO para um objeto Date.
  // Exemplo de dataAlvoISO: "2025-12-31T23:59:59" (Ano-Mês-DiaTHora:Minuto:Segundo)
  // IMPORTANTE: Por padrão, se nenhum fuso horário for especificado na string,
  // o JavaScript pode interpretar como UTC ou local dependendo do formato e do navegador.
  // Para maior precisão, especifique o fuso horário se o evento for global
  // ou certifique-se de que a data e hora correspondem ao fuso horário desejado.
  // Exemplo para fuso de Brasília (BRT -03:00): "2025-12-31T23:59:59-03:00"
  // Se for um evento local e o servidor e os usuários estão no mesmo fuso,
  // "YYYY-MM-DDTHH:MM:SS" geralmente funciona bem para o fuso local do usuário.
  const dataAlvo = new Date(dataAlvoISO).getTime();

  const elementoDias = document.getElementById("dias");
  const elementoHoras = document.getElementById("horas");
  const elementoMinutos = document.getElementById("minutos");
  const elementoSegundos = document.getElementById("segundos");
  const elementoMensagemFinal = document.getElementById("mensagem-final");
  const containerTempo = document.querySelector("#contador-regressivo .tempo");

  // Atualiza o contador a cada segundo
  const intervalo = setInterval(() => {
    const agora = new Date().getTime();
    const distancia = dataAlvo - agora;

    // Cálculos de tempo para dias, horas, minutos e segundos
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Função para adicionar um zero à esquerda se o número for menor que 10
    const formatarNumero = (num) => (num < 10 ? "0" + num : num);

    // Exibe o resultado nos elementos
    elementoDias.textContent = formatarNumero(dias);
    elementoHoras.textContent = formatarNumero(horas);
    elementoMinutos.textContent = formatarNumero(minutos);
    elementoSegundos.textContent = formatarNumero(segundos);

    // Se a contagem regressiva terminar
    if (distancia < 0) {
      clearInterval(intervalo); // Para o contador
      if (containerTempo) containerTempo.style.display = "none"; // Esconde os blocos de tempo
      if (elementoMensagemFinal) elementoMensagemFinal.style.display = "block"; // Mostra a mensagem final
    }
  }, 1000); // 1000 ms = 1 segundo
}

// --- CONFIGURAÇÃO ---
// Defina a data e hora do seu evento aqui!
// Formato: "ANO-MÊS-DIAT رغمHORA:MINUTO:SEGUNDO"
// Exemplo: Contagem para 1 de Janeiro de 2026, à meia-noite
// const dataDoSeuEvento = "2026-01-01T00:00:00";

// Exemplo: Contagem para 25 de Dezembro de 2025, às 18:00, no fuso horário local do usuário
const dataDoSeuEvento = "2025-07-14T12:00:00";

// Inicia o contador quando a página carregar
window.onload = function() {
  iniciarContadorRegressivo(dataDoSeuEvento);
};