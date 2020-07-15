/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numero1;
	var numero2;
	var suma;

	numero1 = txtIdNumeroUno.value;
	numero2 = txtIdNumeroDos.value;

	//declaramos 2 variales pareint para que siempre sean numeros
	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	suma = numero1 + numero2;

	//el parseInt se se utiliza para poder sumar los numeros y que no los concatene
	//suma = parseInt(numero1) + parseInt(numero2);
	// pero si lo hacemos de esta manera tenemos que parsear cada ves


	alert("La suma es " + suma);
}

