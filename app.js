let resultado = "";

do {
    let cadena = prompt("Introduce objetos de tu lista");

    if (resultado == "") {
        resultado = resultado + cadena;
    } else {
        resultado = resultado + "-" + cadena;
    }
} while (confirm("Desea seguir?"));

document.write(resultado);