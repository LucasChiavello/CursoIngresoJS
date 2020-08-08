/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numero;

	respuesta = true;
	contador=0;
	acumulador=0;
	

	while (respuesta) {
		contador++;
		
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		
		while (isNaN(numero)) {
			numero = prompt("Ingrese un numero");
			numero = parseInt(numero);
		}

		acumulador = acumulador + numero;
		respuesta = confirm("Desea continuar?");
	}

	console.log(contador);

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;
 
}//FIN DE LA FUNCIÓN