function carga(){
	document.getElementById("nombre").focus();

}
//calcular cada operacion
function calcular(){


	var nombre = document.getElementById("nombre").value;
	document.getElementById("name").innerHTML = nombre ;
	var demanda = parseFloat(document.getElementById("demanda").value);
	var costo = parseFloat(document.getElementById("costo").value);
	var dias = parseInt(document.getElementById("diasAnio").value);
	var inventario = parseFloat(document.getElementById("costoIventario").value);
	var costoU = parseFloat(document.getElementById("costoU").value);

	
		var resultado = Math.round(Math.sqrt(((2*demanda*costo)/inventario)));
		var resultado2 = Math.round(demanda / resultado);
		var resultado3 = Math.round(dias / resultado2); 
		var resultado4 = Math.round((demanda/dias) * resultado3);
		var resultado5 = parseFloat((demanda/resultado)*costo).toFixed(2); /// solo quiero 2 decimales
		var resultado6 =  parseFloat((resultado/2)*inventario).toFixed(2);
		var resultadoC = parseFloat(costoU * demanda);
		var resultado7 = (parseFloat(resultado5)+ parseFloat(resultado6)).toFixed(2);
		
		document.getElementById("q").innerHTML = resultado;	
		document.getElementById("n").innerHTML = resultado2;
		document.getElementById("l").innerHTML = resultado3;
		document.getElementById("r").innerHTML = resultado4;
		document.getElementById("co").innerHTML = resultado5;
		document.getElementById("cm").innerHTML = resultado6;
		document.getElementById("ct").innerHTML = resultado7;

	

}
///ahora voy a limpiar y los input y redireccionar al primer input nombre
function limpiar() {
	document.getElementById("nombre").value= "";
	document.getElementById("demanda").value= "";
	document.getElementById("costo").value= "";
	document.getElementById("diasAnio").value= "";
	document.getElementById("costoIventario").value= "";
	document.getElementById("nombre").focus();
}

