function mostrar()
{

  var respuesta = true;
  var tipo;
  var precio;
  var acumuladorPrecio = 0;
  var cantidad;
  var contador;
  var acumuladorCantidad = 0;
  var valor;
  var banderaTipo = 0;
  var tipoMax = 0;
  var cantidadMax = 0;
  var banderaCaro = 0;
  var tipoCaro = 0;
  var prodcutoCaro = 0;
  

  while (respuesta) {
    contador++

    tipo = prompt("Ingrese el Producto: arena, cal o cemento");
    while (!(tipo == "arena" || tipo == "cal" || tipo == "cemento")) {
      tipo = prompt("Error. Ingrese el Producto: arena, cal o cemento");
    }

    cantidad = prompt("Ingrese la Cantidad de Bolsas");
    cantidad = parseInt(cantidad);
    while (!(cantidad > 0)) {
      cantidad = prompt("Error. Ingrese una Cantidad de Bolsas mayor a 0");
      cantidad = parseInt(cantidad);
    }

    acumuladorCantidad = acumuladorCantidad + cantidad;

    precio = prompt("Ingrese el precio");
    precio = parseInt(precio);
    while (!(precio > 0)) {
      precio = prompt("Error. Ingrese el precio");
      precio = parseInt(precio);
    } 

    valor = cantidad * precio;

    acumuladorPrecio = acumuladorPrecio + valor;
    
    respuesta = confirm("Desea continuar?");
  }
  if (acumuladorCantidad > 30) {
    acumuladorPrecio = acumuladorPrecio * 0.75;
    console.log(acumuladorPrecio);
  } else if (acumuladorCantidad > 10) {
    acumuladorPrecio = acumuladorPrecio * 0.85;
    console.log(acumuladorPrecio);
  } else {
    console.log(acumuladorPrecio);
  }

  if (banderaTipo == 0) {
    tipoMax = tipo;
    cantidadMax = cantidad;
    banderaTipo++;
  } else if (cantidad > cantidadMax) {
    tipoMax = tipo;
    cantidadMax = cantidad;
  }

  if (banderaCaro == 0) {
    tipoCaro = precio
    prodcutoCaro = tipo
    banderaCaro++
  } else if (precio > tipoCaro) {
    tipoCaro = precio
    prodcutoCaro = tipo
  }

  console.log("El producto con mas cantidad es: "+tipo);
  console.log("El prodcuto mas caro es: "+prodcutoCaro);
}
