function cadena(){
    for(var i=1; i<=100; i++){
        console.log("¡Saludos!");
    }
}

function cadena1(){
    for( var i=5; i<=25; i++){
        console.log(i);
    }
}

function cadena2(){
    for(var i=100; i>=0; i--){
        console.log(i);
    }
}

function cadena3(){
    var cadena = "";
    for(var i=1; i<=10; i++){
        cadena = cadena + i;
        if(i!=10){
            cadena = cadena + "-";
        }
    }
    console.log(cadena);
}

function cadena4(){
    var cadena = "";
    for(var i=9; i>=0; i--){
        if(i % 2 == 0){
            cadena = cadena + i;
            if(i!=0){
                cadena = cadena + "-";
            }
        }
    }
    console.log(cadena);
}