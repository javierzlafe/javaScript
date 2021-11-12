const numeroAcertijo = 16;
let intentos = 1;

alert(
    "Hola! vamos a jugar a adivinar un numero, veamos en cuantos intentos lo logras"
);

let numeroIntento = prompt("Es un numero entre 1 y 20");


while(numeroIntento!=numeroAcertijo){

    if((numeroIntento>0) && (numeroIntento<20) && (numeroIntento!=numeroAcertijo)){
        intentos++;
        numeroIntento = prompt("Ups! el numero "+ numeroIntento +" No es.. Este es tu intento numero: "+intentos);
    }else if((numeroIntento<=0) || (numeroIntento>20) || (numeroIntento!=numeroAcertijo)){
        intentos++;
        numeroIntento = prompt("Ups! No ingresaste un numero que esté entre 1 y 20. Este es tu intento numero: "+intentos);
    }
if(intentos==5){
    numeroIntento = prompt("Vas "+ intentos + " intentos. Te doy una pista, está entre 10 y 20..");
    }
}
if (numeroIntento==numeroAcertijo){
    alert("Felicitaciones! acertaste el numero!! Numero de intentos requeridos: " +intentos);
}