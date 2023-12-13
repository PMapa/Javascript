var meses = ["JAN", "FEV", "MAR"];
var dolar = [4.56, 4.89, 5.23];

meses.push("ABR");
dolar.push(5.95);

document.write("<u> VALOR DO COLAR: </u> <br>");
for (i=0; i < dolar.length; i++) {
    document.write("<br>");
    document.write(meses[i] + ": R$ " + dolar[i]);
}

meses.pop();
document.write(meses);

dolar.unshift(5.30);
alert(dolar);

//dolar.shift();
//dolar.splice();
//dolar.slice();
//dolar.sort();
//dolar.reverse();
//dolar.concat();
//dolar.join();



var notas = [[4.5, 6.5, 8.7], [8.5, 9.7, 9.8]];
var colunas = notas[0].length;

acum = 0;
for (let i=0; i<colunas;  i++){
    acum = acum + notas[1][i];
}

document.write("Media das notas de Maria: " + acum/colunas);