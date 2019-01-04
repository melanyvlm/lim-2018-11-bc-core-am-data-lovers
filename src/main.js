const pokemonData = window.POKEMON.pokemon;
const pokemonFunciones = window.pokemonFunciones;

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

const ingresokm = document.getElementById('ingreso-km');
const containerList = document.getElementById('container-list');
const ordenalfabeto = document.getElementById('orden-alfabeto');
const containerList2 = document.getElementById('container-list2');

ingresokm.addEventListener('change', () => {
    let ingresoValor = ingresokm.options[ingresokm.selectedIndex].value;
    const saveArrayFiltrar = pokemonFunciones.filtrar(parseInt(ingresoValor));
    let saveHijoPapa = [];
    for (let i = 0; i < saveArrayFiltrar.length; i++) {
      saveHijoPapa.push(`<div class="grid-item">
      <input type = "image" src="${saveArrayFiltrar[i].img}">
      <label>${saveArrayFiltrar[i].name}</label>
                        </div> `);
    containerList.innerHTML = saveHijoPapa.join('');
    }
});

ordenalfabeto.addEventListener('change', () => {
  let orden = ordenalfabeto.options[ordenalfabeto.selectedIndex].value;
  const saveArrayFiltrar2 = pokemonFunciones.ordenarPoke(parseInt(orden));
  let saveHijoPapa = [];
  for (let i = 0; i < saveArrayFiltrar2.length; i++) {
    saveHijoPapa.push(`<div class="grid-item">
    <input type = "image" src="${saveArrayFiltrar2[i].img}">
     <label>${saveArrayFiltrar2[i].name}</label>
                       </div> `);
    containerList.innerHTML = saveHijoPapa.join('');
}
});

const crearTemplateDeCard = (data) => {
  let templateListOfCards = '';
  // recorremos nuestro array con forEach
  data.forEach((poke) => {
    // creamos un template(string) por cada elemento del array
    const card = `
    <div class="card-link">
    <article class="blog-card">
      <img class="post-image" src="${ poke.img }" />
      <div class="article-details">
        <h3 class="post-title">${ poke.name }</h3>
      </div>
    </article>
  </div>
  `;
    // vamos concatenando cada li 
    templateListOfCards += card;
  })
  containerList2.innerHTML = templateListOfCards;
}

// ejecuntado funciona para pintar la data en mi html
crearTemplateDeCard(pokemonData)