
let imagenActual = 1;
function cambiarImagen() {
  const img = document.getElementById("imagen");
  imagenActual = imagenActual === 1 ? 2 : 1;
  img.src = `images/img${imagenActual}.jpg`;
}


function cambiarTexto() {
  const texto = document.getElementById("textoInput").value;
  const titulo = document.getElementById("titulo");
  
  if (texto.trim() !== "") {
    titulo.innerText = texto;
  } else {
    alert("Por favor, escribe algo antes de cambiar el texto");
  }
}


document.getElementById("textoInput").addEventListener("input", function() {
  const texto = this.value;
  const titulo = document.getElementById("titulo");
  
  if (texto.trim() !== "") {
    titulo.innerText = texto;
  } else {
    titulo.innerText = "Mi página web TIC";
  }
});


const cuadro = document.getElementById("cuadro");
let posX = 0;
let posY = 100;
let velocidadX = 3;
let velocidadY = 2;

function moverCuadro() {

  posX += velocidadX;
  posY += velocidadY;
  

  if (posX >= window.innerWidth - 50 || posX <= 0) {
    velocidadX = -velocidadX;
  }
  
  if (posY >= window.innerHeight - 50 || posY <= 0) {
    velocidadY = -velocidadY;
  }
  

  cuadro.style.left = posX + 'px';
  cuadro.style.top = posY + 'px';
  

  requestAnimationFrame(moverCuadro);
}


window.addEventListener('load', function() {
  moverCuadro();
});


window.addEventListener('resize', function() {
  if (posX > window.innerWidth - 50) posX = window.innerWidth - 50;
  if (posY > window.innerHeight - 50) posY = window.innerHeight - 50;
});

console.log("✅ JavaScript cargado correctamente");
