cargo = prompt("Digite o seu cargo: ");
salario = 2000;

switch (cargo) {
    case "gerente":
        salario *= 1.5;
        break;

    case "supervisor":
        salario *= 1.25;
        break;

    
    case "colaborador":
        salario *= 1.1;
        break;
    
    case "estagiario":
        salario /= 0.9;
        break;
}

console.log("Salário do "+ cargo +" é igual a: " + salario);    