/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var alambre;

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;
    
    largo = parseInt(largo);
    ancho = parseInt(ancho);
    alambre = 3;
    perimetro = ((largo * 2) + ( ancho * 2));

    alambresComprar = perimetro * alambre;

    alert("La cantidad de alambre a comprar es: " + alambresComprar + " metros");


}
function Circulo () 
{
    var radio;

    radio = txtIdRadio.value;
    alambre = 3;

    radio = parseInt(radio);

    area = ((2 * Math.PI) * radio);
    //el Math.PI se usa para declarar el valor pi

    totalAlambre = area * alambre;

    totalAlambre = Math.ceil(totalAlambre) ;
    //el Match.ceil se utiliza para redondear

    alert("La cantidad de alambre a comprar es: " + totalAlambre + " metros");

function Materiales () 
{
    var largo;
    var ancho;

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;
    
    largo = parseInt(largo);
    ancho = parseInt(ancho);

    area = largo * ancho;

    /*se calcula por regla de 3 simple en este caso   1 ------ 2
                                                    area ---- x=   */
    bolsasCemento = 2 * area;
    bolsasCal = 3 * area;

    alert("Se necesitan " + bolsasCemento + " de cemento y " + bolsasCal + " bolsas de cal");
}    