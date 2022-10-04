/*
 * Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
 * Escribir pruebas para esas funciones.
 *
 * Adicional: Escribir pruebas para las funciones de tareas anteriores.
 *
 * */

document.querySelector("#enviar-carta").onclick = function (event) {
  const $form = document.querySelector("#carta-a-santa");
  const nombre = $form.nombre.value;
  const ciudad = $form.ciudad.value;
  const descripcionRegalo = $form["descripcion-regalo"].value;

  const contenedor = document.createElement("div");
  const parrafo = document.createElement("p");
  parrafo.className = "nuevo-parrafo";
  $form.appendChild(contenedor);
  if ((parrafo.innerText = validarNombre(nombre))) {
    contenedor.appendChild(parrafo);
  }
  validarNombre(nombre);
  validarCiudad(ciudad);
  validarDescripcionRegalo(descripcionRegalo);
  return false;
};

function validarNombre(nombre) {
  if (nombre.length === 0) {
    return "Este campo debe tener al menos 1 caracter";
  }
  if (nombre.length >= 50) {
    return "Este campo debe tener menos de 50 caracteres";
  }
  return "";
}

function validarCiudad(ciudad) {
  if (ciudad.length === 0) {
    return "Debes seleccionar una ciudad";
  }

  return "";
}

function validarDescripcionRegalo(descripcionRegalo) {
  if (descripcionRegalo.length === 0) {
    return "Debes escribir que regalo queres";
  }

  if (descripcionRegalo.length >= 70) {
    return "Este campo debe tener menos de 70 caracteres";
  }

  return "";
}
