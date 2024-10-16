function seleccion() {
	const cb=5000000;
	if (document.getElementById('proy1').checked)
		{
		alert("Selecciono E-Commerce");
		var c=cb+(cb*0.4);
		document.getElementById('vp').value=c;
		}	
	if (document.getElementById('proy2').checked)
		{
		alert("Selecciono Diseño Web");
		var c=cb+(cb*0.15);
		document.getElementById('vp').value=c;
		}	
	if (document.getElementById('proy3').checked)
		{
		alert("Selecciono Bases de Datos");
		var c=cb+(cb*0.2);
		document.getElementById('vp').value=c;
		}	
	if (document.getElementById('proy4').checked)
		{
		alert("Selecciono Software");
		var c=cb+(cb*0.25);
		document.getElementById('vp').value=c;
		}
}
