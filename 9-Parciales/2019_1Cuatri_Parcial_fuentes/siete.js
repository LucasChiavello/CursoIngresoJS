function mostrar()
{
    var iteraciones = 0;
    var altura;
    var sexo;

    var acumuladorAltura = 0;
    var contadorAltura = 0;
    var promedioAltura = 0;

    var banderaAltura = 0;
    var alturaMin;
    var sexoMin;

    var contadorMujeres = 0;


    while (iteraciones < 5) {
        altura = prompt("Ingrese la altura.");
        altura = parseInt(altura);
        while (!(altura > 0 && altura < 250)) {
            altura = prompt("Error. Ingrese la altura.");
            altura = parseInt(altura); 
        }

        acumuladorAltura = acumuladorAltura + altura;
        contadorAltura++;

        sexo = prompt("Ingrese el sexo.");
        while (!(sexo == "f" || sexo == "m")) {
            sexo = prompt("Error. Ingrese 'f' o 'm' para el sexo.");
        }

        if (banderaAltura == 0) {
            alturaMin = altura;
            sexoMin = sexo;
            banderaAltura++;
        } else if (altura < alturaMin ) {
            alturaMin = altura;
            sexoMin = sexo;
        }

        if (sexo == "f" && altura > 190) {
            contadorMujeres++;
        }        
        iteraciones++;
    }

    promedioAltura = acumuladorAltura / contadorAltura;
}
