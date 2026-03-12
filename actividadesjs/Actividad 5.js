var btn = document.querySelector("button");
var imagen1 = document.querySelector(".imagen1");
var texto = document.querySelector(".submit");
var imagen2 = document.querySelector(".imagen2");
var input = document.querySelector(".texto")
var raton = document.querySelector(".raton");
var imagen3 = document.querySelector(".imagen3");

function alerta(){
    alert("Hola mundo");
}

function alertaNombre(){
    var textContent = document.querySelector(".texto").value;
    alert(textContent);
}
function img1Si(){
    imagen1.style.display="block";
}
function img1No(){
    imagen1.style.display="none";
}
function img2Si(){
    imagen2.style.display="block";
    imagen3.style.display="none";
}
function img3Si(){
    imagen2.style.display="none";
}
btn.addEventListener("click", alerta);
texto.addEventListener("click", alertaNombre);
input.addEventListener("focus", img1Si);
input.addEventListener("blur", img1No);
raton.addEventListener("mouseover", img1Si);
raton.addEventListener("mouseout", img1No);
imagen3.addEventListener("dblclick", img2Si);
imagen2.addEventListener("dblclick", img3Si);