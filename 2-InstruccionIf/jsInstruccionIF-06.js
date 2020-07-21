function mostrar()
{
	var edad;
	
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if (edad >=18) {
		alert("Usted es mayor de edad");	
	}else {
		if (edad > 12 ) {
			alert("Usted es adolescente");
		}else {
			alert("Usted es un niño");
		}
	}
}