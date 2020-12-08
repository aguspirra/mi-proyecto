function alerta() {
    var mensaje;
    var opcion = confirm("GRACIAS POR ELEGIRNOS!ESPERAMOS QUE DISFRUTES NUESTRO CONTENIDO!");
    if (opcion == true) {
        mensaje = "Has clickado OK";
    } else {
        mensaje = "Has clickado Cancelar";
    }
    document.getElementById("ejemplo").innerHTML = mensaje;
}