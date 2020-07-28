function mostrar()
{
	
	var mes;
	
	mes = txtIdMes.value;
	
	switch (mes) {
		case "Febrero":
			alert("Este mes tiene 28 Dias o 29 en año bisiesto");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Este mes tiene 30 Dias");
			break;
		default:
			alert("Este mes tiene 31 Dias");
			break;
	}
}