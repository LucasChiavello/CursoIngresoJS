function mostrar()
{
	var nombre;
	var nacionalidad;
	var edad;
	var sexo;
	var estadoCivil;
	var tempCorporal;
	var respuesta = true;

	var banderaTemperatura = 0;
	var temperaturaMax = 0;
	var nacionalidadMax = 0;

	var contadorMayoresSolteros = 0;

	var contadorMujeresViudasSolteras = 0;

	var contadorTerceraEdad = 0;

	var contadorMujeres = 0;
	var acumuladorMujeres = 0;


	while (respuesta) {
		nombre = prompt("Ingrese el nombre");
		nacionalidad = prompt("Ingrese la Nacionalidad");

		edad = prompt("Ingrese la Edad");
		edad = parseInt(edad);
		while (!(edad >= 0)) {
			edad = prompt("Error. Ingrese la Edad");
			edad = parseInt(edad);
		}

		sexo = prompt("Ingrese su sexo 'f' o 'm'");
		while (!(sexo == "f" || sexo == "m")) {
			sexo = prompt("Error. Ingrese su sexo 'f' o 'm'");
		}

		estadoCivil = prompt("Ingrese su estado civil. soltero, casado, viudo");
		while (!(estadoCivil == "soltero" || estadoCivil == "casado" || estadoCivil == "viudo")) {
			estadoCivil = prompt("Error. Ingrese su estado civil. soltero, casado, viudo");
		}

		tempCorporal = prompt("Ingrese la temperatura corporal");
		tempCorporal = parseInt(tempCorporal);
		while (isNaN(tempCorporal)) {
			tempCorporal = prompt("Error. Ingrese la temperatura corporal");
			tempCorporal = parseInt(tempCorporal);
		}

		if (banderaTemperatura == 0) {
			temperaturaMax = tempCorporal;
			nacionalidadMax = nacionalidad;
			banderaTemperatura++;
		} else if (tempCorporal > temperaturaMax) {
			temperaturaMax = tempCorporal;
			nacionalidadMax = nacionalidad;
		}

		if (edad >= 18 && estadoCivil == "soltero") {
			contadorMayoresSolteros++;
		}

		if (sexo == "f" && estadoCivil == "soltero" || estadoCivil == "viudo") {
			contadorMujeresViudasSolteras++;
		}

		if (edad > 60 && tempCorporal > 38) {
			contadorTerceraEdad++;
		}

		if (sexo == "f" && estadoCivil == "casado") {
			acumuladorMujeres = acumuladorMujeres + edad;
			contadorMujeres++;
		}
		respuesta = confirm("Desea continuar?");
	}


	// A
	console.log(nacionalidadMax);
	// B
	console.log(contadorMayoresSolteros);
	// C
	console.log(contadorMujeresViudasSolteras);
	// D
	console.log(contadorTerceraEdad);
	// E
	console.log(acumuladorMujeres / contadorMujeres);
}
