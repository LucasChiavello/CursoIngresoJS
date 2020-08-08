function mostrar()
{
    var iteraciones = true;
    var letra;
    var numero;

    var contadorPares = 0;

    var contadorImpares = 0;

    var contadorCeros = 0;

    var acumuladorPositivos = 0;
    var contadorPositivos = 0;
    var promedioPositivos;

    var acumuladorNegativos = 0;

    var bandera = 0;
    var numeroMax;
    var numeroMin;
    var letraMax;
    var letraMin;


    while (iteraciones) {
        letra = prompt("Ingrese una letra");

        numero = prompt("Ingrese un numero");
        numero = parseInt(numero);
        while (!(numero > -100 && numero < 100)) {
            numero = prompt("Error. Ingrese un numero");
            numero = parseInt(numero);
        }

        if (numero % 2 == 0) {
            contadorPares++;
        } else {
            contadorImpares++;
        }      

        if (numero > 0) {
            acumuladorPositivos = acumuladorPositivos+numero;
            contadorPositivos++;
        } else if (numero < 0) {
            acumuladorNegativos = acumuladorNegativos + numero;
        } else if (numero == 0) {
            contadorCeros++;
        }

        if (bandera = 0) {
            numeroMax = numero;
            numeroMin = numero;
            letraMax = letra;
            letraMin = letra;            
            bandera++;
        } else if (numero > numeroMax) {
            numeroMax = numero;
            letraMax = letra;
        } else if (numero < numeroMin) {
            numeroMin = numero;
            letraMin = letra;            
        }
        
        
        iteraciones = confirm("Desea continuar?");
    }

    promedioPositivos = acumuladorPositivos / contadorPositivos;
    console.log(contadorImpares);
}
