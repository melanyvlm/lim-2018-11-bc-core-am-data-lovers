const boton = document.getElementById("go");
boton.addEventListener("click", manejadorClick);
const contenedor = document.getElementById ("container");

function manejadorClick () {
    let ingresoValor = parseInt(document.getElementById("ingreso-km").value);
    contenedor.innerHTML= filtrar(ingresoValor);
    }
