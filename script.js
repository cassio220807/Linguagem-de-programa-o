// Respostas corretas (por ID do botão)
const respostasCorretas = {
    A1: true,
    B1: true,
    C2: true,
    D2: true,
    E3: true,
    F2: true
  };
  
  // Seleciona todos os grupos de perguntas
  const perguntas = document.querySelectorAll('.pr3');
  
  // Ativa a seleção dos botões (1 por pergunta)
  perguntas.forEach(pergunta => {
    const botoes = pergunta.querySelectorAll('.but');
  
    botoes.forEach(botao => {
      botao.addEventListener('click', () => {
        // Remove seleção anterior
        botoes.forEach(b => b.classList.remove('selecionado'));
  
        // Adiciona classe selecionado
        botao.classList.add('selecionado');
      });
    });
  });
  
  // Ação ao clicar no botão Enviar
  document.getElementById('enviar').addEventListener('click', (e) => {
    e.preventDefault();
  
    const selecionados = document.querySelectorAll('.but.selecionado');
    const resultadoDiv = document.getElementById('resultado');
  
    if (selecionados.length !== perguntas.length) {
      resultadoDiv.style.color = 'rgb(170, 4, 4)';
      resultadoDiv.innerHTML = 'Responda todas as perguntas antes de enviar.';
      return;
    }
  
    let acertos = 0;
  
    selecionados.forEach(botao => {
      // Marca certo ou errado com cores
      if (respostasCorretas[botao.id]) {
        acertos++;
        botao.style.backgroundColor = 'rgb(0, 102, 42)';
      } else {
        botao.style.backgroundColor = 'rgb(170, 4, 4)';
      }
    });
  
    // Exibe o resultado na div .resposta
    resultadoDiv.innerHTML = `Você acertou <strong>${acertos}</strong> de <strong>${perguntas.length}</strong> perguntas.`;
  
    if (acertos === perguntas.length) {
      resultadoDiv.style.color = 'black';
      resultadoDiv.innerHTML += '<br>Parabéns! Você acertou tudo! 🎉';
    } else if (acertos >= perguntas.length / 2) {
      resultadoDiv.style.color = 'black';
      resultadoDiv.innerHTML += '<br>Bom trabalho! Mas dá pra melhorar 😉';
    } else {
      resultadoDiv.style.color = 'black';
      resultadoDiv.innerHTML += '<br>Continue praticando! 💪';
    }
  });