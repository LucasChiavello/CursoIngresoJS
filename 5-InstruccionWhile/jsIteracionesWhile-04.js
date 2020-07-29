/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numero;
	numero = prompt("ingrese un número entre 0 y 10.");

	while (!(numero >= 0 && numero < 10)) {
		numero = prompt("ingrese un número entre 0 y 10.");
	}
	
}//FIN DE LA FUNCIÓN