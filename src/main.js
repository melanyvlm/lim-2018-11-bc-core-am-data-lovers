
// mostrando pantalla de inicio

document.getElementById('pantalla-inicio').style.display = 'block';
document.getElementById('pantalla-dos').style.display = 'none';
document.getElementById('pantalla-tres').style.display = 'none';
document.getElementById('pantalla-cuatro').style.display = 'none';
document.getElementById('pantalla-buscar-pokemon').style.display = 'none';


const btnHistoria = document.getElementById('historia');
const btnEquipos = document.getElementById('equipos');
const btnPokemon = document.getElementById('pokemon');
const btnInicio = document.getElementById('inicio');
const btnBuscarPokemon = document.getElementById('buscar');

btnHistoria.addEventListener('click', irHistoria);
btnEquipos.addEventListener('click', irEquipos);
btnPokemon.addEventListener('click', irPokemon);
btnInicio.addEventListener('click', irInicio);
btnBuscarPokemon.addEventListener('click', buscarPokemon);
function buscarPokemon() {
  document.getElementById('pantalla-buscar-pokemon').style.display = 'block';
  document.getElementById('pantalla-inicio').style.display = 'none';
  document.getElementById('pantalla-dos').style.display = 'none';
  document.getElementById('pantalla-tres').style.display = 'none';
  document.getElementById('pantalla-cuatro').style.display = 'none';
}
function irHistoria() {
  document.getElementById('pantalla-inicio').style.display = 'none';
  document.getElementById('pantalla-dos').style.display = 'block';
  document.getElementById('pantalla-tres').style.display = 'none';
  document.getElementById('pantalla-cuatro').style.display = 'none';
  document.getElementById('pantalla-buscar-pokemon').style.display = 'none';
}
function irEquipos() {
  document.getElementById('pantalla-inicio').style.display = 'none';
  document.getElementById('pantalla-dos').style.display = 'block';
  document.getElementById('pantalla-tres').style.display = 'none';
  document.getElementById('pantalla-cuatro').style.display = 'none';
  document.getElementById('pantalla-buscar-pokemon').style.display = 'none';

}
function irPokemon() {
  document.getElementById('pantalla-inicio').style.display = 'none';
  document.getElementById('pantalla-dos').style.display = 'none';
  document.getElementById('pantalla-tres').style.display = 'none';
  document.getElementById('pantalla-cuatro').style.display = 'block';
  document.getElementById('pantalla-buscar-pokemon').style.display = 'none';
}
function irInicio() {
  document.getElementById('pantalla-inicio').style.display = 'block';
  document.getElementById('pantalla-dos').style.display = 'none';
  document.getElementById('pantalla-tres').style.display = 'none';
  document.getElementById('pantalla-cuatro').style.display = 'none';
  document.getElementById('pantalla-buscar-pokemon').style.display = 'none';
}
const boton = document.getElementById('go');
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
}
