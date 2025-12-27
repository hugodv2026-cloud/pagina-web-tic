// 1. CAMBIAR IMAGEN AL HACER CLIC (requisito cumplido)
let imagenActual = 1;
function cambiarImagen() {
  const img = document.getElementById("imagen");
  imagenActual = imagenActual === 1 ? 2 : 1;
  img.src = `images/img${imagenActual}.jpg`;
}

// 2. CAMBIAR TEXTO DESDE INPUT (requisito cumplido - mejorado)
function cambiarTexto() {
  const texto = document.getElementById("textoInput").value;
  const titulo = document.getElementById("titulo");
  
  if (texto.trim() !== "") {
    titulo.innerText = texto;
  } else {
    alert("Por favor, escribe algo antes de cambiar el texto");
  }
}

// BONUS: Cambiar texto en tiempo real mientras escribes
document.getElementById("textoInput").addEventListener("input", function() {
  const texto = this.value;
  const titulo = document.getElementById("titulo");
  
  if (texto.trim() !== "") {
    titulo.innerText = texto;
  } else {
    titulo.innerText = "Mi página web TIC";
  }
});

// 3. OBJETO EN MOVIMIENTO CON JAVASCRIPT (requisito - ahora con JS real)
const cuadro = document.getElementById("cuadro");
let posX = 0;
let posY = 100;
let velocidadX = 3;
let velocidadY = 2;

function moverCuadro() {
  // Actualizar posición
  posX += velocidadX;
  posY += velocidadY;
  
  // Rebotar en los bordes
  if (posX >= window.innerWidth - 50 || posX <= 0) {
    velocidadX = -velocidadX;
  }
  
  if (posY >= window.innerHeight - 50 || posY <= 0) {
    velocidadY = -velocidadY;
  }
  
  // Aplicar nueva posición
  cuadro.style.left = posX + 'px';
  cuadro.style.top = posY + 'px';
  
  // Repetir en el siguiente frame
  requestAnimationFrame(moverCuadro);
}

// Iniciar el movimiento cuando cargue la página
window.addEventListener('load', function() {
  moverCuadro();
});

// Ajustar si se redimensiona la ventana
window.addEventListener('resize', function() {
  if (posX > window.innerWidth - 50) posX = window.innerWidth - 50;
  if (posY > window.innerHeight - 50) posY = window.innerHeight - 50;
});

console.log("✅ JavaScript cargado correctamente");
