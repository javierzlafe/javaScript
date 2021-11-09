let numero = parseFloat(prompt("Hola! ingresa un numero"));
console.log(numero);  
if (numero==0){
    alert("Tu numero es 0")
}else if(numero>=0){
    alert("El numero " + numero +" es positivo, ya que es MAYOR a cero")
    
}else if(numero<=0){
    alert("El numero " + numero +" es negativo ya que es MENOR a cero")
    
}else{
    alert("Error: No ingresaste un numero")
    
}