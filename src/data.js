// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/* const example = () => {
  return 'example';
};*/

function filtrar(ingresoValor) {
  let prueba = [];
  
  if (ingresoValor === 2) {
    prueba = pokemonData.filter(recorrido => (recorrido.egg === '2 km'));
  } else if (ingresoValor === 5) {
    prueba = pokemonData.filter(recorrido => (recorrido.egg === '5 km'));
  } else if (ingresoValor === 10) {
    prueba = pokemonData.filter(recorrido => (recorrido.egg === '10 km'));
  }

  return prueba;
}

function ordenarPoke(orden) {
  let ordenados = [];

  if (orden === 1) {
    ordenados = pokemonData.sort((primerElemento, segundoElemento) => {
      if (primerElemento.name > segundoElemento.name) return 1;
      else return -1;
    });
  } else if (orden === 2) {
    ordenados = pokemonData.sort((primerElemento, segundoElemento) => {
      if (primerElemento.name < segundoElemento.name) return 1;
      else return -1;
    });
  }
  return ordenados;  
}  

function filterType(tipo) {
  let filtradosTipo = [];
  filtradosTipo = pokemonData.filter((filt) => {
    return filt.type.includes(tipo);
  });
  return filtradosTipo;
}

function filterWeaknesses(weak) {
  let filtradosDebilidad = [];
  filtradosDebilidad = pokemonData.filter((filtrado) => {
    return filtrado.weaknesses.includes(weak);
  });
  return filtradosDebilidad;
}

function numPorTipo(tipo) {
  let filtradosTipo = [];
  filtradosTipo = pokemonData.filter((filt) => {
    return filt.type.includes(tipo);
  });
  return filtradosTipo.length;
}

window.pokemonFunciones = {
  filtrar,
  ordenarPoke,
  filterType,
  filterWeaknesses,
  numPorTipo,
};
