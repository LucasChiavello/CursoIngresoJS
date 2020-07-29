/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	/* var clave;
	var acumulador;

	clave = prompt("ingrese el número clave.");
	
	while (clave != "utn750") {
		clave = prompt("Su clave es incorrecta");
	} */
	var clave;
	var contador;

	clave = prompt("ingrese el número clave.");
	contador = 0

	while (clave != "utn750") {
		++contador;
		clave = prompt("Su clave es incorrecta");
		if (contador == 2) {
			alert("Ya no tiene mas intentos");
			break;
		}			
	}
	
}//FIN DE LA FUNCIÓN
