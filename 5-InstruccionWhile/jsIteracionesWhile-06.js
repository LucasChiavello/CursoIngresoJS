function mostrar()
{
	var contador;
	var acumulador;
	var numero;

	contador=0;
	acumulador=0;

	while (contador < 5) {
		contador++;
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		
		while (isNaN(numero)) {
			numero = prompt("No es un numero. Ingrese un numero.");
			numero = parseInt(numero);
		}

		acumulador = acumulador + numero;
		
	}
	
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN