function mostrar()
{
  var iteraciones = true;
  var tipo;
  var cantidad;
  var precio;

  var acumuladorCantidad = 0;
  var totalAPagar;
  var acumuladorPrecio;

  var banderaTipo = 0;
  var cantidadMax = 0;
  var tipoMax = 0;

  var banderaPrecio = 0;
  var precioMax = 0;
  var tipoPrecioMax = 0;

  while (iteraciones) {
    tipo = prompt("Ingrese el tipo de Producto");
    while (!(tipo == "arena" || tipo == "cal" || tipo == "cemento")) {
      tipo = prompt("Error. Ingrese el tipo de Producto");
    }

    cantidad = prompt("Ingrese la cantidad de bolsas");
    cantidad = parseInt(cantidad);
    while (!(cantidad >= 0)) {
      cantidad = prompt("Error. Ingrese la cantidad de bolsas");
      cantidad = parseInt(cantidad);
    }
    acumuladorCantidad = acumuladorCantidad + cantidad;

    precio = prompt("Ingrese el Precio x Bolsa");
    precio = parseInt(precio);
    while (!(precio > 0)) {
      precio = prompt("Error. Ingrese el Precio x Bolsa");
      precio = parseInt(precio);
    }
    acumuladorPrecio = cantidad * precio;

    if (banderaTipo == 0) {
      cantidadMax = cantidad;
      tipoMax = tipo;
      banderaTipo++;
    } else if (cantidad > cantidadMax) {
      cantidadMax = cantidad;
      tipoMax = tipo;
    }

    if (banderaPrecio == 0) {
      precioMax = precio;
      tipoPrecioMax = tipo;
      banderaPrecio++;
    } else if (precio > precioMax) {
      precioMax = precio;
      tipoPrecioMax = tipo;
    }
    
    iteraciones = confirm("Desea continuar?");
  }


  if (acumuladorCantidad > 30) {
    totalAPagar = acumuladorPrecio * 0.75;
    console.log("El importe total sin descuento es: "+acumuladorPrecio+" y el importe a pagar con descuento es: "+totalAPagar);
  } else if (acumuladorCantidad > 10) {
    totalAPagar = acumuladorPrecio * 0.85;
    console.log("El importe total sin descuento es: "+acumuladorPrecio+" y el importe a pagar con descuento es: "+totalAPagar);
  } else {
    acumuladorPrecio;
    console.log("El importe total a pagar es: "+acumuladorPrecio);
  }

  console.log("El tipo de producto con mayor cantidad de bolsas es: "+tipoMax);
  console.log("El tipo de Producto mas caro es: "+tipoPrecioMax)
}
