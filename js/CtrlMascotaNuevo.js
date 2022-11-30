import {
  getAuth,
  getFirestore
} from "../lib/fabrica.js";
import {
  getString,
  muestraError
} from "../lib/util.js";
import {
  muestraMascota
} from "./navegacion.js";
import {
  tieneRol
} from "./seguridad.js";

const daoAlumno =
  getFirestore().
    collection("Mascota");
/** @type {HTMLFormElement} */
const forma = document["forma"];
getAuth().onAuthStateChanged(
  protege, muestraError);

/** @param {import(
    "../lib/tiposFire.js").User}
    usuario */
async function protege(usuario) {
  if (tieneRol(usuario,
    ["Administrador"])) {
    forma.addEventListener(
      "submit", guarda);
  }
}

/** @param {Event} evt */
async function guarda(evt) {
  try {
    evt.preventDefault();
    const formData =
      new FormData(forma); 
    const nombre = getString(formData, "nombre").trim();
    const edad = getString(formData, "edad").trim();
    const raza = getString(formData, "raza").trim();
    
    /**
     * @type {
        import("./tipos.js").
                Alumno} */
    const modelo = {
      nombre,
      edad,
      raza 
    };
    await daoMascota.
      add(modelo);
    muestraMascota();
  } catch (e) {
    muestraError(e);
  }
}

