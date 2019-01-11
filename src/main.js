
const pokemonFunciones = window.pokemonFunciones;
const pokemonDataArray = window.POKEMON.pokemon;

// mostrando pantalla de inicio

document.getElementById('pantalla-inicio').style.display = 'block';
document.getElementById('pantalla-cuatro').style.display = 'none';
document.getElementById('pantalla-buscar-pokemon').style.display = 'none';

const btnBuscarPokemon = document.getElementById('buscar');
const btnInicio = document.getElementById('inicio');
const btnPokemon = document.getElementById('pokemon');

btnPokemon.addEventListener('click', irPokemon);
btnInicio.addEventListener('click', irInicio);
btnBuscarPokemon.addEventListener('click', buscarPokemon);
function buscarPokemon() {
  let saveOrden = [];
for(let i = 0; i < pokemonDataArray.length ; i ++ ){
  saveOrden.push(`<div class="grid-item">
    <input type = "image" src="${pokemonDataArray[i].img}">
     <label>${pokemonDataArray[i].name}</label>
                       </div> `);
    containerList.innerHTML = saveOrden.join('');
}
  document.getElementById('pantalla-buscar-pokemon').style.display = 'block';
  document.getElementById('pantalla-inicio').style.display = 'none';
  // document.getElementById('pantalla-equipos').style.display = 'none';
  document.getElementById('pantalla-cuatro').style.display = 'none';
}

function irPokemon() {
  document.getElementById('pantalla-buscar-pokemon').style.display = 'none';
  document.getElementById('pantalla-inicio').style.display = 'none';
  document.getElementById('pantalla-cuatro').style.display = 'block';
}
function irInicio() {
  document.getElementById('pantalla-buscar-pokemon').style.display = 'none';
  document.getElementById('pantalla-inicio').style.display = 'block';
  document.getElementById('pantalla-cuatro').style.display = 'none';
}

const ingresokm = document.getElementById('ingreso-km');
const filtrotipo = document.getElementById('ingreso-type');
const filtroWeak = document.getElementById('ingreso-weaknesses');
const ordenalfabeto = document.getElementById('orden-alfabeto');
const containerList = document.getElementById('container-list');
const containerList2 = document.getElementById('container-list2');

ingresokm.addEventListener('change', () => {
  let ingresoValor = ingresokm.options[ingresokm.selectedIndex].value;
  const saveArrayFiltrar = pokemonFunciones.filtrar(pokemonDataArray, parseInt(ingresoValor));
  let saveHuevos = [];
  for (let i = 0; i < saveArrayFiltrar.length; i++) {
    saveHuevos.push(`<div class="grid-item">
      <input type = "image" src="${saveArrayFiltrar[i].img}">
      <label>${saveArrayFiltrar[i].name}</label>
                        </div> `);
    containerList.innerHTML = saveHuevos.join('');
  }
});

ordenalfabeto.addEventListener('change', () => {
  let orden = ordenalfabeto.options[ordenalfabeto.selectedIndex].value;
  const saveArrayFiltrar2 = pokemonFunciones.ordenarPoke(pokemonDataArray, parseInt(orden));
  let saveOrden = [];
  for (let i = 0; i < saveArrayFiltrar2.length; i++) {
    saveOrden.push(`<div class="grid-item">
    <input type = "image" src="${saveArrayFiltrar2[i].img}">
     <label>${saveArrayFiltrar2[i].name}</label>
                       </div> `);
    containerList.innerHTML = saveOrden.join('');
  }
});

filtrotipo.addEventListener('change', () => {
  let tipo = filtrotipo.options[filtrotipo.selectedIndex].value;
  const saveArrayFiltrar3 = pokemonFunciones.filterType(pokemonDataArray, tipo);
  let saveTipo = [];
  for (let i = 0; i < saveArrayFiltrar3.length; i++) {
    saveTipo.push(`<div class="grid-item">
    <input type = "image" src="${saveArrayFiltrar3[i].img}">
     <label>${saveArrayFiltrar3[i].name}</label>
                       </div> `);
    containerList.innerHTML = saveTipo.join('');
  }
});

filtroWeak.addEventListener('change', () => {
  let weak = filtroWeak.options[filtroWeak.selectedIndex].value;
  const saveArrayFiltrar4 = pokemonFunciones.filterWeaknesses(pokemonDataArray, weak);
  let saveDebilidad = [];
  for (let i = 0; i < saveArrayFiltrar4.length; i++) {
    saveDebilidad.push(`<div class="grid-item">
    <input type = "image" src="${saveArrayFiltrar4[i].img}">
     <label>${saveArrayFiltrar4[i].name}</label>
                       </div> `);
    containerList.innerHTML = saveDebilidad .join('');
  }
});

const boton = document.getElementById('go');
const caja = document.getElementById('resultado-numero');

boton.addEventListener('click', manejadorClick);
function manejadorClick() {
  const tipo = document.getElementById('tipo-numero').value;
  let ya = pokemonFunciones.numPorTipo(pokemonDataArray, tipo);
  caja.value = ya;
}
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
  });
  containerList2.innerHTML = templateListOfCards;
};

// ejecuntado funciona para pintar la data en mi html
crearTemplateDeCard(pokemonDataArray);