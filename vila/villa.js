var canvas=document.getElementById('villaPack');
var papel=canvas.getContext('2d');

var fondo={
	url:"tile.png",
	cargaOk:false
}

var vaca ={
	url:"vaca.png",
	cargaOk:false
}

fondo.imagen= new Image();
fondo.imagen.src=fondo.url;
fondo.imagen.addEventListener("load",cargaFondo);

vaca.imagen= new Image();
vaca.imagen.src=vaca.url;
vaca.imagen.addEventListener("load",cargaVacas);


function cargaFondo()
{
	fondo.cargaOk=true;
	dibujar();
} 

function cargaVacas()
{
	vaca.cargaOk=true;
	dibujar();
}
var cantidad=aleatorio(1,100)

function dibujar()
{
	if(fondo.cargaOk)
	{
		papel.drawImage(fondo.imagen,0,0);
	}
	if(vaca.cargaOk)
	{
		console.log(cantidad);
		for(v=0;v<cantidad;v++)
		{
			var x=aleatorio(0,7);
			var y=aleatorio(0,10);
			x=x*60;
			y=y*40;
			papel.drawImage(vaca.imagen,x,y);	
		}
	}
}

function aleatorio(min,max)
{
	var resultado;
	resultado=Math.floor(Math.random()*(max-min*1)+min);
	return resultado;
}


