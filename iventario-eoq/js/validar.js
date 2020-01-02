function validar(event){

		var numero = window.event? window.event.keyCode : event.which;

		if((numero == 8) || (numero ==46)){
			return true;
		}
		return /\d/.test(String.fromCharCode(numero));

	}