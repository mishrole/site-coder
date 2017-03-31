window.onload = function(){

	document.getElementById("form").onsubmit = function(element){
		element.preventDefault();
	}

	function login(email,password){

		this.email = email;
		this.password = password;
	}

	var arrayUsuarios = [];

	document.getElementById("loguear").addEventListener("click", function(){

		var email = document.getElementById("email").value
		var password = document.getElementById("password").value

		if(email.length != 0 && password.length != 0){

			if(!/([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})/gi.test(email)){

				var alertaEmail = document.getElementById("email-error");
				alertaEmail.innerText = "Ingresa un email válido"
			}

		}else{

			var obligatorios = document.getElementById("boton-error");
				obligatorios.innerText = "Todos los campos son obligatorios"
		}
	})

}