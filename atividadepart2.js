const prompt = require("prompt-sync")();

function criarMenu(){
    opc = 0;
    novoDado = "";
    
    
    while(opc != 7){
    console.log("1 - Listar Todos\n2 - Inserir no final\n3 - Inserir na posição\n4 - Excluir posição\n5 - Atualizar posição\n6 - Buscar Valor\n7 - Sair do Programa");
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
            let posicaoI = Number(prompt("Insira a Posição que deseja inserir o dado: "));
            novoDado = prompt("Insira o Dado a se inserir: ");
            inserirPosicao(lista,novoDado, posicaoI);
            break;
        case 4:
            let posicaoE = Number(prompt("Insira a Posição que deseja excluir: "));
            excluirPosicao(lista, posicaoE);
            break;
        case 5:
            let posicaoA = Number(prompt("Insira a Posição que deseja atualizar: "));
            novoDado = prompt("Insira o  Dado a se atualizar: ");
            atualizarPosicao(lista, posicaoA, novoDado);
            break;
        case 6:
            let dadoB = prompt("Insira o Dado a se Buscar: ");
            buscarValor(lista,dadoB);
            break;
        case 7:
            console.log("Saindo do Programa.\n");
            break;
        default:
            console.log("Opção Invalida\n");
            break;
    }
}

}

function criarNo(dado){
    return { dado : dado, proximo: null};
}

function criarLista(){
    return {inicio : null};
}

function listarTodos(lista){
    let atual = lista.inicio;
    if(lista.inicio == null){
        console.log("Lista Vazia.\n");
        return;
    }
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
    novo = criarNo(dado);
    tamanho = contarlista(lista);
    if(lista.inicio == null){
        lista.inicio = novo;
        return;
    }
    if(posicao < 0 || posicao > tamanho){
        console.log("Posição Invalida \n");
        return;
    }
    if(posicao == 0){
        novo.proximo = lista.inicio;
        lista.inicio = novo;
        return;
    }
    let atual = lista.inicio;
    for(i = 0; i < posicao - 1 && atual != null; i++){
        atual = atual.proximo;
    }
    if (atual == null){
        return;
    }
    
    novo.proximo = atual.proximo;
    atual.proximo = novo;
}

function contarlista(lista){
    let cont = 0;
    let atual = lista.inicio
    while(atual != null){
        cont++;
        atual = atual.proximo;
    }
    return cont;
}

function excluirPosicao(lista,posicao){
    let anterior = lista.inicio;
    let tamanhoE = contarlista(lista);
    if(posicao == 0){
        lista.inicio = anterior.proximo;
        return;
    }
    if(posicao < 0 || posicao > tamanhoE - 1){
        console.log("Posição Invalida.\n");
        return;
    }
    
    for(let i = 0; i < posicao - 2 && anterior != null; i++){
        anterior = anterior.proximo;
    }
    let excluir = anterior.proximo;
    if(excluir.proximo == null){
        anterior.proximo = null;
        return;
    }
    anterior.proximo = excluir.proximo;
}

function atualizarPosicao(lista,posicao,novoDado){
    let atual = lista.inicio;
    let tamanhoA = contarlista(lista);
    if(novoDado == "" || novoDado == " "){
        return console.log("Dado Invalido.\n");
    }
    if(posicao < 0 || posicao > tamanhoA - 1){
        console.log("Posição Invalida \n");
        return;
    }
    for(i = 0; i < posicao && atual != null; i++){
        atual = atual.proximo;
    }
    if(atual == null){
        return;
    }
    atual.dado = novoDado;

}

function buscarValor(lista,dadoB){
    let atual = lista.inicio;
    let tamanhoB = contarlista(lista);

    for(let i = 0; i < tamanhoB && atual != null; i++){
        if(atual.dado == dadoB){
            console.log(`O dado se encontra na Posição ${i}`);
            return;
        }else{
            atual = atual.proximo;
        }
    }
    return console.log("Dado não encontrado.\n");

}


lista = criarLista();
criarMenu();

