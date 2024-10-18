<script>
  let color = false;
  function cambiarColor() {
    const boton = document.getElementById("boton");
      if (!color) {
        boton.style.color = "black";
        color = true;
      } else {
        boton.style.color = "white";
        color = false;
      }
  }
</script>
