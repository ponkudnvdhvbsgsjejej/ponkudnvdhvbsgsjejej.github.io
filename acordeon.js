var acc = document.getElementsByClassName('botonTituloSeccion');
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click",function (){
		/* activa la propiedad transition  */ 
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		/*si en nuestra hoja de estilo la propiedad display tiene none */
		if (panel.style.display === "block") {
			panel.style.display="none";
		} else {
			panel.style.display="block";
		}
	});
}