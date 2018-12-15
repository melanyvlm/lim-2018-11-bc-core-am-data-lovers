// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

window.POKEMON = POKEMON;

let ingresoValor = parseInt(document.getElementById("ingreso-km").value);

 function filtrar (ingresoValor) {
  
if (ingresoValor === 2 ) {
return POKEMON.pokemon.filter(recorrido => (recorrido.egg === "2 km")).map(nom => `${nom.name}`);
}
 if (ingresoValor === 5 ) {
return POKEMON.pokemon.filter(recorrido => (recorrido.egg === "5 km")).map(nom => `${nom.name}`);
}
 if (ingresoValor === 10 ) {
  return POKEMON.pokemon.filter(recorrido => (recorrido.egg === "10 km")).map(nom => `${nom.name}`);
 } 
};
