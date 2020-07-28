function mostrar()
{
	
	var hora;

	hora = txtIdHora.value;
	hora = parseInt(hora);
	
	switch (hora) {
		case 7:
		case 8:	
		case 9:
		case 10:
			alert( "Es de mañana.");
			break;
	}
}