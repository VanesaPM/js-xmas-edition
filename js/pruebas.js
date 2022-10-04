// function probarValidarNombre() {
//   console.assert(
//     validarNombre("") === "Este campo debe tener al menos 1 caracter",
//     "Validar nombre no validó que el nombre no sea vacío"
//   );

//   console.assert(
//     validarNombre(
//       "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
//     ) === "Este campo debe tener menos de 50 caracteres",
//     "Validar nombre no validó que el nombre sea menor a 50 caracteres"
//   );
// }

// probarValidarNombre();

function probarValidarNombre() {
  console.assert(
    validarNombre("") === "Este campo debe tener al menos 1 caracter",
    "Validar nombre no valido que el nombre no sea vacio"
  );

  console.assert(
    validarNombre(
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    ) === "Este campo debe tener menos de 50 caracteres",
    "Validar nombre no valido que el nombre tenga menos de 50 caracteres"
  );
  console.assert(validarNombre("Nombre de usuario") === ""),
    "Validar nombre no funciono con un nombre valido)";
}

function probarValidarCiudad() {
  console.assert(
    validarCiudad("") === "Debes seleccionar una ciudad",
    "Validar ciudad no valido que ciudad no este vacio"
  );
  console.assert(
    validarCiudad("Ciudad donde vivis") === "",
    "Validar ciudad no funciono con una ciudad valida"
  );
}

function probarValidarDescripcionRegalo() {
  console.assert(
    validarDescripcionRegalo("") === "Debes escribir que regalo queres",
    "Validar descripcion regalo no funciono con una descripcion que no sea vacia"
  );
  console.assert(
    validarDescripcionRegalo("Regalo que queres") === "",
    "Validar descripcion regalo no funciono con una descripcion valida"
  );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
