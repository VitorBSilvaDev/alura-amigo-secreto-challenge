let listaDeAmigos = [];
let amigo = ";";
let indice = 0;
let amigoEscolhido = "";

// 1 - Função adicionar amigo 
function adicionarAmigo() {
    amigo = document.querySelector('input').value.trim();

    // === para validar se é String
    if (amigo === "") {
        alert("Insira um nome válido");
        return; // if com return (parando a execução da função) ao invés de if/else para melhor legibilidade 
    }

    if (listaDeAmigos.includes(amigo)){
        alert("Esse nome já foi adicionado");
        return;
    }

    listaDeAmigos.push(amigo);
    mostrarAmigos();
    limparCampo();
}


// 1.2 - Mostrando os elementos da lista na tela
function mostrarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    // Usando forEach para percorrer os elementos da lista de forma mais simples e direta
    listaDeAmigos.forEach(amigo => {
        // Cria um novo elemento do tipo list item e atribui a cada um os nomes da listaDeAmigos
        let elementoDaLista = document.createElement('li');
        elementoDaLista.textContent = amigo;
        listaAmigos.appendChild(elementoDaLista);
    })
}

// 2.1 - Mostrando o resultado do amigo sorteado
function mostrarResultado() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = "O sorteado é: " + amigoEscolhido;
}

// 2 - Função sortear amigo
function sortearAmigo() {
    indiceSorteado = parseInt(Math.random() * listaDeAmigos.length);
    amigoEscolhido = listaDeAmigos[indiceSorteado];
    mostrarResultado();

}

// 1.3 - Limpando o campo de input ao apertar botão
function limparCampo() {
    let campo = document.querySelector('input');
    campo.value = "";
}