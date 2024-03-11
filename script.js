class Artigo {
    constructor(titulo, autor, ano, link) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.link = link;
    }
}

const listaArtigos = [];

// adicionando o que a lista pede
function adicionarArtigo() {
    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const ano = document.getElementById('ano').value;
    const link = document.getElementById('link').value;

    if (!titulo || !autor || !ano || !link) {
        alert('Preencha todos os campos obrigatórios.');
        return;
    }

    if (parseInt(ano) < 1950 || parseInt(ano) > 2024) {
        alert('Por favor, digite um ano entre 1950 e 2024.');
        return;
    }

    const novoArtigo = new Artigo(titulo, autor, ano, link);
    listaArtigos.push(novoArtigo);
    renderizarArtigos();
    document.getElementById('artigoForm').reset();
}

// fará aparecer a lista com todos os dados, na tela do usuário
function renderizarArtigos() {
    const lista = document.getElementById('listaArtigos');
    lista.innerHTML = '';

    listaArtigos.forEach((artigo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${artigo.titulo} - ${artigo.autor} (${artigo.ano})</span>
            <div class="link">
                <a href="${artigo.link}" target="_blank">Leia o artigo</a>
                <div class="button">
                    <button onclick="editarArtigo(${index})">Editar</button>
                    <button onclick="excluirArtigo(${index})">Excluir</button>
                </div>
            </div>
        `;
        lista.appendChild(li);
    });
}

// função para editar o artigo (botão aparecerá após o artigo ser colocado)
function editarArtigo(index) {
    const artigo = listaArtigos[index];
    document.getElementById('titulo').value = artigo.titulo;
    document.getElementById('autor').value = artigo.autor;
    document.getElementById('ano').value = artigo.ano;
    document.getElementById('link').value = artigo.link;
    listaArtigos.splice(index, 1);
    renderizarArtigos();
}

// função para excluir o artigo
function excluirArtigo(index) {
    listaArtigos.splice(index, 1);
    renderizarArtigos();
}

// adicionando um event listener no evento input do campo ano
document.getElementById('ano').addEventListener('input', function(event) {
    // obtendo o valor do campo e a posição do cursor do mouse
    const inputValue = event.target.value;
    const cursorPosition = event.target.selectionStart;
  
    // verificação da possibilidade de ter apenas números
    const onlyDigits = /^\d*$/.test(inputValue);
  
    //retira o caractere caso seja uma letra
    if (!onlyDigits) {
      event.target.value = inputValue.slice(0, cursorPosition - 1) + inputValue.slice(cursorPosition);
      event.target.selectionStart = cursorPosition - 1;
      event.target.selectionEnd = cursorPosition - 1;
    }
  });