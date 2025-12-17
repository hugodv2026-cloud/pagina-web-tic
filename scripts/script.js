// Cambiar imagen al hacer clic
let imagenActual = 1;
function cambiarImagen() {
  const img = document.getElementById("imagen");
  imagenActual = imagenActual === 1 ? 2 : 1;
  img.src = `images/img${imagenActual}.jpg`;
}

// Cambiar texto desde un input
function cambiarTexto() {
  const texto = document.getElementById("textoInput").value;
  document.getElementById("titulo").innerText = texto;
}
