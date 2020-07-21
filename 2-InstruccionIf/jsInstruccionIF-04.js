function mostrar()
{
	var edad;
	
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	/*Se usa un IF dentro de otro para dar un parametro de donde a donde.

	if (edad < 18) {
		if (edad > 12) {
			alert("Usted es adolescente");	
		}
	}*/

	if (edad < 18 && edad > 12) {
			alert("Usted es adolescente");	
	}

}	