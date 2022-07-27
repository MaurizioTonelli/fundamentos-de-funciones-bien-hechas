async function enviarRegistroDeUsuario(nombre, correo, contra) {
  console.log("Enviando nombre: ", nombre);
  console.log("Enviando usuario", correo);
  console.log("Enviando contraseña", contra);
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

function obtenerDatosDelFormulario() {
  console.log("Obteniendo datos del formulario");
  let nombre = document.querySelector("#nombre");
  let correo = document.querySelector("#correo");
  let contra = document.querySelector("#contra");
  console.log("-------------------------");
  return { nombre, correo, contra };
}

async function ejecutarFuncionMostrandoCarga(fn) {
  let cargando = document.querySelector("#cargando");
  cargando.style.display = "block";
  await fn();
  cargando.style.display = "none";
}

async function enviarDatos(datos) {
  console.log("Enviando datos");

  await ejecutarFuncionMostrandoCarga(async () => {
    await enviarRegistroDeUsuario(datos.nombre, datos.correo, datos.contra);
  });
  console.log("Datos enviados");
  console.log("-------------------------");

  alert("Usuario registrado");
}

function restablecerFormulario() {
  console.log("Borrando datos del formulario");
  nombre.value = "";
  correo.value = "";
  contra.value = "";
  console.log("-------------------------");
}

async function manejarEnvioDeFormulario() {
  let datos = await obtenerDatosDelFormulario();
  enviarDatos(datos);
  restablecerFormulario();
}

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  manejarEnvioDeFormulario();
});
