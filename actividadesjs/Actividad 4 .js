var contador = 0;
function colorTexto(color){
    var cabecera = document.querySelector(".cabecera");
    cabecera.style.color = color;
    contador = contador + 1;
    document.querySelector(".contador").textContent = contador;
}
 