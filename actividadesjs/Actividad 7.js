var btn1 = document.querySelector(".uno");
var btn2 = document.querySelector(".dos");
var btn3 = document.querySelector(".tres");
var btn4 = document.querySelector(".cuatro");
var btn5 = document.querySelector(".cinco");
var btn6 = document.querySelector(".seis");
var btn7 = document.querySelector(".siete");
var btn8 = document.querySelector(".ocho");
var btn9 = document.querySelector(".nueve");
var btn10 = document.querySelector(".diez");
var num = Math.floor(Math.random() * 10) + 1;
var win = document.querySelector(".win");
var lost = document.querySelector(".lost");
var pruebas = 3
var noInten = document.querySelector(".noInten");
function intentar(intento){
    if(intento===num){
        win.style.display = "block";
        lost.style.display = "none";
    }
    else{
        pruebas -= 1
        if(pruebas === 0 | pruebas < 0){
            btn1.style.display = "none";
            btn2.style.display = "none";
            btn3.style.display = "none";
            btn4.style.display = "none";
            btn5.style.display = "none";
            btn6.style.display = "none";
            btn7.style.display = "none";
            btn8.style.display = "none";
            btn9.style.display = "none";
            btn10.style.display = "none";
            noInten.textContent = "¡Recarga la página para volver a jugar!"

        }
        lost.style.display = "block";
        win.style.display = "none";
    }
}

btn1.addEventListener("click", () => { 
    btn1.style.display= "none"; 
    intentar(1);
});
btn2.addEventListener("click", () => { 
    btn2.style.display= "none"; 
    intentar(2);
});
btn3.addEventListener("click", () => { 
    btn3.style.display= "none"; 
    intentar(3);
});
btn4.addEventListener("click", () => { 
    btn4.style.display= "none"; 
    intentar(4);
});
btn5.addEventListener("click", () => { 
    btn5.style.display= "none"; 
    intentar(5);
});
btn6.addEventListener("click", () => { 
    btn6.style.display= "none"; 
    intentar(6);
});
btn7.addEventListener("click", () => { 
    btn7.style.display= "none"; 
    intentar(7);
});
btn8.addEventListener("click", () => { 
    btn8.style.display= "none"; 
    intentar(8);
});
btn9.addEventListener("click", () => { 
    btn9.style.display= "none"; 
    intentar(9);
});
btn10.addEventListener("click", () => { 
    btn10.style.display= "none"; 
    intentar(10);
});