function adicionarLinha(){
    let formulario = document.querySelector(".form");
    let produtos = formulario.produto.value;
    let valor = formulario.valor.value;
    let quantidade = formulario.quantidade.value;

    adicionarTabela(produtos,valor,quantidade,formulario);
}
function adicionarTabela(produtos, valor, quantidade, formulario){
    if (produtos && valor && quantidade){
        let tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
        let novaLinha = tabela.insertRow();

        let celulaProdutos = novaLinha.insertCell(0);
        let celulaValor = novaLinha.insertCell(1);
        let celulaQuantidade = novaLinha.insertCell(2);
        let celulaTotal = novaLinha.insertCell(3);

        celulaProdutos.textContent = produtos;
        celulaValor.textContent = valor;
        celulaQuantidade.textContent = quantidade;
        celulaTotal.textContent = calculaTotal(valor, quantidade , formulario);
        
        formulario.reset();

    }
    else{
        alert("pode não");
    }
}
function calculaTotal(valor, quantidade, formulario){
    let resultado = valor * quantidade;

    if (isNaN(resultado)) {
        return("pode não");
    } else {
        return resultado.toFixed(1);
    }
}
