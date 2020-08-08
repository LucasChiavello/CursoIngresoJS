/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edad;
 	var sexo;
 	var estadoCivil;
	var sueldo;
	var legajo;
	var nacionalidad;

	edad = prompt("Ingrese una edad entre 18 y 90 años");
	edad = parseInt(edad);

	sexo = prompt("Ingrese su f ó m para indicar su sexo");

	estadoCivil = prompt("Ingrese su estado civil  1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos ");
	estadoCivil = parseInt(estadoCivil);

	sueldo = prompt("Ingrese su sueldo");
	sueldo = parseInt(sueldo)

	legajo = prompt("Ingrese numero de legajo");
	legajo = parseInt(legajo);

	nacionalidad = prompt("Ingrese nacionalidad “a” para argentinos, “e” para extranjeros, “n” para nacionalizados.");
	
	while (!(edad >= 18 && edad <= 90)) {
		edad = prompt("Error. Ingrese una edad entre 18 y 90 años");
	}

	while (!(sexo == "f" || sexo == "m")) {
		sexo = prompt("Error. Ingrese su f ó m para indicar su sexo");

	}	if (sexo == "f") {
			sexo = "Femenino";
		} else if (sexo == "m") {
			sexo = "Masculino";
		}
		
	while (!(estadoCivil == 1 || estadoCivil == 2 || estadoCivil == 3 || estadoCivil == 4)) {
		estadoCivil = prompt("Error. Ingrese su estado civil  1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos ");
		estadoCivil = parseInt(estadoCivil);
	}	if (estadoCivil == 1) {
		estadoCivil = "Soltero";
	} else if (estadoCivil == 2) {
		estadoCivil == "Casado";
	} else if (estadoCivil == 3) {
		estadoCivil == "divorciado";
	} else if (estadoCivil == 4) {
		estadoCivil == "Viudo";
	}

	while (sueldo < 8000) {
		sueldo = prompt("Error. Ingrese un sueldo superior a 8000");
		sueldo = parseInt(sueldo)
	}

	while (legajo > 10000) {
		legajo = prompt("Error. Ingrese numero de legajo");
		legajo = parseInt(legajo);
	}

	while (!(nacionalidad == "a" || nacionalidad == "e" || nacionalidad == "n")) {
		nacionalidad = prompt("Ingrese nacionalidad “a” para argentinos, “e” para extranjeros, “n” para nacionalizados.");
	} if (nacionalidad == "a") {
		nacionalidad = "Argentino"
	} else if (nacionalidad == "e") {
		nacionalidad == "Extranjero"
	} else if (nacionalidad == "n") {
		nacionalidad = "nacionalizado"
	}

	txtIdEdad.value = edad;
	txtIdSexo.value = sexo;
	txtIdEstadoCivil.value = estadoCivil
	txtIdSueldo.value = sueldo;
	txtIdLegajo.value = legajo;
	txtIdNacionalidad.value = nacionalidad;

}
