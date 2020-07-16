/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperaturaFarenheit;
    
    temperaturaFarenheit = txtIdTemperatura.value;
    
    temperaturaFarenheit = parseInt(temperaturaFarenheit);
    
    transformar = ((temperaturaFarenheit - 32) * (5 / 9));

    alert(temperaturaFarenheit + " Fahrenheit son " + transformar) + "Celsius";
}

function CentigradosFahrenheit () 
{
	var temperaturaCelsius;
    
    temperaturaCelsius = txtIdTemperatura.value;

    temperaturaCelsius = parseInt(temperaturaCelsius);

    transformar = ((temperaturaCelsius * (9/5)) + 32);

    alert(temperaturaCelsius + " Celsius son " + transformar + "Fahrenheit");
}
