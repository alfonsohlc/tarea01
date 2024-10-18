console.log("carga script.js");
let color = false;
function cambiarColor() {
    const boton = document.getElementById("boton");
    if (!color) {
        boton.style.color = "black"; // Cambia el color a negro
        color = true;
    } else {
        boton.style.color = "white"; // Cambia el color a blanco
        color = false;
    }
}
