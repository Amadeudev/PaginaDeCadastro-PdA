class Artigo {
    constructor(titulo, autor, ano, link) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.link = link;
    }
}

const listaArtigos = [];

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

function renderizarArtigos() {
    const lista = document.getElementById('listaArtigos');
    lista.innerHTML = '';

    listaArtigos.forEach((artigo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${artigo.titulo} - ${artigo.autor} (${artigo.ano})</span>
            <div>
                <a href="${artigo.link}" target="_blank">Leia o artigo</a>
                <button onclick="editarArtigo(${index})">Editar</button>
                <button onclick="excluirArtigo(${index})">Excluir</button>
            </div>
        `;
        lista.appendChild(li);
    });
}

function editarArtigo(index) {
    const artigo = listaArtigos[index];
    document.getElementById('titulo').value = artigo.titulo;
    document.getElementById('autor').value = artigo.autor;
    document.getElementById('ano').value = artigo.ano;
    document.getElementById('link').value = artigo.link;
    listaArtigos.splice(index, 1);
    renderizarArtigos();
}

function excluirArtigo(index) {
    listaArtigos.splice(index, 1);
    renderizarArtigos();
}