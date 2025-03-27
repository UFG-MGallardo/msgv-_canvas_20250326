var canvas_tres = document.getElementById("lienzo-tres");
var canvas_cuatro = document.getElementById("lienzo-cuatro");
var canvas_cinco = document.getElementById("lienzo-cinco");
var canvas_seis = document.getElementById("lienzo-seis");

if(canvas_tres.getContext){
    console.log("Si se soporta la propiedad getContext")

    //Contexto del objeto <canvas>
    var ctx_3 = canvas_tres.getContext("2d");

    ctx_3.fillStyle = "rgb(200,0,0)"; //objeto con color de fondo
    ctx_3.fillRect(10,10,55,50); //dibujar el objeto en la posicion - - ancho - y alto -

    ctx_3.fillStyle = "rgb(0,0,200,0.5)"; //objeto con color de fondo
    ctx_3.fillRect(30,30,55,50); //dibujar el objeto en la posicion - - ancho - y alto -

    ctx_3.fillStyle = "rgb(0,200,0,0.5)"; //objeto con color de fondo
    ctx_3.fillRect(50,50,55,50); //dibujar el objeto en la posicion - - ancho - y alto -

} else{
    console.log("No se soporta la propiedad getContext")
}

if(canvas_cuatro.getContext){
    console.log("Si se soporta la propiedad getContext")

    //Contexto del objeto <canvas>
    var ctx_4 = canvas_cuatro.getContext("2d");

    ctx_4.beginPath(); //iniciar un trazo
    ctx_4.moveTo(5,5); //colocar el puntero en posicion 5,5
    ctx_4.lineTo(125,125); //traza una linea hasta la posicion 125, 125
    ctx_4.strokeStyle = "#ffffff";
    ctx_4.stroke(); // se imprime el lienzo

} else{
    console.log("No se soporta la propiedad getContext")
}

if(canvas_cinco.getContext){
    console.log("Si se soporta la propiedad getContext")

    //Contexto del objeto <canvas>
    var ctx_5 = canvas_cinco.getContext("2d");

    ctx_5.beginPath();
    ctx_5.setLineDash([5,15]); //linea punteada, 15 pixeles dibujados y 5 pixeles sin dibujar
    ctx_5.moveTo(0,40); //colocar el puntero del lapiz
    ctx_5.lineTo(150,40); //mover el lapiz
    ctx_5.strokeStyle = "#FFFFFF";
    ctx_5.stroke();

    ctx_5.beginPath();
    ctx_5.setLineDash([]); //linea punteada, 15 pixeles dibujados y 5 pixeles sin dibujar
    ctx_5.moveTo(0,120); //colocar el puntero del lapiz
    ctx_5.lineTo(150,120); //mover el lapiz
    ctx_5.strokeStyle = "#FFFFFF";
    ctx_5.stroke();

} else{
    console.log("No se soporta la propiedad getContext")
}

if(canvas_seis.getContext){
    console.log("Si se soporta la propiedad getContext")

    //Contexto del objeto <canvas>
    var ctx_6 = canvas_seis.getContext("2d");


} else{
    console.log("No se soporta la propiedad getContext")
}