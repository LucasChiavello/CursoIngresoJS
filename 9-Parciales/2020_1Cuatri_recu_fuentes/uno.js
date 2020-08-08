
function mostrar()
{
	var cantidadCompras = 0;
	var producto;
	var precio;
	var unidades;
	var marca;
	var fabricante;	
	var banderaJavon = 0;
	var javonCaro;
	var cantidadJavon;
	var fabricanteJavon;
	var banderaUnidades = 0;
	var unidadesMax;
	var productoMax;
	var contadorBarbijo = 0;

	var acumulador = 0;



	while (cantidadCompras < 5) {
		
		marca = prompt("Ingrese la Marca del Prodcuto");
		fabricante = prompt("Ingrese el Fabricante del Prodcuto");

		producto = prompt("Ingrese el Tipo de Prodcuto. javon, barbijo, alcohol");
		while (!(producto == "javon" || producto == "barbijo" || producto == "alcohol")) {
			producto = prompt("Error. Ingrese el Tipo de Prodcuto. javon, barbijo, alcohol");
		}

		precio = prompt("Ingrese el Precio del prodcuto");
		precio = parseInt(precio);
		while (!(precio > 100 || precio < 300 || isNaN(precio))) {
			precio = prompt("Error. Ingrese el Precio del prodcuto");
			precio = parseInt(precio);
		}

		unidades = prompt("Ingrese la Cantidad de Unidades del prodcuto");
		unidades = parseInt(unidades); 
		while (!(unidades > 0 && unidades <= 1000)) {
			unidades = prompt("Error. Ingrese una Cantidad entre 1 y 1000");
			unidades = parseInt(unidades); 
		}

		if (banderaJavon == 0 && producto == "javon") {
			javonCaro = precio;
			cantidadJavon = unidades;
			fabricanteJavon = fabricante;
			banderaJavon++;
		} else if (precio > javonCaro) {
			javonCaro = precio;
			cantidadJavon = unidades;
			fabricanteJavon = fabricante;
		}

		if (banderaUnidades == 0) {
			unidadesMax = unidades;
			productoMax = producto;
			banderaUnidades++;
		} else if (unidades > unidadesMax) {
			unidadesMax = unidades;
			productoMax = producto;
		}

		if (producto == "barbijo") {
			contadorBarbijo++;
		}
		cantidadCompras++;
		acumulador = acumulador + unidades;
		
	}

	console.log("La canidad comprada del javon mas caro es de: "+cantidadJavon+" y el fabricante es: "+fabricante);

	console.log(acumulador/unidadesMax);

	console.log(contadorBarbijo);
	
}
