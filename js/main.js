function validateForm(){
	/* Escribe tú código aquí */
	  	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var email = document.getElementById("input-email").value;
	var contrasena = document.getElementById("input-password").value;
	//var lista = document.getElementsByClass("form-control").value;

   if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
    alert("Campo obligatorio");
   }
   else{
       var m = /^[a-zA-Z]*$/;
       if(!nombre.search(m)) {
              console.log("letra")
              m=/[a-z]/g;}
              if(!nombre.search(m)){
                  alert("La primera letra debe empezar con maýuscula")
              }
         else{
            alert ("Ingrese datos válidos (A-Z)");}
   
	} if( apellido == null || apellido.length == 0 || /^\s+$/.test(apellido) ) {
  		return alert("Ingresa tu apellido");
	} else if(!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email))) {
		return alert("Ingresa tu email");
	} else if( contrasena == null || contrasena.length <= 6 || contrasena == "password" || contrasena == 123456 || contrasena == 098754 || /^\s+$/.test(contrasena) ) {
		return alert("Ingresa una contraseña válida");
	} else if( lista.selectedIndex == null || lista.selectedIndex == 0 ) { 
        return alert("Elegir una opción de  la lista");
    }
}