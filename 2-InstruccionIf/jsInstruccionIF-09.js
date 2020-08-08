function mostrar()
{
	var numero;
	var max;
	var min;

	max = 11;  // el numero maximo tiene que ser 1 numero + que el numero que queremos
	min = 1;

	// Math.floor(Math.random() * (max - min)) + min;
	numero = Math.floor(Math.random() * (max - min)) + min;
	
	alert(numero);
}