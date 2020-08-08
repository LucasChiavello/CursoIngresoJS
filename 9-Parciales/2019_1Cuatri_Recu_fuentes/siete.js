function mostrar()
{
    var cantIteraciones = 0;
    var kilos;
    var sabor;
    var acumulador = 0;
    var promedioKilos;
    var banderaLiviano = 0;
    var pesoLiviano;
    var saborLiviano;
    var contadorCarne = 0;
    var acumuladorCarne = 0;
    var promedioCarne;

	while (cantIteraciones < 4) {
        
        kilos = prompt("Ingrese los kilos de la bolsa");
        kilos = parseInt(kilos);
        while (!(kilos > 0 && kilos < 500)) {
            kilos = prompt("Error. Ingrese kilos entre 0 y 500");
            kilos = parseInt(kilos);
        }

        sabor = prompt("Ingrese el sabor del producto. carne, vegetales, pollo");
        while (!(sabor == "carne" || sabor == "vegetales" || sabor == "pollo")) {
            sabor = prompt("Error. Ingrese el sabor del producto. carne, vegetales, pollo");
        }

        acumulador = acumulador + kilos;
        cantIteraciones++;

        //  C
        if (sabor == "carne") {
            acumuladorCarne = acumuladorCarne + kilos;
            contadorCarne++;
        }
    }
    //  A
    promedioKilos = acumulador / 10;

    //  B
    if (banderaLiviano == 0) {
        pesoLiviano = kilos;
        saborLiviano = sabor;
        banderaLiviano++;
    } else if (kilos < pesoLiviano) {
        pesoLiviano = kilos;
        saborLiviano = sabor;
    }

    //  C
    promedioCarne = acumuladorCarne / contadorCarne;


    console.log(promedioCarne);
}