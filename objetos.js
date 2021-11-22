class Reloj{
    constructor(marca, serie, modelo, genero, movimiento, precio){
        this.marca = marca;
        this.serie = serie;
        this.modelo = modelo;
        this.genero = genero;
        this.movimiento = movimiento;
        this.precio = precio;
    }
    muestraCaracteristicas(){
        return this.marca +" "+ this.serie +" "+ this.modelo +" "+ this.genero +" "+this.movimiento +" "+ this.precio;
    }
}

const reloj1= new Reloj("Marca: Cartier","Serie: Tank Americaine", "Modelo: WSTA0018", "Genero: Hombre", "Movimiento: Automatico","Precio: $5.140 usd");

const reloj2= new Reloj("Marca: Cartier","Serie: Calibre de Cartier Drive", "Modelo: W7100052", "Genero: Hombre", "Movimiento: Automatico", "Precio: $2.300 usd");

const reloj3= new Reloj("Marca: Cartier","Serie: Ronde Louis Cartier", "Modelo: W6700455", "Genero: Hombre", "Movimiento: Quarzo", "Precio: $450 usd");

const reloj4= new Reloj("Marca: Cartier","Serie: Cle", "Modelo: W2CL0002", "Genero: Hombre", "Movimiento: Automatico", "Precio: $1.150 usd");

const reloj5= new Reloj("Marca: Cartier","Serie: Ronde Louis Cartier", "Modelo: W6800251", "Genero: Hombre", "Movimiento: Cuerda","Precio: $600 usd");

const reloj6= new Reloj("Marca: Cartier","Serie: monsier", "Modelo: W6800300", "genero: Hombre", "Movimiento: Cuerda","Sin Stock");






alert("Bienvenido a la relojeria Cartier! tenemos 6 modelos de relojes.");

let saber= prompt('Si quiere conocer nuestros modelos ingrese "si". De lo contrario ingrese cualquier dato.');


while(saber=="si"){
    let eleccion= prompt('Ingrese un numero del 1 al 6 para conocer nuestros relojes y precios. De lo contrario ingrese "no"')
    if (eleccion=="1"){
        alert(reloj1.muestraCaracteristicas());
        
    }else if (eleccion=="2"){
        alert(reloj2.muestraCaracteristicas());
        
    }else if (eleccion=="3"){
        alert(reloj3.muestraCaracteristicas());
        
    }else if (eleccion=="4"){
        alert(reloj4.muestraCaracteristicas());
        
    }else if (eleccion=="5"){
        alert(reloj5.muestraCaracteristicas());
        
    }else if (eleccion=="6"){
        alert(reloj6.muestraCaracteristicas());
        
    }else{
        alert("Te esperamos pronto!");
        break;
    }
}

if(saber!="si"){
    alert("Te esperamos pronto!");
}