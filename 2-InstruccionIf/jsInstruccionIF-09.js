function mostrar()
{
	var numero;
	var max;
	var min;

	max = 11;
	min = 1;

	// Math.floor(Math.random() * (max - min)) + min;
	numero = Math.floor(Math.random() * (max - min)) + min;
	
	alert(numero);
}