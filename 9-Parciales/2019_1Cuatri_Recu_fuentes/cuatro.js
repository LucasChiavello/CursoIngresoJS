function mostrar()
{
    var numero1;
    var numero2;
    var resta;
    var resto;

    numero1 = prompt("Ingrese un numero");
    numero1 = parseInt(numero1);
    numero2 = prompt("Ingrese un numero");
    numero2 = parseInt(numero2);

    if (numero1 == numero2) {
        numero1 = numero1 * numero1;
        console.log(numero1);
    }

    if ((numero1 % numero2) == 0) {
        resta = numero1 - numero2;
        console.log(resta);
    } else {
        resto = numero1 % numero2;
        console.log(resto);
    }

    if (resto > 3) {
        alert("El resto es mayo a 3");
    }
}
