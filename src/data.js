// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/* const example = () => {
  return 'example';
};*/

/* window.POKEMON = POKEMON;

let ingresoValor = parseInt(document.getElementById('ingreso-km').value);
function filtrar(ingresoValor) {
  let prueba = "";
  if (ingresoValor === 2) {
    prueba = POKEMON.pokemon.filter(recorrido => recorrido.egg === '2 km');
    
    return prueba;
  }
  if (ingresoValor === 5) {
    prueba = POKEMON.pokemon.filter(recorrido => (recorrido.egg === '5 km'));
    return prueba;
  }

  if (ingresoValor === 10) {
    prueba = POKEMON.pokemon.filter(recorrido => (recorrido.egg === '10 km'));
    return prueba;
  }
}*/
let ingresoValor = parseInt(document.getElementById('ingreso-km').value);
function filtrar(ingresoValor) {
  let prueba = "";
  if (ingresoValor === 2) {
    prueba = pokemonData.filter(recorrido => recorrido.egg === '2 km');
    
    return prueba;
  }
  if (ingresoValor === 5) {
    prueba = pokemonData.filter(recorrido => (recorrido.egg === '5 km'));
    return prueba;
  }

  if (ingresoValor === 10) {
    prueba = pokemonData.filter(recorrido => (recorrido.egg === '10 km'));
    return prueba;
  }
}

function ordenarPoke(orden) {
  let ordenados = '';
  if (orden === 1) {
    ordenados = pokemonData.sort(function(primerElemento, segundoElemento) {
      if (primerElemento.name > segundoElemento.name) return 1;
      else return -1;
    });
    return ordenados;
  } else if (orden === 2) {
    ordenados = pokemonData.sort(function(primerElemento, segundoElemento) {
      if (primerElemento.name < segundoElemento.name) return 1;
      else return -1;
    });    
    return ordenados;
  }
}  

ordenarPoke();

function filterType(tipo) {
  let filtradosTipo = '';
    filtradosTipo = pokemonData.filter(function(filt) {
      return filt.type.includes(tipo);
      });
  return filtradosTipo;
}

window.pokemonFunciones = {
  filtrar,
  ordenarPoke,
  filterType,
};
