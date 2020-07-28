function mostrar()
{
	var estacion;
	var destino;

	estacion = txtIdEstacion.value;
	destino = txtIdDestino.value;

	switch (estacion) {
		case "Invierno":
			switch (destino) {
				case "Bariloche":
					alert("si se viaja");
					break;			
				default:
					alert("no se viaja");
					break;
			}
			break;
		case "Verano":
			switch (destino) {
				case "Cataratas":
				case "Mar del plata":					
					break;			
				default:
					alert("no se viaja");
					break;
			}
			break;
		case "Otoño":
			alert("se viaja a todos los destinos");
			break;
		case "Primavera":
			switch (destino) {
				case "Bariloche":
					alert("no se viaja");
					break;			
				default:
					alert("si se viaja");
					break;
			}
	}
}