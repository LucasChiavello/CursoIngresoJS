function mostrar()
{
	var destino;
	
	destino = txtIdDestino.value;

	switch (destino) {
		case "Bariloche":
			alert("Aqui hace frio");
			break;
		case "Cataratas":
			alert("Aqui hace calor");
			break;
		case "Mar del plata":
			alert("Aqui hace calor");
			break;
		case "Cordoba":
			alert("Aqui hace frio");
			break;
	}
}