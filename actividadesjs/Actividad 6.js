var texto = document.querySelector(".input");
var nom = document.querySelector(".info");
function alertaNombre(){
    nom.textContent = "¡Saludos, " + document.querySelector(".texto").value + "!";
}
texto.addEventListener("click", alertaNombre);
