// ====================================================
  // Os 4 passos do apocalipse (aka EventListeners)

  // 1. querySelector no elemento que vai sofrer a acao
  const button = document.querySelector('#show-hint');

  // 2. escolher qual a acao
  const eventType = 'click';

  // 3. o que fazer quando a acao eh ativada
  // (tem que ser uma funcao)
  const func = (event) => {
    // adicionar a classe 'active' ao elemento que tem
    // a classe 'hint'
    const hint = document.querySelector('.hint');

    hint.classList.toggle('active');
  }

  // 4. juntar tudo num 'addEventListener'
  button.addEventListener(eventType, func);
// ====================================================

// 1. achar o caminho dos botões
const quadradinhos = document.querySelectorAll('td');

// 2. qual tipo de evento
const acao = 'click';

// 3. o que vai acontecer quando a gente clicar (funcao)
const move = (event) => {
  // saber se o quadrado esta perto do '.empty'
  // 1. identificar o quadrado clicado
  const quadradinhoClicado = event.currentTarget
  // 1.1 pegar as coords do quadradinho clicado
  const clicadoColuna = quadradinhoClicado.cellIndex; // coluna do quadrado
  const clicadoLinha = quadradinhoClicado.parentElement.rowIndex; // linha do quadrado

  // 2. identificar o quadrado vazio ('.empty')
  const quadradinhoPreto = document.querySelector('.empty');
  // 2.1 pegar as coords do quadradinho preto
  const pretoColuna = quadradinhoPreto.cellIndex; // coluna do quadrado
  const pretoLinha = quadradinhoPreto.parentElement.rowIndex; // linha do quadrado

  // se a coluna for a mesma do '.empty'
  if(clicadoColuna === pretoColuna){
    // verifcar se o ind da linha é igual a +- 1 a do '.empty'
    if(clicadoLinha === pretoLinha + 1 || clicadoLinha === pretoLinha - 1){
      // trocar o quadrado clicado com o '.empty'
      quadradinhoPreto.classList.remove('empty');
      quadradinhoClicado.classList.add('empty');

      quadradinhoPreto.innerText = quadradinhoClicado.innerText;
      quadradinhoClicado.innerText = '';

      // checar se o usuario venceu
      const quadradinhosModificados = document.querySelectorAll('td');
      const numeroDosQuadrados = []
      const vitoria = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,"
      quadradinhosModificados.forEach((quadrado) => {
        numeroDosQuadrados.push(quadrado.innerText);
      })
      if(numeroDosQuadrados.join() === vitoria){
        alert('Finalmente!')
        window.location.reload();
      }
    }
  } else if(clicadoLinha === pretoLinha){ // se a linha for a mesma do '.empty'
    // verificar se o ind da coluna é igual a +- 1 a do '.empty'
    if(clicadoColuna === pretoColuna + 1 || clicadoColuna === pretoColuna - 1){
      // trocar o quadrado clicado com o '.empty'
      quadradinhoPreto.classList.remove('empty');
      quadradinhoClicado.classList.add('empty');

      quadradinhoPreto.innerText = quadradinhoClicado.innerText;
      quadradinhoClicado.innerText = '';

      // checar se o usuario venceu
      const quadradinhosModificados = document.querySelectorAll('td');
      const numeroDosQuadrados = []
      const vitoria = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,"
      quadradinhosModificados.forEach((quadrado) => {
        numeroDosQuadrados.push(quadrado.innerText);
      })
      if(numeroDosQuadrados.join() === vitoria){
        alert('Finalmente!')
        window.location.reload();
      }

    }
  }
}

// 4. juntar isso no final
quadradinhos.forEach((quadradinho) => {
  quadradinho.addEventListener(acao, move);
})


// =======================================================
// extra -> refatora
const moveRefatorado = (event) => {
  // 1. identificar o quadrado clicado
  const quadradinhoClicado = event.currentTarget

  // 2. identificar o quadrado vazio ('.empty')
  const quadradinhoPreto = document.querySelector('.empty');

  // 3. trocar se forem vizinhos
  if(saoVizinhos(quadradinhoPreto, quadradinhoClicado)){
    trocaQuadrados(quadradinhoPreto, quadradinhoClicado);
  }
}

// extra -> refatoracao
const trocaQuadrados = (quadradinhoPreto, quadradinhoClicado) => {
  // trocar o quadrado clicado com o '.empty'
  quadradinhoPreto.classList.remove('empty');
  quadradinhoClicado.classList.add('empty');

  quadradinhoPreto.innerText = quadradinhoClicado.innerText;
  quadradinhoClicado.innerText = '';

  // checar se o usuario venceu
  const quadradinhosModificados = document.querySelectorAll('td');
  const numeroDosQuadrados = []
  const vitoria = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,"
  quadradinhosModificados.forEach((quadrado) => {
    numeroDosQuadrados.push(quadrado.innerText);
  })
  if(numeroDosQuadrados.join() === vitoria){
    alert('Finalmente!')
    window.location.reload();
  }
}

const saoVizinhos = (quadradinhoPreto, quadradinhoClicado) => {
  // 1.1 pegar as coords do quadradinho clicado
  const clicadoColuna = quadradinhoClicado.cellIndex; // coluna do quadrado
  const clicadoLinha = quadradinhoClicado.parentElement.rowIndex; // linha do quadrado

  // 2.1 pegar as coords do quadradinho preto
  const pretoColuna = quadradinhoPreto.cellIndex; // coluna do quadrado
  const pretoLinha = quadradinhoPreto.parentElement.rowIndex; // linha do quadrado

  // se a coluna for a mesma do '.empty'
  if(clicadoColuna === pretoColuna){
    // verifcar se o ind da linha é igual a +- 1 a do '.empty'
    if(clicadoLinha === pretoLinha + 1 || clicadoLinha === pretoLinha - 1){
      return true
    }
  } else if(clicadoLinha === pretoLinha){ // se a linha for a mesma do '.empty'
    // verificar se o ind da coluna é igual a +- 1 a do '.empty'
    if(clicadoColuna === pretoColuna + 1 || clicadoColuna === pretoColuna - 1){
      return true
    }
  }
  return false;
}
