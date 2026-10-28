const prompt = require("prompt-sync")();

function criarMenu(){
    console.log("1 - Listar Todos\n2 - Inserir no final\n3 - Inserir na posição\n");
}

function criarNo(dado){
    return { dado : dado, proximo: null};
}

function criarLista(){
    return {inicio : null};
}

function listarTodos(lista){
    let atual = lista.inicio;
    while(atual != null){
        console.log(atual.dado);
        atual = atual.proximo;
    }
}

function inserirFim(lista,dado){
    novo = criarNo(dado);
    let atual = lista.inicio;
    if(lista.inicio == null){
        lista.inicio = novo;
        return;
    }
    while(atual.proximo != null){
        atual = atual.proximo;
    }
    atual.proximo = novo;
}

function inserirPosicao(lista,dado, posicao){
    if(posicao == 0){
        return;
    }
    let atual = lista.inicio;
    for(i = 0; i < posicao - 1 && atual != null; i++){
        atual = atual.proximo;
    }
    if (atual == null){
        return;
    }
    novo = criarNo(dado);
    novo.proximo = atual.proximo;
    atual.proximo = novo;
}

opc = 0;
novoDado = "";

lista = criarLista();

while(opc != 9){
    criarMenu();
    opc = Number(prompt("Escolha uma opção: "));
    
    switch (opc){
        case 1:
            listarTodos(lista);
            break;
        case 2:
            novoDado = prompt("Insira o Dado a se inserir: ");
            inserirFim(lista,novoDado);
            break;
        case 3:
            let posicaoE = Number(prompt("Insira a Posição que deseja inserir o dado: "));
            novoDado = prompt("Insira o Dado a se inserir: ");
            inserirPosicao(lista,novoDado);
            break;
        case 9:
            console.log("Saindo do Programa...");
            break;
        default:
            console.log("Opção Invalida\n");
            break;
    }
}
