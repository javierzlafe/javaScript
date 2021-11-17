let dolar = 200, euro = 224, real = 20;
function saludo() {
    alert("Hola! Bienvenido al conversor de divisas online!")
}

function calculoDivisa(dineroPesos, divisa) {
    switch (divisa) {
        case "dolar":
            alert("Con " + dineroPesos + " puedes comprar " + (dineroPesos / dolar) + " dolares.");

            break;

        case "euro":
            alert("Con " + dineroPesos + " puedes comprar " + (dineroPesos / euro) + " euros.");
            break;

        case "real":
            alert("Con " + dineroPesos + " puedes comprar " + (dineroPesos / real) + " reales.");
            break;

        default:
            alert("No ingresaste una divisa valida");
    }
}

function despedida() {
    alert("Muchas gracias por utilizar nuestros servicios!")
}

saludo();
let dineroPesos = prompt("Ingresa el monto en pesos que queres cambiar:");
let divisa = prompt("Ingresa la divisa a la que queres cambiar (dolar-euro-real):");



calculoDivisa();
let resultado = calculoDivisa(dineroPesos, divisa);

despedida();