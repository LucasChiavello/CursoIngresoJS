function mostrar()
{
    var continente;
    var pago;
    var dias;
    var precio = 100;
    var valorViaje;
    var precioFinal;

    dias = prompt("Ingrese la cantidad de dias");
    dias = parseInt(dias);
    continente = selecContinente.value;
    pago = selecPago.value;
    valorViaje = dias * precio;

    switch (continente) {
        case "America":
            switch (pago) {
                case "Débito":
                    precioFinal = valorViaje * 0.75;
                    break;  
                case "Cheque":
                    precioFinal = valorViaje * 1.15;
                    break;            

                default:
                    precioFinal = valorViaje * 0.85;
                    break;
            }
            break;
        case "África":
        case "Oceania":
            switch (pago) {
                case "MercadoPago":
                case "Efectivo":
                    precioFinal = valorViaje * 0.55
                    break;
                case "Cheque":
                    precioFinal = valorViaje * 1.15;
                    break;

                default:
                    precioFinal = valorViaje * 0.70;

                    break;
            }
            break;
        case "Europa":
            switch (pago) {
                case "Débito":
                    precioFinal = valorViaje * 0.85;
                    break;
                case "MercadoPago":
                    precioFinal = valorViaje * 0.90;
                    break;
                case "Cheque":
                    precioFinal = valorViaje * 1.15;
                    break; 

                default:
                    precioFinal = valorViaje * 0.95;
                    break;
            }
            break;
        case "Asia":
            switch (pago) {
                case "Cheque":
                    precioFinal = valorViaje * 1.35;
                    break; 

                default:
                    precioFinal = valorViaje * 1.20;
                    break;
            }
            break;            
           
        default:
            break;
    }
    console.log(precioFinal)
}
