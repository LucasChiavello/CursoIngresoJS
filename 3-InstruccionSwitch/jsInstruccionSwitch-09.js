function mostrar()
{
	var estacion;
	var destino;

	estacion = txtIdEstacion.value;
	destino = txtIdDestino.value;
	tarifa = 15000

	switch (estacion + destino) {
		case "Invierno" + "Bariloche":
			alert("La tarifa es de $"+tarifa *1.20);
			break;
		case "Invierno" + "Cordoba":
			alert("La tarifa es de $"+tarifa *1.10);
			break;
		case "Invierno" + "Cataratas":
			alert("La tarifa es de $"+tarifa *1.10);
			break;
		case "Invierno" + "Mar del plata":
			alert("La tarifa es de $"+tarifa *1.20);
			break;
		case "Verano" + "Bariloche":
			alert("La tarifa es de $"+tarifa *0.80);
			break;
		case "Verano" + "Cordoba":
			alert("La tarifa es de $"+tarifa *1.10);
			break;
		case "Verano" + "Cataratas":
			alert("La tarifa es de $"+tarifa *1.10);
			break;
		case "Verano" + "Mar del plata":
			alert("La tarifa es de $"+tarifa *1.20);
			break;
		case "Otoño" + "Bariloche":
			alert("La tarifa es de $"+tarifa *1.10);
			break;
		case "Otoño" + "Cordoba":
			alert("La tarifa es de $"+tarifa);
			break;
		case "Otoño" + "Cataratas":
			alert("La tarifa es de $"+tarifa *1.10);
			break;
		case "Otoño" + "Mar del plata":
			alert("La tarifa es de $"+tarifa *1.10);
			break;
		case "Primavera" + "Bariloche":
			alert("La tarifa es de $"+tarifa *1.10);
			break;
		case "Primavera" + "Cordoba":
			alert("La tarifa es de $"+tarifa);
			break;
		case "Primavera" + "Cataratas":
			alert("La tarifa es de $"+tarifa *1.10);
			break;
		case "Primavera" + "Mar del plata":
			alert("La tarifa es de $"+tarifa *1.10);
			break;	
	}
}