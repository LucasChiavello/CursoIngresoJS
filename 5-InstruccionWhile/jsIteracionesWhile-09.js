/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	var numero;
	var mensaje;
	var maximo;
	var minimo;
	var primera;

	
	mensaje = true;
	primera = 0;
	

	while (mensaje) {
	
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		while (isNaN(numero)) {
			numero = prompt("Ingrese un numero");
			numero = parseInt(numero);
		}

		if (primera == 0) {
			primera++;
			maximo = numero;
			minimo = numero;
		} else if (numero > maximo) {
			maximo = numero;
		} else if (numero < minimo) {
			minimo = numero;
		}
		mensaje = confirm("Desea continuar?");
	}

	txtIdMaximo.value = maximo;
	txtIdMinimo.value = minimo;
}//FIN DE LA FUNCIÓN