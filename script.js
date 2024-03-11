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
        alert('Por favor, digite um ano entre 1950 e 2022.');
        return;
    }

    const novoArtigo = new Artigo(titulo, autor, ano, link);
    listaArtigos.push(novoArtigo);
    renderizarArtigos();
    document.getElementById('artigoForm').reset();
}
