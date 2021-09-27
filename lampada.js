"use strict"
const lampada=document.getElementById("lampada")

function piscarLampada(){
    var intervalo = 0;
    var contador = 0;
    while(contador < 10){
        intervalo += 300;
        setTimeout("document.getElementById('lampada').src='img/ligada.jpg';",intervalo);
        intervalo += 300;
        setTimeout("document.getElementById('lampada').src='img/desligada.jpg';",intervalo);
        contador++;
    }
}

function quebrarLampada(){
    lampada.src="img/quebrada.jpg"
    botoesLigaDesliga(true ,true)
}
function verificarLampada(){
    return !lampada.src.includes("quebrada") 
}

function botoesLigaDesliga(estadoLiga,estadoDesliga){
   
    const ligar = document.getElementById("ligar")
    const desligar = document.getElementById("desligar")
    ligar.disabled = estadoLiga
    desligar.disabled = estadoDesliga
}

function ligarLampada(){
    if(verificarLampada()){
    lampada.src="img/ligada.jpg"
    botoesLigaDesliga(true , false)
    }
}
function desligarLampada(){
    if(verificarLampada()){
    lampada.src="img/desligada.jpg"
    botoesLigaDesliga(false , true)
    }
}
//eventos
document.getElementById("ligar").addEventListener("click",ligarLampada)

document.getElementById("desligar").addEventListener("click",desligarLampada)

document.getElementById("lampada").addEventListener("mouseover",ligarLampada)

document.getElementById("lampada").addEventListener("mouseout", desligarLampada)

document.getElementById("lampada").addEventListener("dblclick", quebrarLampada)

document.getElementById("piscar").addEventListener("click", piscarLampada)
 