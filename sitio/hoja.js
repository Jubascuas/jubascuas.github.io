
/*validacion de formulario*/

function enviarMail(asunto, contenido) {       /*crea una funcion con dos parametros para poder enviar el email*/

var contenido = contenido; /*crea una variable con su mismo valor*/
var asunto = asunto; /*crea una variable con su mismo valor*/
document.location="mailto:agustinabascuaso@gmail.com?subject="+ asunto +"&body="+ contenido;   /*arma un document con mi direccion de correo electronico, agregando 
asunto como texto y lo divide al cuerpo del texto en contenido*/
} 

function validarContacto() /*crea una variable con su mismo valor que valida el contacto*/
{
	
	var nombre = document.formulario.nombre.value; /*crea una variable al cual su valor va a ser almacenar lo que completen en el campo de nombre del formulario*/
	var apellido = document.formulario.apellido.value;/*crea una variable al cual su valor va a ser almacenar lo que completen en el campo de apellido del formulario*/
	var mail = document.formulario.mail.value; /*crea una variable al cual su valor va a ser almacenar lo que completen en el campo del email del formulario*/
	var comentarios = document.formulario.comentarios.value;
	var celular = parseInt(document.formulario.celular.value); /*crea una variable al cual su valor va a ser almacenar lo que completen en el campo del celular del formulario*/
	
	var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/; /*crea una variable al cual habilitan los usos de caracteres especiales, numeros, etc...*/

	if(nombre.lenght==0 || !isNaN(nombre)) /*verifica si el campo de nombre esta vacio o si es un numero el que ingresaron*/
	{
		document.formulario.nombre.style.backgroundColor = 'rgb(255,166,162)';
		document.formulario.nombre.focus();
		return false; 
	}                            /*devuelve falso y lo marca en rojo, el formulario no puede ser enviado*/

	else if (apellido.lenght==0 || !isNaN(apellido))     /*verifica si el campo de apellido esta vacio o si es un numero el que ingresaron*/
	{ 
		document.formulario.apellido.style.backgroundColor = 'rgb(255,166,162)';
		document.formulario.apellido.focus();
		return false;
}                        /*devuelve falso y lo marca en rojo, el formulario no puede ser enviado*/


	else if(celular.lenght == 0 || celular.lenght > 10 || celular.lenght < 10|| isNaN(celular))  /*verifica si el campo del celular, si esta vacio, si sus 
		caracteres son menores a 10, o si no son numeros ingresados.*/
	{
		document.formulario.celular.style.backgroundColor = 'rgb(255,166,162)';
		document.formulario.celular.focus();
		return false;
	}
                  /* Si se cumple alguna de estas condiciones, se marca en rojo y no puede enviarse el formulario*/

	else if( !(ck_email.test(mail)) || mail.lenght==0 )  /*verifica el campo del email y la almacena, ademas chequea si cumple con las condiciones de
	 la variable ck_Email o si esta vacio el campo*/
	{ console.log('entraste');
	 	document.formulario.mail.style.backgroundColor = 'rgb(255,166,162)';
	 	document.formulario.mail.focus();
	 	return false;
	}
	             /* Si se cumple alguna de estas condiciones, se marca en rojo y no puede enviarse el formulario*/

	else if(comentarios.lenght==0 || !isNaN(comentarios))   /*verifica si los comentarios estan vacios o son numeros  */
	{
		document.formulario.comentarios.style.backgroundColor = 'rgb(255,166,162)';
		document.formulario.comentarios.focus();
		return false;
	}
	            /* Si se cumple alguna de estas condiciones, se marca en rojo y no puede enviarse el formulario*/
	else{
    enviarMail("opinion de " + nombre+" "+ apellido, comentarios);
	}
}

 /* si cumple con todas las condiciones antes solicitadas, se envia el email con las variables de nombre, apellido y comentarios*/



 /*                      JUEGO                                                         */
 

 let correctas=[3,1,2,2,3]; //arreglo para las correctas
 let opciones_elegidas=[]; //arreglo donde guardarn las respuestas del usuario
 let cantidad_correctas=0; //arreglo para las correctas que inician en 0



 function respuesta(num_pregunta,seleccionada){ //función que toma el número de pregunta y la opción seleccionada

opciones_elegidas[num_pregunta]=seleccionada.value;	//guardo la respuesta elegida

id="p" + num_pregunta;
labels=document.getElementById(id).childNodes;	//Si selecciona otra opción, pone la anterior en blanco
labels[3].style.backgroundColor="white";
labels[5].style.backgroundColor="white";
labels[7].style.backgroundColor="white";

seleccionada.parentNode.style.backgroundColor=" rgb(178, 255, 178)";//doy el color a la opción seleccionada

}

function corregir(){//función que compara los arreglos para saber cuantas acertaron

	cantidad_correctas=0;
	for(i=0 ;i <correctas.length; i++)
	{
		if(correctas[i]==opciones_elegidas[i]){
		cantidad_correctas++;
		}
	}
document.getElementById("resultado").innerHTML=cantidad_correctas;

}

