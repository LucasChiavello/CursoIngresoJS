function mostrar()
{
    var respuesta = true;
    var color;
    var valor;
    var contador = 0;
    var cantRojos = 0;
    var cantRojosCaros = 0;
    var cantPrecioMenos = 0;
    var banderaCaro = 0;
    var masCaro;
    var colorMasCaro;
    var acumuladorPromedio = 0;
    var promedio;

    while (respuesta) {
        color = prompt("Ingrese color color del vehiculo. rojo, verde o amarillo");
        while (!(color == "rojo" || color == "verde" || color == "amarillo")) {
            color = prompt("Error. Ingrese un color. rojo, verde o amarillo");
        }

        valor = prompt("Ingrese el valor del vehiculo");
        valor = parseInt(valor);
        while (!(valor > 0 && valor < 10000)) {
            valor = prompt("Error. Ingrese el valor del vehiculo");
            valor = parseInt(valor);
        }

        acumuladorPromedio = acumuladorPromedio + valor;
        contador++;
        respuesta = confirm("Desea continuar?");

        if (color == "rojo") {
            cantRojos++;
        }
    
        if (color == "rojo" && valor > 5000) {
            cantRojosCaros++;
        }
    
        if (valor < 5000) {
            cantPrecioMenos++;
        }
    
        if (banderaCaro == 0) {
            masCaro = valor;
            colorMasCaro = color;
            banderaCaro++
        } else if (valor > masCaro) {
            masCaro = valor;
            colorMasCaro = color;
        }
    }

            

    promedio = acumuladorPromedio / contador;


    document.write("La cantidad de vehiculos rojos es de: "+cantRojos);
    document.write("<br>"+"La cantidad de vehiculos rojos con precio mayor a 5000 es de: "+cantRojosCaros);
    document.write("<br>"+"La cantidad de vehiculos con precio inferior a 5000 es de: "+cantPrecioMenos);
    document.write("<br>"+"El promedio de los vehiculos es de: "+promedio);
    document.write("<br>"+"El precio del vehiculo mas caro es de : "+masCaro+" y su color es "+colorMasCaro);
}
