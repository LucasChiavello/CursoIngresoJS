function mostrar()
{
    var respuesta = true;
    var nombre;
    var edad;
    var sexo;
    var nota;
    var contadorVaronAprobado = 0;

    var contadorMenorEdad = 0;
    var acumuladorNotaMenores = 0;
    var promedioMenorEdad;

    var contadorAdolescente = 0;
    var acumuladorNotaAdolescentes = 0;
    var promedioAdolescente;

    var contadorMayores = 0;
    var acumuladorNotaMayores = 0;
    var promedioMayorEdad;

    var contadorMasculino = 0;
    var acumuladorNotaMasculino = 0;
    var promedioMasculino;
    
    var contadorFemenino = 0;
    var acumuladorNotaFemenino = 0;
    var promedioFemenino;




    while (respuesta) {
        nombre = prompt("Ingrese el nombre");

        
        edad = prompt("Ingrese una edad");
        edad = parseInt(edad);  
        while (!(edad > 0)) {
            edad = prompt("Error. Ingrese una edad");
            edad = parseInt(edad);  
        }

        sexo = prompt("Ingrese su sexo. 'f' o 'm'");
        while (!(sexo == "f" || sexo =="m")) {
            sexo = prompt("Error. Ingrese su sexo. 'f' o 'm'");

        }

        nota = prompt("Ingrese una nota");
        nota = parseInt(nota);  
        while (!(nota > 0 && nota < 11)) {
            nota = prompt("Error. Ingrese una nota");
            nota = parseInt(nota);  
        }

        if (sexo == "m" && nota >= 7) {
            contadorVaronAprobado++;
        }     
        
        if (edad >= 18) {
            acumuladorNotaMayores = acumuladorNotaMayores + nota;
            contadorMayores++;
        } else if (edad >= 13) {
            acumuladorNotaAdolescentes = acumuladorNotaAdolescentes + nota;
            contadorAdolescente++;
        } else {
            acumuladorNotaMenores = acumuladorNotaMenores + nota;
            contadorMenorEdad++;
        }

        if (sexo == "m") {
            acumuladorNotaMasculino = acumuladorNotaMasculino + nota;
            contadorMasculino++;
        } else {
            acumuladorNotaFemenino = acumuladorNotaFemenino + nota;
            contadorFemenino++;
        }

        

        respuesta = confirm("Desea continuar?");
    }

    promedioMenorEdad = acumuladorNotaMenores / contadorMenorEdad;
    promedioAdolescente = acumuladorNotaAdolescentes / contadorAdolescente;
    promedioMayorEdad = acumuladorNotaMayores / contadorMayores;
    promedioMasculino = acumuladorNotaMasculino / contadorMasculino;
    promedioFemenino = acumuladorNotaFemenino / contadorFemenino;

    document.write("La cantidad de varones aprobados es de: "+contadorVaronAprobado+"<br>"+
    "El promedio de los menores es de: "+promedioMenorEdad+"<br>"+"El promedio de los adolescentes es: "+promedioAdolescente+"<br>"+
    " El promedio de los mayores es de: "+promedioMayorEdad+"<br>"+"El promedio de notas masculino es de: "+promedioMasculino+"<br>"+
    "El promedio de notas Femenino es de: "+promedioFemenino);
}
