let listaDeAmigos = [];
let amigo = ";";
let indice = 0;
let amigoEscolhido = 0;
// 1 - Função adicionar amigo 

function adicionarAmigo(){
    amigo = document.querySelector('input').value;
    console.log(amigo);

    if (amigo.trim() == ""){
        alert("Insira um nome válido");
    } else {
        listaDeAmigos.push(amigo);
        mostrarAmigos();
        console.log(listaDeAmigos);
    }
    limparCampo();
}

// 1.2) Mostrando os elementos da lista na tela
function mostrarAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');

    // Cria um novo elemento do tipo list item e atribui o item mais recente da listaDeAmigos como valor
    let elementoDaLista = document.createElement('li');
    elementoDaLista.innerHTML = listaDeAmigos[indice];
    listaAmigos.appendChild(elementoDaLista);

    indice++;
}

function mostrarResultado(){
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = listaDeAmigos[amigoEscolhido];
}

function sortearAmigo(){
    amigoEscolhido = parseInt(Math.random() * listaDeAmigos.length);
    listaDeAmigos[amigoEscolhido];
    mostrarResultado();
    console.log(amigoEscolhido);
    console.log(listaDeAmigos[amigoEscolhido]);
}

// 1.3) Limpando o campo de input ao apertar botão
function limparCampo(){
    let campo = document.querySelector('input');
    campo.value = "";
}