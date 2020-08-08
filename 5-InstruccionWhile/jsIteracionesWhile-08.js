/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	var numero;
	var mensaje;
	var suma;
	var multiplicacion;
		
	mensaje = true;
	suma = 0;
	multiplicacion = 1;
	
	while (mensaje) {
	
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		while (isNaN(numero)) {
			numero = prompt("Ingrese un numero");
			numero = parseInt(numero);
		}

		if (numero >=0) {
			suma = suma + numero;
		} else if (numero < 0) {
			multiplicacion = multiplicacion * numero;
		}

		
		mensaje = confirm("Desea continuar?");
	}

	txtIdSuma.value = suma;
	txtIdProducto.value = multiplicacion;
}//FIN DE LA FUNCIÓN