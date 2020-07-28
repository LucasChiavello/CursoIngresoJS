function mostrar()
{
	var destino;
	
	destino = txtIdDestino.value;

	switch (destino) {
		case "Bariloche":
			alert("Se encuentra en el Sur");
			break;
		case "Cataratas":
			alert("Se encuentra en el Norte");
			break;
		case "Mar del plata":
			alert("Se encuentra en el Oeste");
			break;
		case "Cordoba":
			alert("Se encuentra en el Este");
			break;
	}
}