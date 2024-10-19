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

function handleSearch() {
    const searchTerm = document.getElementById('search-query').value;
    gtag('event', 'search', {
        search_term: searchTerm
    });
    // Redirigir a la página de resultados con el término de búsqueda
    const resultadosUrl = 'resultados.html?q=' + encodeURIComponent(searchTerm);
    window.location.href = resultadosUrl; // Cambia la URL de la ventana actual
}
