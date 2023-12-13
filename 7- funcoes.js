function quadrado (n) {
    quad = n * n;
    return quad;
}

var valor = 5;
resultado = quadrado(valor);

alert(resultado);



function criarProduto (nome, quantidade) {
    return {nome: nome, quantidade: quantidade}
}

var produto = criarProduto("Martelo", 30);

console.log (produto);