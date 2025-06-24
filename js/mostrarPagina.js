function mostrarVista(id) {
  // Oculta todas las vistas
  const vistas = document.querySelectorAll('.vista');
  vistas.forEach(vista => vista.classList.remove('activa'));

  // Oculta el menú principal
  document.getElementById('menu-principal').classList.remove('activa');

  // Muestra la vista correspondiente
  const vistaSeleccionada = document.getElementById(id);
  if (vistaSeleccionada) {
    vistaSeleccionada.classList.add('activa');
  }
}

function volverAlMenu() {
  // Oculta todas las vistas
  const vistas = document.querySelectorAll('.vista');
  vistas.forEach(vista => vista.classList.remove('activa'));

  // Muestra el menú principal
  document.getElementById('menu-principal').classList.add('activa');
}

function enviarComentario() {
  const textarea = document.getElementById('comentario');
  const respuesta = document.getElementById('respuesta');
  const lista = document.getElementById('lista-comentarios');

  const texto = textarea.value.trim();

  if (texto === "") {
    respuesta.textContent = "Por favor, escribe un comentario antes de enviar.";
    respuesta.style.color = "red";
    return;
  }

  // Crear nuevo elemento de lista
  const nuevoComentario = document.createElement('li');
  nuevoComentario.textContent = texto;

  // Agregarlo a la lista
  lista.appendChild(nuevoComentario);

  // Limpiar el campo y mostrar mensaje
  textarea.value = "";
  respuesta.textContent = "Comentario agregado correctamente.";
  respuesta.style.color = "green";
}
