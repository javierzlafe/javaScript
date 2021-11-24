class Reloj {
    constructor(marca, serie, modelo, genero, movimiento, precio) {
        this.marca = marca;
        this.serie = serie;
        this.modelo = modelo;
        this.genero = genero;
        this.movimiento = movimiento;
        this.precio = precio;
    }
    muestraCaracteristicas() {
        return this.marca + " " + this.serie + " " + this.modelo + " " + this.genero + " " + this.movimiento + " " + "$" + this.precio;
    }
    calculoDeCuotas3() {
        return "su precio final es: $" + (parseFloat(this.precio) * 1.10);
    }
    calculoDeCuotas6() {
        return "su precio final es: $" + (parseFloat(this.precio) * 1.13);
    }
    calculoDeCuotas12() {
        return "su precio final es: $" + (parseFloat(this.precio) * 1.16);
    }
}

const reloj1 = new Reloj("Marca: Cartier", "Serie: Tank Americaine", "Modelo: WSTA0018", "Genero: Hombre", "Movimiento: Automatico", "5140");

const reloj2 = new Reloj("Marca: Cartier", "Serie: Calibre de Cartier Drive", "Modelo: W7100052", "Genero: Hombre", "Movimiento: Automatico", "2300");

const reloj3 = new Reloj("Marca: Cartier", "Serie: Ronde Louis Cartier", "Modelo: W6700455", "Genero: Hombre", "Movimiento: Quarzo", "450");

const reloj4 = new Reloj("Marca: Cartier", "Serie: Cle", "Modelo: W2CL0002", "Genero: Hombre", "Movimiento: Automatico", "1150");

const reloj5 = new Reloj("Marca: Cartier", "Serie: Ronde Louis Cartier", "Modelo: W6800251", "Genero: Hombre", "Movimiento: Cuerda", "600");

const reloj6 = new Reloj("Marca: Cartier", "Serie: monsier", "Modelo: W6800300", "genero: Hombre", "Movimiento: Cuerda", "Sin Stock");






alert("Bienvenido a la relojeria Cartier! tenemos 6 modelos de relojes.");

let saber = prompt('Si quiere conocer nuestros modelos ingrese "si". De lo contrario ingrese cualquier dato.');


while (saber == "si") {
    let eleccion = prompt('Ingrese un numero del 1 al 6 para conocer nuestros relojes y precios. De lo contrario ingrese "no"')
    if (eleccion == "1") {
        alert(reloj1.muestraCaracteristicas());

        alert("conozca nuestras tarifas con tarjetas, tenemos planes de 3, 6 y 12 cuotas con sus respectivos intereses");

        metodoDePago = prompt("Elija la cantidad de cuotas con que quisisera abonar:");

        if (metodoDePago == "3") {
            alert(reloj1.calculoDeCuotas3());
        } else if (metodoDePago == "6") {
            alert(reloj1.calculoDeCuotas6());
        } else if (metodoDePago == "12") {
            alert(reloj1.calculoDeCuotas12());
        } else {
            alert("No ingresaste un numero de cuotas valido");
        }

    } else if (eleccion == "2") {
        alert(reloj2.muestraCaracteristicas());
        alert("conozca nuestras tarifas con tarjetas, tenemos planes de 3, 6 y 12 cuotas con sus respectivos intereses");

        metodoDePago = prompt("Elija la cantidad de cuotas con que quisisera abonar:");

        if (metodoDePago == "3") {
            alert(reloj2.calculoDeCuotas3());
        } else if (metodoDePago =="6") {
            alert(reloj2.calculoDeCuotas6());
        } else if (metodoDePago == "12") {
            alert(reloj2.calculoDeCuotas12());
        } else{
            alert("No ingresaste un numero de cuotas valido");
        }

    } else if (eleccion == "3") {
        alert(reloj3.muestraCaracteristicas());
        alert("conozca nuestras tarifas con tarjetas, tenemos planes de 3, 6 y 12 cuotas con sus respectivos intereses");

        metodoDePago = prompt("Elija la cantidad de cuotas con que quisisera abonar:");

        if (metodoDePago == "3") {
            alert(reloj3.calculoDeCuotas3());
        } else if (metodoDePago == "6") {
            alert(reloj3.calculoDeCuotas6());
        } else if (metodoDePago == "12") {
            alert(reloj3.calculoDeCuotas12());
        } else if ((metodoDePago != "3") || (metodoDePago != "6") || (metodoDePago != "12")) {
            alert("No ingresaste un numero de cuotas valido");
        }

    } else if (eleccion == "4") {
        alert(reloj4.muestraCaracteristicas());
        alert("conozca nuestras tarifas con tarjetas, tenemos planes de 3, 6 y 12 cuotas con sus respectivos intereses");

        metodoDePago = prompt("Elija la cantidad de cuotas con que quisisera abonar:");

        if (metodoDePago == "3") {
            alert(reloj4.calculoDeCuotas3());
        } else if (metodoDePago == "6") {
            alert(reloj4.calculoDeCuotas6());
        } else if (metodoDePago == "12") {
            alert(reloj4.calculoDeCuotas12());
        } else {
            alert("No ingresaste un numero de cuotas valido");
        }

    } else if (eleccion == "5") {
        alert(reloj5.muestraCaracteristicas());
        alert("conozca nuestras tarifas con tarjetas, tenemos planes de 3, 6 y 12 cuotas con sus respectivos intereses");
        metodoDePago = prompt("Elija la cantidad de cuotas con que quisisera abonar:")
        if (metodoDePago == "3") {
            alert(reloj5.calculoDeCuotas3());
        } else if (metodoDePago == "6") {
            alert(reloj5.calculoDeCuotas6());
        } else if (metodoDePago == "12") {
            alert(reloj5.calculoDeCuotas12());
        } else {
            alert("No ingresaste un numero de cuotas valido");
        }

    } else if (eleccion == "6") {
        alert(reloj6.muestraCaracteristicas());

    } else {
        alert("Te esperamos pronto!");
        break;
    }
}

if (saber != "si") {
    alert("Te esperamos pronto!");
}

