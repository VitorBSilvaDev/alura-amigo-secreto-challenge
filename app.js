let listaDeAmigos = [];
let amigo = ";";
let indice = 0;
let amigoEscolhido = "";

// 1 - Função adicionar amigo 
function adicionarAmigo(){
    amigo = document.querySelector('input').value;

    if (amigo.trim() == ""){
        alert("Insira um nome válido");
    } else {
        listaDeAmigos.push(amigo);
        mostrarAmigos();
    }
    limparCampo();
}

// 1.2 - Mostrando os elementos da lista na tela
function mostrarAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');

    // Cria um novo elemento do tipo list item e atribui o item mais recente da listaDeAmigos como valor
    let elementoDaLista = document.createElement('li');
    elementoDaLista.innerHTML = listaDeAmigos[indice];
    listaAmigos.appendChild(elementoDaLista);

    indice++;
}

// 2.1 - Mostrando o resultado do amigo sorteado
function mostrarResultado(){
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = amigoEscolhido;
}

// 2 - Função sortear amigo
function sortearAmigo(){
    indiceSorteado = parseInt(Math.random() * listaDeAmigos.length);
    amigoEscolhido = listaDeAmigos[indiceSorteado];
    mostrarResultado();

}

// 1.3 - Limpando o campo de input ao apertar botão
function limparCampo(){
    let campo = document.querySelector('input');
    campo.value = "";
}