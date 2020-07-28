/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
/*    var cantidadLamparas;
   var precioLamparas;
   var marcaLamparas;
   var precioFinal;
   var ingresosBrutos;

   cantidadLamparas = txtIdCantidad.value;
   cantidadLamparas = parseInt(cantidadLamparas);
   precioLamparas = 35;
   marcaLamparas = Marca.value;
   precioFinal = cantidadLamparas * precioLamparas;
   ingresosBrutos = 1.10;
   impuestosSumados = (precioFinal * ingresosBrutos)-precioFinal;

   if (cantidadLamparas >= 6) {
    txtIdprecioDescuento.value = (cantidadLamparas * precioLamparas) * 0.50;       
   }else if (cantidadLamparas == 5 && marcaLamparas == "ArgentinaLuz") {
    txtIdprecioDescuento.value = (cantidadLamparas * precioLamparas) * 0.60;
   }else if (cantidadLamparas == 5 && marcaLamparas != "ArgentinaLuz") {
    txtIdprecioDescuento.value = (cantidadLamparas * precioLamparas) * 0.70;
   }else if ((cantidadLamparas == 4 && marcaLamparas == "ArgentinaLuz")||(cantidadLamparas == 4 && marcaLamparas == "FelipeLamparas")) {
    txtIdprecioDescuento.value = (cantidadLamparas * precioLamparas) * 0.75;
   }else if ((cantidadLamparas == 4 && marcaLamparas != "ArgentinaLuz")||(cantidadLamparas == 4 && marcaLamparas != "FelipeLamparas")) {
    txtIdprecioDescuento.value = (cantidadLamparas * precioLamparas) * 0.80;
   }else if (cantidadLamparas == 3 && marcaLamparas == "ArgentinaLuz") {
            txtIdprecioDescuento.value = (cantidadLamparas * precioLamparas) * 0.85;
   }else if (cantidadLamparas == 3 && marcaLamparas == "FelipeLamparas") {
    txtIdprecioDescuento.value = (cantidadLamparas * precioLamparas) * 0.90;
   }else if ((cantidadLamparas == 3 && marcaLamparas != "ArgentinaLuz")||(cantidadLamparas == 3 && marcaLamparas != "FelipeLamparas")) {
    txtIdprecioDescuento.value = (cantidadLamparas * precioLamparas) * 0.95;
   }
   
   if (txtIdprecioDescuento.value > 120) {
    txtIdprecioDescuento.value = " IIBB Usted pago "+(txtIdprecioDescuento.value * ingresosBrutos)+" , siendo "+impuestosSumados+" el impuesto que se pagó.";
   } */

  /*  if (cantidadLamparas >= 6) {
    txtIdprecioDescuento.value = (cantidadLamparas * precioLamparas) * 0.50;
    }else if (cantidadLamparas == 5 && marcaLamparas == "ArgentinaLuz") {
        txtIdprecioDescuento.value = (cantidadLamparas * precioLamparas) * 0.60;
    }else if (cantidadLamparas == 5 && marcaLamparas != "ArgentinaLuz") {
        txtIdprecioDescuento.value = (cantidadLamparas * precioLamparas) * 0.70;
    }else if ((cantidadLamparas == 4 && marcaLamparas == "ArgentinaLuz")||(cantidadLamparas == 4 && marcaLamparas == "FelipeLamparas")) {
        txtIdprecioDescuento.value = (cantidadLamparas * precioLamparas) * 0.75;
    }else if ((cantidadLamparas == 4 && marcaLamparas != "ArgentinaLuz")||(cantidadLamparas == 4 && marcaLamparas != "FelipeLamparas")) {
        txtIdprecioDescuento.value = (cantidadLamparas * precioLamparas) * 0.80;
    }else if (cantidadLamparas == 3 && marcaLamparas == "ArgentinaLuz") {
        xtIdprecioDescuento.value = (cantidadLamparas * precioLamparas) * 0.85;
    }else if (cantidadLamparas == 3 && marcaLamparas == "FelipeLamparas") {
        txtIdprecioDescuento.value = (cantidadLamparas * precioLamparas) * 0.90;
    }else if ((cantidadLamparas == 3 && marcaLamparas != "ArgentinaLuz")||(cantidadLamparas == 3 && marcaLamparas != "FelipeLamparas")) {
        txtIdprecioDescuento.value = (cantidadLamparas * precioLamparas) * 0.95;
    } */
    // if (precioFinal > 120) {
    //     txtIdprecioDescuento.value = " IIBB Usted pago "+(txtIdprecioDescuento.value * ingresosBrutos)+" , siendo "+impuestosSumados+" el impuesto que se pagó.";
    // }

   var cantidadLamparas;
   var precioLamparas;
   var marcaLamparas;
   var precioFinal;
   var ingresosBrutos;

   cantidadLamparas = txtIdCantidad.value;
   cantidadLamparas = parseInt(cantidadLamparas);
   precioLamparas = 35;
   marcaLamparas = Marca.value;
   precioFinal = cantidadLamparas * precioLamparas;
   ingresosBrutos = 1.10;
   impuestosSumados = (precioFinal * ingresosBrutos)-precioFinal;

   switch (cantidadLamparas + marcaLamparas) {
       case 5 + "ArgentinaLuz":
           txtIdprecioDescuento.value = precioFinal * 0.60;
           break;
        case 5 + "FelipeLamparas":      
        case 5 + "JeLuz":
        case 5 + "HazIluminacion":
        case 5 + "Osram":
           txtIdprecioDescuento.value = precioFinal * 0.70;
           break;
        case 4 + "ArgentinaLuz":      
        case 4 + "FelipeLamparas":
            txtIdprecioDescuento.value = precioFinal * 0.75;
            break;
        case 4 + "JeLuz":
        case 4 + "HazIluminacion":
        case 4 + "Osram":
            txtIdprecioDescuento.value = precioFinal * 0.80;
            break;
        case 3 + "ArgentinaLuz":
            txtIdprecioDescuento.value = precioFinal * 0.85;
            break;
        case 3 + "FelipeLamparas":
            txtIdprecioDescuento.value = precioFinal * 0.90;
            break;
        case 3 + "JeLuz":
        case 3 + "HazIluminacion":
        case 3 + "Osram":
            txtIdprecioDescuento.value = precioFinal * 0.95;
            break;
        case 2 + "ArgentinaLuz":
        case 2 + "FelipeLamparas":      
        case 2 + "JeLuz":
        case 2 + "HazIluminacion":
        case 2 + "Osram":
            txtIdprecioDescuento.value = precioFinal;
            break;
        case 1 + "ArgentinaLuz":
        case 1 + "FelipeLamparas":      
        case 1 + "JeLuz":
        case 1 + "HazIluminacion":
        case 1 + "Osram":
            txtIdprecioDescuento.value = precioFinal;
            break;       
       default:
           txtIdprecioDescuento.value = precioFinal * 0.50;
           break;
   }
   
   if (txtIdprecioDescuento.value > 120) {
    txtIdprecioDescuento.value = " IIBB Usted pago "+(txtIdprecioDescuento.value * ingresosBrutos)+" , siendo "+impuestosSumados+" el impuesto que se pagó.";
   }
}
