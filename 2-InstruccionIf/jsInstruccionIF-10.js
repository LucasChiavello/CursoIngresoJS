// function mostrar()
// {
// 	var numero;
// 	var max;
// 	var min;

// 	max = 11;
// 	min = 1;

// 	// Math.floor(Math.random() * (max - min)) + min;
// 	numero = Math.floor(Math.random() * (max - min)) + min;
	
// 	if (numero >= 9) {
// 		alert("EXELENTE");
// 	}else {
// 		if (numero >= 4) {
// 			alert("APROBO");
// 		}else {
// 			alert("Vamos, la proxima se puede");
// 		}
// 	}
// }
function mostrar()
{
	var numero1;
	var numero2;
	var max;
	var min;

	max = 52;
	min = 1;

	numero1 = Math.floor(Math.random() * (max - min) + min);
	numero2 = Math.floor(Math.random() * (max - min) + min);
	console.log(numero1);
	console.log(numero2);


	// PARTE A 

	if (numero1 % 2 == 0 && numero2 % 2 == 0) {
		multiplicacion = numero1 * numero2;
		alert("multiplicacion");
	}
	
	// // PARTE B 

	if (numero1 % 2 && numero2 % 2) {
		resta = numero1 - numero2;
		alert("resta");
	}

	// //PARTE C

	if (numero1 % 5 == 0 || numero2 % 5 ==0) {
		elevar = Math.pow(numero1, 3);
		alert("elevar");
	}
}