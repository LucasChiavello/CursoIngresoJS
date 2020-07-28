function mostrar()
{
	
	var mes;

	mes = txtIdMes.value;
	
	switch (mes) {
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio.");	
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":	
			alert("Ya pasamos el frio, ahora calor!!!.");
			break;
		default:
			alert("Falta para el invierno.");
			break;
	}
}