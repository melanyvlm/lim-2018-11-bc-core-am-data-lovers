
// mostrando pantalla de inicio

document.getElementById('pantalla-inicio').style.display = 'block';
document.getElementById('pantalla-equipos').style.display = 'none';
document.getElementById('pantalla-cuatro').style.display = 'none';
document.getElementById('pantalla-buscar-pokemon').style.display = 'none';

const btnBuscarPokemon = document.getElementById('buscar');
const btnInicio = document.getElementById('inicio');
const btnEquipos = document.getElementById('equipos');
const btnPokemon = document.getElementById('pokemon');

btnEquipos.addEventListener('click', irEquipos);
btnPokemon.addEventListener('click', irPokemon);
btnInicio.addEventListener('click', irInicio);
btnBuscarPokemon.addEventListener('click', buscarPokemon);
function buscarPokemon() {
  document.getElementById('pantalla-buscar-pokemon').style.display = 'block';
  document.getElementById('pantalla-inicio').style.display = 'none';
  document.getElementById('pantalla-equipos').style.display = 'none';
  document.getElementById('pantalla-cuatro').style.display = 'none';
}
function irEquipos() {
  document.getElementById('pantalla-buscar-pokemon').style.display = 'none';
  document.getElementById('pantalla-inicio').style.display = 'none';
  document.getElementById('pantalla-equipos').style.display = 'block';
  document.getElementById('pantalla-cuatro').style.display = 'none';
}
function irPokemon() {
  document.getElementById('pantalla-buscar-pokemon').style.display = 'none';
  document.getElementById('pantalla-inicio').style.display = 'none';
  document.getElementById('pantalla-equipos').style.display = 'none';
  document.getElementById('pantalla-cuatro').style.display = 'block';
}
function irInicio() {
  document.getElementById('pantalla-buscar-pokemon').style.display = 'none';
  document.getElementById('pantalla-inicio').style.display = 'block';
  document.getElementById('pantalla-equipos').style.display = 'none';
  document.getElementById('pantalla-cuatro').style.display = 'none';
}
/* const boton = document.getElementById('go');
boton.addEventListener('click', manejadorClick);
const containerList = document.getElementById('container-list');
function manejadorClick() {
  let ingresoValor = parseInt(document.getElementById('ingreso-km').value);
  const saveArrayFiltrar = filtrar(ingresoValor);
  let saveHijoPapa = [];
  for (let i = 0; i < saveArrayFiltrar.length; i++) {
    saveHijoPapa.push(`<div class="grid-item">
    <input type = "image" src="${saveArrayFiltrar[i].img}">
     <label>${saveArrayFiltrar[i].name}</label>
                       </div> `);
  }
  containerList.innerHTML = saveHijoPapa.join('');
}*/