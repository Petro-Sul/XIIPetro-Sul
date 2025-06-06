document.addEventListener('DOMContentLoaded', function () {
  const questions = document.querySelectorAll('.faq-question');

  questions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isActive = question.classList.contains('active');

      // Opcional: Fechar outras respostas abertas antes de abrir a nova
       document.querySelectorAll('.faq-item .faq-question.active').forEach(activeQuestion => {
         if (activeQuestion !== question) {
           activeQuestion.classList.remove('active');
           activeQuestion.nextElementSibling.style.maxHeight = null;
           activeQuestion.nextElementSibling.style.padding = '0 18px';
      }
      });

      question.classList.toggle('active');

      if (question.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        // Adiciona padding gradualmente se desejar (já incluso na transição do .faq-answer)
        // answer.style.padding = '18px'; // Ou o padding que você definiu para o estado aberto
      } else {
        answer.style.maxHeight = null;
        // answer.style.padding = '0 18px'; // Reduz o padding gradualmente
      }
    });
  });
});

function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('show');
}


window.addEventListener('scroll', function() {
    // Selecione o botão do WhatsApp e o rodapé
    // ! IMPORTANTE: O seletor do botão agora é '.zap'
    var botaoWhatsapp = document.querySelector('.zap'); // MUDADO AQUI
    var footer = document.querySelector('footer');      // Mantenha 'footer' se seu rodapé for a tag <footer>
                                                    

    if (!botaoWhatsapp || !footer) {
        // console.warn("Elemento do botão WhatsApp (classe 'zap') ou do rodapé não encontrado.");
        return;
    }

    var footerRect = footer.getBoundingClientRect();
    var viewportHeight = window.innerHeight;
    var espacamentoDoRodape = 20; // Ajuste este valor em pixels conforme sua preferência
    var posicaoOriginalBottom = '20px'; // Deve ser o mesmo valor do CSS para a classe '.zap'

    if (footerRect.top < viewportHeight && footerRect.bottom >= 0) {
        var novoBottom = (viewportHeight - footerRect.top) + espacamentoDoRodape;
        botaoWhatsapp.style.bottom = novoBottom + 'px';
    } else {
        botaoWhatsapp.style.bottom = posicaoOriginalBottom;
    }
});