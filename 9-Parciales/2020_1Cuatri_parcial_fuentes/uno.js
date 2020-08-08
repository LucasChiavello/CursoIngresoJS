
function mostrar()
{
	var iteraciones = 0;
	var tipo;
	var precio;
	var cantidad;
	var marca;
	var fabricante;

	var banderaAlcohol = 0;
	var alcoholMin = 0;
	var cantidadAlcohol = 0;
	var fabricanteAlcohol;

	var contadorBarbijo = 0;
	var acumuladorBarbijo = 0;
	var contadorJabon = 0;
	var acumuladorJabon = 0;
	var contadorAlcohol = 0;
	var acumuladorAlcohol = 0;

	var acumulador = 0;
	var promedio;

	while (iteraciones < 2) {
		tipo = prompt("Ingrese el tipo de Producto");
		while (!(tipo == "barbijo" || tipo == "jabon" || tipo == "alcohol")) {
			tipo = prompt("Error. Ingrese el tipo de Producto");
		}

		precio = prompt("Ingrese el precio del prodcuto");
		precio = parseInt(precio);
		while (!(precio > 100 && precio < 300)) {
			precio = prompt("Error .Ingrese el precio del prodcuto");
			precio = parseInt(precio);
		}

		cantidad = prompt("Ingrese el cantidad de unidades del prodcuto");
		cantidad = parseInt(cantidad);
		while (!(cantidad > 0 && cantidad < 1000)) {
			cantidad = prompt("Error .Ingrese el cantidad del prodcuto");
			cantidad = parseInt(cantidad);
		}

		acumulador = acumulador + cantidad;

		marca = prompt("Ingrese la Marca del Producto");
		fabricante = prompt("Ingrese el Fabricante del Producto");



		if (tipo == "alcohol") {
			acumuladorAlcohol = acumuladorAlcohol + cantidad;
			contadorAlcohol++;
			if (banderaAlcohol == 0) {
				alcoholMin = precio;
				cantidadAlcohol = cantidad;
				fabricanteAlcohol = fabricante;
				banderaAlcohol++;
			} else if (precio < alcoholMin) {
				alcoholMin = precio;
				cantidadAlcohol = cantidad;
				fabricanteAlcohol = fabricante;
			}
		} else if (tipo == "barbijo") {
			acumuladorBarbijo = acumuladorBarbijo + cantidad;
			contadorBarbijo++;
		} else if (tipo == "jabon") {
			acumuladorJabon = acumuladorJabon + cantidad;
			contadorJabon++;
		}

		if (acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon) {
			promedio = acumulador / acumuladorAlcohol;
		} else if (acumuladorBarbijo > acumuladorJabon) {
			promedio = acumulador / acumuladorAlcohol;
		} else {
			promedio = acumulador / acumuladorJabon;
		}

		iteraciones++;
	}



	// A 
	console.log("El fabricante del alcohol mas barato es: "+fabricanteAlcohol+" con una cantidad de: "+cantidadAlcohol);
	// B
	console.log("El promedio de compra del producto con mas unidades es: "+promedio);
	// C
	console.log("La cantidad de jabones total es de: "+acumuladorJabon);
}
