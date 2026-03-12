var empezar = document.querySelector(".empezar");
var enviar = document.querySelector(".enviar");
var texto = document.querySelector(".texto");

function crear(){
    num = texto.value;
    for(var i = 1; i <=num; i++){
        const imagen = document.createElement("img");
        imagen.src = "./Alejandro clon.jpg";
        document.getElementById("div").appendChild(imagen);
    } 
}  

function eliminar(){
    document.getElementById("div").innerHTML = "";
}

empezar.addEventListener("click", eliminar);
enviar.addEventListener("click", crear);