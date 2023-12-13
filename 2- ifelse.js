var idade; 
//prompt para um input
idade = prompt("Digite a idade: ")


if (idade <= 18) {
    var cnh = false;
    document.write("Jovem. <br>");
}

else if (idade >= 80 ) {
    var cnh = true;
    document.write("Idoso <br>");
}

else {
    var cnh = true;
    document.write("Adulto <br>");
}


if(cnh) {
    document.write("Pode dirigir!");
}
else {
    document.write("Não pode dirigir!");
}