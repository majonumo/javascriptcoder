let resultado = "";

let productoUsuario = "";
do {
    let cadena = prompt("Introduce objetos de tu lista");
    let productoUsuario = Number(
        prompt("ingresa el precio del objeto de tu lista")
    );
    if (resultado == "") {
        resultado = resultado + cadena + productoUsuario;
    } else {
        resultado = resultado + "-" + cadena + productoUsuario;
    }

    let iva = Number(prompt("Introduce el iva"));
    if (iva > 0) {
        var Resultado = masIva(productoUsuario, iva);
    } else {
        var Resultado = masIva(productoUsuario);
    }
    document.write("<br>Precio sin iva: " + cadena + productoUsuario);
    document.write("<br>Precio más Iva: " + cadena + Resultado);
} while (confirm("Desea seguir?"));
document.write("<br>" + resultado + productoUsuario);

function masIva(productoUsuario, iva) {
    iva = iva || 21;
    let coniva = productoUsuario + (productoUsuario * iva) / 100;
    return coniva;
}